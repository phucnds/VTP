import SoundMgr from "../common/SoundMgr";

let global_id = Date.now();
export default new (class Helper
{
    private isExcute : boolean = false
    private noSleep = null;

    GetUnitId()
    {
        return `uid-${global_id++}`;
    }
    Rand(min, max)
    {
        return Math.random() * (max - min) + min;
    }

    RandInt(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    RandomProperty(obj)
    {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    };
    RandArgument(...args)
    {
        return args[this.RandInt(0, args.length - 1)];
    }

    RandArray(arr)
    {
        return arr[this.RandInt(0, arr.length - 1)];
    }

    RandTypeEnum(obj)
    {
        const keys = Object.keys(obj);
        return this.RandInt(0, keys.length / 2 - 1);
    }

    GetKey(obj, index)
    {
        return Object.keys(obj)[index];
    }

    GetKeyEnum(obj, index)
    {
        const keys = Object.keys(obj);
        return keys[index + keys.length / 2];
    }

    GetIndexEnum(obj, name)
    {
        const keys = Object.keys(obj);
        for (let i = keys.length / 2; i < keys.length; i++)
        {
            if (keys[i] == name)
            {
                return i - keys.length / 2;
            }
        }

        return -1;
    }
    FallBackCopyToClipboard(str)
    {
        const el = document.createElement('textarea');
        var isIOS = navigator.userAgent.search(/(iPad|iPhone|iphone|iPod)/) != -1
        el.value = str;
        document.body.appendChild(el);

        if (isIOS)
        {
            el.contentEditable = true;
            el.readOnly = false;

            var range = document.createRange();
            range.selectNodeContents(el);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
            el.setSelectionRange(0, 999999);
        }
        else
        {
            el.setAttribute('readonly', '');
            el.select();
        }
        document.execCommand('copy');
        document.body.removeChild(el);
    }
    CopyToClipboard(str)
    {
        if (!navigator.clipboard)
        {
            this.FallBackCopyToClipboard(str);
            return;
        }
        navigator.clipboard.writeText(str).then(function ()
        {
        }, function (err)
        {
        });
    }

    Normalized(x1, y1, x2, y2)
    {
        const dX = x1 - x2;
        const dY = y1 - y2;
        const length = Math.sqrt(dX * dX + dY * dY);

        return new cc.Vec2(dX / length, dY / length);
    }

    MoveToTarget(current, target, speed)
    {
        speed = Math.abs(speed);

        if (current < target)
        {
            return Math.min(target, current + speed);
        } else
        {
            return Math.max(target, current - speed);
        }
    }

    Collision2Rect(rect1, rect2)
    {
        if (
            rect1.x + rect1.width < rect2.x ||
            rect1.y + rect1.height < rect2.y ||
            rect2.x + rect2.width < rect1.x ||
            rect2.y + rect2.height < rect1.y
        )
        {
            return false;
        }

        return true;
    }

    CollisionPointRect(x, y, rect)
    {
        if (
            x < rect.x ||
            y < rect.y ||
            x > rect.x + rect.width ||
            y > rect.y + rect.height
        )
        {
            return false;
        }

        return true;
    }

    Distance(x1, y1, x2, y2)
    {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    Constrain(value, min, max)
    {
        value = Math.max(min, value);
        value = Math.min(max, value);

        return value;
    }

    ToRadian(angle)
    {
        return (angle / 180) * Math.PI;
    }

    ToAngle(radian)
    {
        return (radian / Math.PI) * 180;
    }

    TimeoutPromise(time, promise)
    {
        const timeout = new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                reject("Timed out.");
            }, time);
        });

        return Promise.race([promise, timeout]);
    }

    HttpRequest(method, url, body, responseType, headers = null, requestParams = {})
    {
        const logEvent = (window as any).logEvent || console.log;
        const start = Date.now();
        const apiName = url.split('/').pop().split('?').shift();
        return new Promise((resolve, reject) =>
        {
            let xhr = new XMLHttpRequest();
            xhr.open(method, url, true);

            if (method == "POST")
            {
                xhr.setRequestHeader("Content-Type", "application/json");
            }

            for (let item of headers)
            {
                xhr.setRequestHeader(item.key, item.value);
            }

            if (responseType)
            {
                xhr.responseType = responseType;
            }

            xhr.timeout = 10000;

            xhr.onreadystatechange = () =>
            {
                if (xhr.readyState == 4)
                {
                    if (xhr.status == 200)
                    {
                        resolve(xhr.response);
                    } else
                    {
                        reject(xhr.response);
                    }

                    logEvent(apiName, {
                        method,
                        url,
                        body,
                        requestParams,
                        reponseStatus: xhr.status,
                        response: xhr.response,
                        duration: Date.now() - start
                    });
                }
            };

            xhr.onerror = function (e)
            {
                logEvent('apiRequestError', {
                    apiName,
                    method,
                    url,
                    body,
                    requestParams,
                    duration: Date.now() - start
                });

                reject('error');
            }

            xhr.ontimeout = (e) =>
            {
                reject('timed out');
            }

            xhr.send(body);
        });
    }

    DrawLine(graphic, x1, y1, x2, y2, color = cc.Color.RED, lineWidth = 2)
    {
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.moveTo(x1, y1);
        graphic.lineTo(x2, y2);
        graphic.stroke();
    }

    DrawSquare(graphic, x, y, width, color = cc.Color.RED, lineWidth = 2)
    {
        this.DrawRect(graphic, x, y, width, width, color, lineWidth);
    }

    DrawRect(graphic, x, y, width, height, color = cc.Color.RED, lineWidth = 2)
    {
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        typeof x === "number"
            ? graphic.rect(x, y, width, height)
            : graphic.rect(x.x, x.y, x.width, x.height);
        graphic.stroke();
    }

    DrawArc(
        graphic,
        x,
        y,
        r,
        startAngle = 0,
        endAngle = Math.PI * 2,
        offsetAngle = 0,
        anticlockwise = true,
        color = cc.Color.RED,
        lineWidth = 2,
        withLine = false
    )
    {
        const TWO_PI = Math.PI * 2;
        const drawOffset = Math.PI * 1.5; // start angle at 0 o'clock
        startAngle += drawOffset + offsetAngle;
        endAngle += drawOffset + offsetAngle;
        startAngle = TWO_PI - startAngle;
        endAngle = TWO_PI - endAngle;

        startAngle = startAngle > TWO_PI ? startAngle % TWO_PI : startAngle;
        endAngle = endAngle > TWO_PI ? endAngle % TWO_PI : endAngle;

        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.arc(x, y, r, startAngle, endAngle, anticlockwise);
        if (withLine)
        {
            graphic.lineTo(x, y);
            graphic.close();
        }
        graphic.stroke();
    }

    DrawCircle(graphic, x, y, r, color = cc.Color.RED, lineWidth = 2)
    {
        this.DrawEllipse(graphic, x, y, r, r, color, lineWidth);
    }

    DrawEllipse(graphic, x, y, rX, rY, color = cc.Color.RED, lineWidth = 2)
    {
        graphic.lineWidth = lineWidth;
        graphic.strokeColor = color;
        graphic.ellipse(x, y, rX, rY);
        graphic.stroke();
    }

    FillSquare(graphic, x, y, width, color = cc.Color.RED)
    {
        this.FillRect(graphic, x, y, width, width, color);
    }

    FillRect(graphic, x, y, width, height, color = cc.Color.RED)
    {
        graphic.fillColor = color;
        this.DrawRect(graphic, x, y, width, height, color, 0);
        graphic.fill();
    }

    FillArc(
        graphic,
        x,
        y,
        r,
        startAngle = 0,
        endAngle = Math.PI * 2,
        offsetAngle = 0,
        anticlockwise = true,
        color = cc.Color.RED
    )
    {
        graphic.fillColor = color;
        this.DrawArc(
            graphic,
            x,
            y,
            r,
            startAngle,
            endAngle,
            offsetAngle,
            anticlockwise,
            undefined,
            0,
            true
        );
        graphic.fill();
    }

    FillCircle(graphic, x, y, r, color = cc.Color.RED)
    {
        this.FillEllipse(graphic, x, y, r, r, color);
    }

    FillEllipse(graphic, x, y, rX, rY, color = cc.Color.RED)
    {
        graphic.fillColor = color;
        this.DrawEllipse(graphic, x, y, rX, rY, color, 0);
        graphic.fill();
    }
    registerButtonEvent(target: cc.Node, handle: Function)
    {
        target.on(cc.Node.EventType.TOUCH_END, async (event, captureListeners) =>
        {
            if(this.isExcute) return
            SoundMgr.playSfx(SoundMgr.Instance.SFX_BUTTON)
            this.isExcute = true
            setTimeout(() => {
                this.isExcute = false
            }, 300);
            handle && await handle()
        })
    }
    shuffleArray(arr: Array<any>)
    {
        let array = [...arr]
        for (let i = array.length - 1; i > 0; i--)
        {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    convertTextName(str : string)
    {
        let pname = `${str}`;
        if (pname.length > 6)
        {
            pname = pname.substr(0, 12) + '...';
        }
        return pname
    }
})();
