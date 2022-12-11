export default new (class GameDefine {
  public GAME_DEBUG = false;
  public TIME_SPIN = 3; // thời gian spin của cột đầu tiên
  public STEP_TIME_SPIN = 2; // thời gian spin cộng thêm ở các cột sau VD: cột 2 sẽ là TIME_SPIN + STEP_TIME_SPIN
  public TIME_API_TIMEOUT = 15;
  public STRING_TIMEOUT = "TIMEOUT";
  public SHAKE_DURATION = 0.5;
  public QTY_BUY_TURN_COIN = 120;
  public IDLE_TIMEOUT = 300;

  public WEEKLY_EXCHANGE_AMOUNT = 5000;

  public COLOR_RED = new cc.Color(228, 37, 23);
  public COLOR_BROWN = new cc.Color(106, 13, 13);

  public EVENT_END_DATE = '2022-12-31T17:00:00.000Z';

  public questsToShow = [
    'MO_GAME',
    'MO_GAME_LAN_DAU',
    'XAC_THUC_THONG_TIN',
    'CHIA_SE_GAME',
    'THAM_QUAN_GUI_TIET_KIEM',
    'THAM_QUAN_VI_PAY_NOW',
    'THAM_QUAN_DAU_TU_SAVE_NOW',
    'LIEN_KET_THE',
    'CONG_DONG_SUC_KHOE',
    'THAM_QUAN_EASYVAY',
    'THAM_QUAN_TIEN_MAT_XOAY_VONG',
    'THAM_QUAN_MUA_TRUOC_TRA_SAU',
  ]

  // Gift
  public GIFT_SPEED = 350;
  public GIFT_SPEED_MIN = 100;
  public GIFT_BREAK_A = 7000;
  public GIFT_GAP = 250;
  public GIFT_CHOSEN_ANIM_TIME = 1;
  public GIFT_CHOSEN_SCALE = 2;
})
