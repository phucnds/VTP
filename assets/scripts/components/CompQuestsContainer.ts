// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import * as R from 'ramda';
import connect from "../src/app/connect";
import store, { AppDispatch, RootState } from "../src/app/store";
import { EAppPages, IPageWithEffect, PAGE_SHOW_EFFECT, popPage, pushPage } from "../src/features/SliceApp";
import SingletonNode from "../utils/SingletonNode";
import Helper from "../utils/Helper";
import APIDefine from "../src/app/APIDefine";
import wsgw from "../src/app/wsgw";
import CompQuest from './CompQuest';
import { mockQuestsData } from '../src/mockData';
import GameDefine from '../src/common/GameDefine';
import { PageHome } from '../Pages/PageHome';
import { randomString, trackUserInteract } from '../src/common/utils';
import { checkRewardPopup } from '../src/common/common';
import { syncQuests } from '../src/features/SliceQuests';
import { userProfile } from '../common/UserProfile';

const { ccclass, property } = cc._decorator;

enum QuestsContainerParams {
    OPEN_Y = -568,
    CLOSE_Y = -1317,
    DRAG_THRESHOLD = 150,
    MASK_OPEN = 740,
    MASK_CLOSE = 270,
    BG_TOUCH_ZONE_OPEN_HEIGHT = 100,
    BG_TOUCH_ZONE_CLOSE_HEIGHT = 1000,
}

export enum DailyQuestTabNames {
    SETTING_AND_UPDATE,
    CHECK_IN,
    SELFCARE,
    LIFEBOX,
    VIETTEL_PLUS,
    CONNECTION,
    CHECK_OUT,
    ENTERTAINMENT,
    SHOPPING,
    SHARING,
    TOUR,
}

export enum Missions {
    MO_GAME = 'MO_GAME',
    MO_GAME_LAN_DAU = 'MO_GAME_LAN_DAU',
    XAC_THUC_THONG_TIN = 'XAC_THUC_THONG_TIN',
    CHIA_SE_GAME = 'CHIA_SE_GAME',
    THAM_QUAN_GUI_TIET_KIEM = 'THAM_QUAN_GUI_TIET_KIEM',
    THAM_QUAN_VI_PAY_NOW = 'THAM_QUAN_VI_PAY_NOW',
    THAM_QUAN_DAU_TU_SAVE_NOW = 'THAM_QUAN_DAU_TU_SAVE_NOW',
    THAM_QUAN_EASYVAY = 'THAM_QUAN_EASYVAY',
    THAM_QUAN_TIEN_MAT_XOAY_VONG = 'THAM_QUAN_TIEN_MAT_XOAY_VONG',
    THAM_QUAN_MUA_TRUOC_TRA_SAU = 'THAM_QUAN_MUA_TRUOC_TRA_SAU',
    LIEN_KET_THE = 'LIEN_KET_THE',
    CONG_DONG_SUC_KHOE = 'CONG_DONG_SUC_KHOE'
}

export const MissionsButtonText = {
    [Missions.XAC_THUC_THONG_TIN]: 'Xác thực',
    [Missions.LIEN_KET_THE]: 'Liên kết',
    [Missions.THAM_QUAN_GUI_TIET_KIEM]: 'Tham quan',
    [Missions.THAM_QUAN_VI_PAY_NOW]: 'Tham quan',
    [Missions.THAM_QUAN_DAU_TU_SAVE_NOW]: 'Tham quan',
    [Missions.THAM_QUAN_EASYVAY]: 'Tham quan',
    [Missions.THAM_QUAN_TIEN_MAT_XOAY_VONG]: 'Tham quan',
    [Missions.THAM_QUAN_MUA_TRUOC_TRA_SAU]: 'Tham quan',
    [Missions.CONG_DONG_SUC_KHOE]: 'Tham gia',
    [Missions.CHIA_SE_GAME]: 'Chia sẻ',
}

export interface ITask {
    id: number;
    name: string;
    point: number;
    isCompleted: boolean;
    giftId: Array<number>;
}

