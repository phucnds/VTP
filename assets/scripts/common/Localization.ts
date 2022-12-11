const { ccclass, property } = cc._decorator;
import * as STRINGS from '../../strings';
import Events from './Events';

const enumObj = {};
export const LOCALIZATION_KEYS = Object.keys(STRINGS);
for (let i = 0; i < LOCALIZATION_KEYS.length; i++) {
    enumObj[LOCALIZATION_KEYS[i]] = i;
}

export const LOCALIZATION_ENUM = cc.Enum(enumObj);
export const TextTransforms = cc.Enum({
    None: 0,
    Upper: 1,
    Lower: 2,
});

@ccclass
export default class Localization extends cc.Component {
    static GetLocalizedString(key: string): string {
        // (window as any).language = "en";
        if((window as any).language == "en") (window as any).language = "vi"
        if (STRINGS[key]) {
            return STRINGS[key][((window as any).language || "vi").toUpperCase()] || '';
        }
        return '';
    }

    static ChangeLanguage(language: string) {
        // localStorage.setItem("lang", language == "vi" ? "en" : language);
        localStorage.setItem("lang", "vi");
        (window as any).language = language;
        Events.emit(Events.EventLanguageChanged);
    }
}