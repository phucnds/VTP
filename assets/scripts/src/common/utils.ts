import Localization, { LOCALIZATION_KEYS } from "../../common/Localization";
import APIDefine from "../app/APIDefine";
import wsgw from "../app/wsgw";

// import { Howl } from 'howler';
let global_id = Date.now();
export const getUnitId = (): string => {
    return `uid-${global_id++}`;
};

// const soundDock = new Howl({
//   src: ['sound/dock.webm', 'sound/dock.mp3']
// });
// const soundRoll = new Howl({
//   src: ['sound/roll.webm', 'sound/roll.mp3']
// });
// const soundWinSpin = new Howl({
//   src: ['sound/win-spin.mp3']
// });
// const soundClick = new Howl({
//   src: ['sound/tap.webm', 'sound/tap.mp3']
// });
// export const playSoundDock = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   await soundDock.play();
// };

// export const playSoundRoll = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   if (!soundRoll) {
//     return;
//   }
//   await soundRoll.play();
// };

// export const playSoundWinSpin = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   if (!soundWinSpin) {
//     return;
//   }
//   await soundWinSpin.play();
// };

// export const playSoundClick = async () => {
//   if (localStorage.getItem('muteSfx')) {
//     return;
//   }
//   if (!soundClick) {
//     return;
//   }
//   await soundClick.play();
// };

export const formatCurrency = (val: number, digits?: number) => {
    if (parseInt(`${val}`) === parseFloat(`${val}`)) {
        return val;
    }
    return val.toFixed(digits || 1);
};

export const isVNBuild = () => {
    return window.location.origin === 'https://elofun-vn.web.app';
};

export const disableLogin = () => {
    return window.location.origin === 'https://myid-games-staging.elofun.com';
};

export const isReviewBuild = () => {
    return (
        window.location.origin === 'https://elofun.com' ||
        window.location.origin === 'https://elofungames.com'
    );
};

export const isMyID = () => {
    return (
        window.location.origin === 'https://myid-games.elofun.com' ||
        window.location.origin === 'https://elofun-myid-game-staging.web.app'
    );
};

export const isMyViettelDev = () => {
    return (
        window.location.origin === 'https://mvt-dev.elofun.com' ||
        window.location.origin === 'http://localhost:7456'
    );
}

export const getRemainTime = (startDate: number, endDate: number) => {
    if (Date.now() > endDate * 1000) {
        return {
            active: false,
            days: 0,
            duration: '00:00:00',
            percent: 100
        };
    }
    let duration = Math.max(endDate * 1000 - Date.now(), 0);
    const days = Math.floor(duration / (24 * 3600 * 1000));
    duration -= days * 24 * 3600 * 1000;

    const hours = Math.floor(duration / (3600 * 1000));
    duration -= hours * 3600 * 1000;

    const minutes = Math.floor(duration / (60 * 1000));
    duration -= minutes * 60 * 1000;

    const seconds = Math.floor(duration / 1000);

    const percent = Math.round(
        ((Date.now() - startDate * 1000) * 100) / ((endDate - startDate) * 1000)
    );
    return {
        active: true,
        days,
        duration: `${hours}:${minutes}:${seconds}`,
        hours,
        minutes,
        seconds,
        percent
    };
};

// export const myanmarMoment = (...args: any) =>
//   moment(...args).tz('Asia/Yangon');
export const MyanmarDateTimeFormat = 'DD/MM/YYYY HH:mm:ss';

export const getLocalStorageKey = (key: string) =>
    localStorage && localStorage.getItem(key);

export const setLocalStorageKey = (key: string, value: string) =>
    localStorage && localStorage.setItem(key, value);

export const safeParseJson = <T>(rawVal: string, defaultVal: T) => {
    try {
        if (!rawVal) return defaultVal;
        return JSON.parse(rawVal) as T;
    } catch (error) {
        return defaultVal;
    }
};

export const getCDN = (url: string): string => {
    if (url.match(/elo-games.s3-ap-southeast-1.amazonaws.com/i)) {
        url = url.replace(
            'elo-games.s3-ap-southeast-1.amazonaws.com',
            'elo-games.elofun.com'
        );
    } else if (url.match(/elo-assets.s3-ap-southeast-1.amazonaws.com/i)) {
        url = url.replace(
            'elo-assets.s3-ap-southeast-1.amazonaws.com',
            'elo-games.elofun.com'
        );
    } else if (
        url.match(
            /e8d31c1b-5385-4052-abaf-3dc0fabb24c3.s3-ap-southeast-1.amazonaws.com/i
        )
    ) {
        url = url.replace(
            'e8d31c1b-5385-4052-abaf-3dc0fabb24c3.s3-ap-southeast-1.amazonaws.com',
            'elo-games.elofun.com'
        );
    }
    return url;
};

export const getQueryString = (key: string) => {
    const query = window.location.search.substring(1);
    const vars = query.split('&');
    const params: { [key: string]: string } = {};
    vars.forEach(q => {
        const pair = q.split('=');
        params[pair[0]] = decodeURIComponent(pair[1] || '');
    });
    return params[key] || '';
};

export const formatCurrencyVND = (val: number) => {
    let parts = val.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}

export const getRemanningTime = (endDate: Date) => {
    var date = new Date();
    var seconds: number = (endDate.getTime() - date.getTime()) / 1000;

    return {
        day: Math.floor(seconds / (86400)),
        hour: Math.floor(seconds % (86400) / 3600),
        minute: Math.floor(seconds % 3600 / 60),
        second: Math.floor(seconds % 60),
    }
}

export const truncatePhone = (phone: string) => {
    return phone ? phone.substring(0, 2) + 'xxxxxxx' + phone.substring(phone.length - 3, phone.length) : '-'
}

export const getCampaignId = () => {
    return getQueryString('campaignId') || "64";
}

export const getLocalizedText = (key: string, content: Array<string> = null) => {
    const index = LOCALIZATION_KEYS.indexOf(key);
    let str = Localization.GetLocalizedString(LOCALIZATION_KEYS[index]);

    if (!content) {
        return str;
    }

    content.forEach((txt) => {
        str = str.replace('%s', txt)
    })

    return str;
}

export const randomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const randomString = (length: number) => {
    return Math.random().toString(36).substr(0, length).replace('.', '')
}

export const convertToCurrency = (value: number) => {
    var formatter = new Intl.NumberFormat('vi-VN');
    return formatter.format(value);
}

export const formatMsisdn = (msisdn: string) => {
    msisdn = `${msisdn}`.replace(/^84/, '0');
    if (!msisdn.match(/^0/)) {
        msisdn = `0${msisdn}`;
    }
    return msisdn;
};

export const trackUserInteract = () => {
    const isInteracted = localStorage.getItem('interacted') === 'true';

    if (isInteracted) return;

    wsgw.userRequest(
        APIDefine.userInteract,
        {},
        (e) => {
            localStorage.setItem('interacted', 'true');
        },
        console.error
    );
}

export const getWorldPosition = (node: cc.Node): cc.Vec2 => {
    return node.parent.convertToWorldSpaceAR(node.getPosition());
}