export const btnCallBacks = {
    [Missions.THAM_QUAN_DAU_TU_SAVE_NOW]: () => {
        store.dispatch(pushPage({ page: EAppPages.PageSavenow, effect: PAGE_SHOW_EFFECT.LEFT }))
    },
    [Missions.THAM_QUAN_VI_PAY_NOW]: () => {
        store.dispatch(pushPage({ page: EAppPages.PagePaynow, effect: PAGE_SHOW_EFFECT.LEFT }))
    },
    [Missions.THAM_QUAN_GUI_TIET_KIEM]: () => {
        store.dispatch(pushPage({ page: EAppPages.PageGuiTietKiem, effect: PAGE_SHOW_EFFECT.LEFT }))
    },
    [Missions.THAM_QUAN_EASYVAY]: () => {
        store.dispatch(pushPage({ page: EAppPages.PageEasyvay, effect: PAGE_SHOW_EFFECT.LEFT }))
    },
    [Missions.THAM_QUAN_TIEN_MAT_XOAY_VONG]: () => {
        store.dispatch(pushPage({ page: EAppPages.PageTienMat, effect: PAGE_SHOW_EFFECT.LEFT }))
    },
    [Missions.THAM_QUAN_MUA_TRUOC_TRA_SAU]: () => {
        store.dispatch(pushPage({ page: EAppPages.PageMuaTruoc, effect: PAGE_SHOW_EFFECT.LEFT }))
    },
}

export class CompQuestsContainer extends SingletonNode<CompQuestsContainer>() {
    props: RootState
    actions: any;

    @property(cc.Prefab)
    public questPrefab: cc.Prefab = null;

    @property(cc.Node)
    public content: cc.Node = null;

    @property(cc.Node)
    public bgTouchZone: cc.Node = null;
    @property(cc.Node)
    public title: cc.Node = null;
    @property(cc.Node)
    public titleBigTouchZone: cc.Node = null;

    @property(cc.Node)
    public body: cc.Node = null;

    @property(cc.Node)
    public scrollView: cc.Node = null;
    @property(cc.Node)
    public mask: cc.Node = null;
    @property(cc.Node)
    public scrollBar: cc.Node = null;
    @property(cc.Boolean)
    public interactive: boolean = false;

    private isOpen: boolean = false;
    private isDragged: boolean = false;

    get IsOpen() { return this.isOpen; }

    private currentTabIndex: number = DailyQuestTabNames.SETTING_AND_UPDATE;

    onLoad() {
        super.onLoad();
        Helper.registerButtonEvent(this.bgTouchZone, () => {
            trackUserInteract()
            if (this.isDragged) {
                this.isDragged = false;
                return;
            }
            this.isOpen ? this.Close() : this.Open()
        });

        Helper.registerButtonEvent(this.titleBigTouchZone, () => {
            if (this.isDragged) {
                this.isDragged = false;
                return;
            }
            this.isOpen ? this.Close() : this.Open()
        });

        if (this.interactive) {
            let mouseDown = false;
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_START, (event) => {
                this.isDragged = false;
                mouseDown = true;
            });
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_MOVE, (event) => {
                if (!mouseDown) return;
                let delta = event.getDelta();
                const newY = this.node.y + delta.y;

                if (newY < QuestsContainerParams.CLOSE_Y || newY > QuestsContainerParams.OPEN_Y) {
                    return;
                }

                this.node.y = newY;

                if (this.isOpen) {
                    if (this.node.y < QuestsContainerParams.OPEN_Y - QuestsContainerParams.DRAG_THRESHOLD) {
                        mouseDown = false;
                        this.Close();
                        this.isDragged = true;
                    }
                } else {
                    if (this.node.y > QuestsContainerParams.CLOSE_Y + QuestsContainerParams.DRAG_THRESHOLD) {
                        mouseDown = false;
                        this.Open();
                        this.isDragged = true;
                    }
                }
            });
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_END, (event) => {
                mouseDown = false;
                this.onTouchEnd();
            });
            this.bgTouchZone.on(cc.Node.EventType.TOUCH_CANCEL, (event) => {
                mouseDown = false;
                this.onTouchEnd();
            });
        }

        this.onStateChange();
    }

    onTouchEnd() {
        if (this.isOpen) {
            if (this.node.y >= QuestsContainerParams.CLOSE_Y + QuestsContainerParams.DRAG_THRESHOLD) {
                this.Open();
                this.isDragged = true;
            }
        } else {
            if (this.node.y <= QuestsContainerParams.OPEN_Y - QuestsContainerParams.DRAG_THRESHOLD) {
                this.Close();
                this.isDragged = true;
            }
        }
    }

    Open() {
        this.isOpen = true;
        this.titleBigTouchZone.active = true;
        this.bgTouchZone.height = QuestsContainerParams.BG_TOUCH_ZONE_OPEN_HEIGHT;

        cc.tween(this.node)
            .to(0.25, { position: cc.v3(0, QuestsContainerParams.OPEN_Y, 0) })
            .start();

        this.scrollView.height = QuestsContainerParams.MASK_OPEN;
        this.mask.height = QuestsContainerParams.MASK_OPEN;
        this.body.height = QuestsContainerParams.MASK_OPEN;
        this.scrollBar.height = QuestsContainerParams.MASK_OPEN;
    }

    Close() {
        this.isOpen = false;
        this.titleBigTouchZone.active = false;
        this.bgTouchZone.height = QuestsContainerParams.BG_TOUCH_ZONE_CLOSE_HEIGHT;

        this.scrollView.getComponent(cc.ScrollView).scrollToTop();

        cc.tween(this.node)
            .to(0.25, { position: cc.v3(0, QuestsContainerParams.CLOSE_Y, 0) })
            .call(() => {
                this.scrollView.height = QuestsContainerParams.MASK_CLOSE;
                this.mask.height = QuestsContainerParams.MASK_CLOSE;
                this.body.height = QuestsContainerParams.MASK_CLOSE + 150;
                this.scrollBar.height = QuestsContainerParams.MASK_CLOSE;
            })
            .start();
    }

    onStateChange() {
        this.content.removeAllChildren();

        const dataToUse = R.pipe(
            // R.filter(
            //     (quest: any) => R.includes(quest.name, GameDefine.questsToShow)
            // ),
            R.map((data: any) => {
                const { name, addTurn } = data;
                let level = -1;
                if (name === 'MO_GAME') {
                    level = Math.floor(this.props.login.loginStreak / 7);
                    level = level < 4 ? level : 4;
                }
                return {
                    ...data,
                    addTurn: level >= 0 ? R.values(addTurn)[level] : addTurn,
                    btnCB: btnCallBacks[name],
                }
            }),
            R.sort(R.ascend((data) => {
                const { done, max } = data;
                let value = 0;
                value += done >= max ? 1000 : 0;
                return value
            })),
        )(this.props.quests.data);

        dataToUse.forEach((data) => {
            const { name, displayName, description, addCoin, addTurn, done, max, deeplink, btnCB } = data;
            this.addItem(done, max, displayName, description, addCoin, addTurn, deeplink, btnCB, name);
        })
    }

    addItem(
        progress: number,
        max: number,
        name: string,
        description: string,
        coin: number,
        ticket: number,
        deeplink: string,
        btnCB: Function = null,
        questCode: '',
    ) {
        const newQuest = cc.instantiate(this.questPrefab);
        this.content.addChild(newQuest);

        newQuest.getComponent(CompQuest).init(progress, max, name, description, coin, ticket, deeplink, btnCB, questCode);
    }

    // update (dt) {}
}

const mapStateToProps = (state: RootState) => ({
    quests: state.quests,
    login: state.login
})
const mapDispatchToAction = (dispatch: AppDispatch) => ({
    pushPage: (payload: EAppPages | IPageWithEffect) =>
        dispatch(pushPage(payload)),
    popPage: () => dispatch(popPage()),
})
export default connect(mapStateToProps, mapDispatchToAction)(CompQuestsContainer)
