// hellfire_pro_ultimate.js - Bố Duy Khánh ULTIMATE EDITION
// GIỮ NGUYÊN 100% CONFIG GỐC (CÓ LOA PHƯỜNG)
// UI TO, KÉO MƯỢT, DOUBLE TAP TẮT/BẬT
// Copy toàn bộ, paste là dùng liền

(function () {
    'use strict';
    if (window.__BDK_ULTIMATE__) return;
    window.__BDK_ULTIMATE__ = true;

    console.log('%c🔥 HELLFIRE ULTIMATE - Bố Duy Khánh', 'font-size:24px;font-weight:bold;color:#ff6b6b;text-shadow:0 0 40px #ff6b6b,0 0 80px #ff6b6b;');

    // ============================================================
    //  PARAMETERS
    // ============================================================
    const P = {
        preGain: 1.0,
        drive: 0.15,
        crush: 0.0,
        width: 0.15,
        postGain: 1.5,
        bass: 0.15,
        treble: 0.25,
        echo: 0.08,
        gateThreshold: 0.008,
        deEsser: 0.3,
    };

    // ============================================================
    //  100% CONFIG GỐC (CHỈ XÓA BABY + TÀU HỎA, GIỮ LOA PHƯỜNG)
    // ============================================================
    const SUGGESTIONS = {
        // === CẤP ĐỘ 1: LẤN ÁT ===
        '🔥 Lấn Át (Cơ Bản)': {
            desc: 'To, dày, át đối phương',
            preGain: 200, drive: 0.8, crush: 0.4, width: 0.6,
            postGain: 5, bass: 0.9, treble: 0.5,
            echo: 0.2, gateThreshold: 0.002, deEsser: 0.05
        },
        '💀 Lấn Át Cực Đỉnh': {
            desc: 'Bão hòa max, át hết mọi thứ',
            preGain: 500, drive: 1.0, crush: 0.6, width: 0.9,
            postGain: 8, bass: 1.0, treble: 0.7,
            echo: 0.35, gateThreshold: 0.001, deEsser: 0.02
        },
        '⚡ Lấn Át Tối Thượng': {
            desc: 'Át hoàn toàn, không cho đối phương thở',
            preGain: 700, drive: 1.0, crush: 0.8, width: 1.0,
            postGain: 10, bass: 1.0, treble: 0.8,
            echo: 0.5, gateThreshold: 0.001, deEsser: 0.01
        },
        '📢 Siêu To Không Lọc': {
            desc: 'To cực, ồn ào, không lọc nhiễu',
            preGain: 1000, drive: 0.5, crush: 0, width: 0.5,
            postGain: 12, bass: 1.0, treble: 0.5,
            echo: 0.2, gateThreshold: 0, deEsser: 0
        },

        // === CẤP ĐỘ 2: ÁC QUỶ ===
        '😈 Giọng Ác Quỷ': {
            desc: 'Trầm, bão hòa, đáng sợ',
            preGain: 300, drive: 0.9, crush: 0.7, width: 0.4,
            postGain: 6, bass: 1.0, treble: 0.1,
            echo: 0.25, gateThreshold: 0.002, deEsser: 0.08
        },
        '👹 Ác Quỷ Tối Thượng': {
            desc: 'Quỷ dữ nhất, cực trầm, cực đục',
            preGain: 600, drive: 1.0, crush: 0.9, width: 0.5,
            postGain: 9, bass: 1.0, treble: 0.05,
            echo: 0.3, gateThreshold: 0.001, deEsser: 0.01
        },
        '💀 Ác Quỷ Địa Ngục': {
            desc: 'Địa ngục, méo tiếng, cực đáng sợ',
            preGain: 900, drive: 1.0, crush: 1.0, width: 0.6,
            postGain: 12, bass: 1.0, treble: 0,
            echo: 0.4, gateThreshold: 0.001, deEsser: 0
        },
        '🌑 Quỷ Vô Hình': {
            desc: 'Ám ảnh, khó chịu, ma quái',
            preGain: 400, drive: 0.7, crush: 0.8, width: 0.3,
            postGain: 7, bass: 0.9, treble: 0.3,
            echo: 0.3, gateThreshold: 0.002, deEsser: 0.05
        },
        '🔥 Quỷ Lửa': {
            desc: 'Giọng quỷ lửa, rực cháy, dữ dội',
            preGain: 500, drive: 0.9, crush: 0.7, width: 0.5,
            postGain: 8, bass: 0.8, treble: 0.4,
            echo: 0.35, gateThreshold: 0.001, deEsser: 0.03
        },

        // === CẤP ĐỘ 3: ECHO & VANG ===
        '🌀 Echo Siêu Vang': {
            desc: 'Vang dài, như trong hang động',
            preGain: 100, drive: 0.3, crush: 0, width: 0.5,
            postGain: 3, bass: 0.3, treble: 0.4,
            echo: 0.8, gateThreshold: 0.005, deEsser: 0.1
        },
        '🌊 Echo Sấm Sét': {
            desc: 'Vang rền, echo siêu dài',
            preGain: 150, drive: 0.4, crush: 0, width: 0.7,
            postGain: 4, bass: 0.4, treble: 0.5,
            echo: 1.0, gateThreshold: 0.003, deEsser: 0.05
        },
        '🌀 Bão Echo': {
            desc: 'Echo chồng echo, cực vang, cực loạn',
            preGain: 200, drive: 0.5, crush: 0, width: 0.8,
            postGain: 5, bass: 0.5, treble: 0.5,
            echo: 1.5, gateThreshold: 0.001, deEsser: 0
        },
        '🌪️ Echo Tận Thế': {
            desc: 'Echo max, không gian hỗn loạn',
            preGain: 300, drive: 0.6, crush: 0, width: 1.0,
            postGain: 6, bass: 0.6, treble: 0.6,
            echo: 2.0, gateThreshold: 0.001, deEsser: 0
        },
        '🔊 Vang Nhà Thờ': {
            desc: 'Vang như trong nhà thờ lớn',
            preGain: 120, drive: 0.2, crush: 0, width: 0.6,
            postGain: 3.5, bass: 0.2, treble: 0.3,
            echo: 1.2, gateThreshold: 0.003, deEsser: 0.1
        },

        // === CẤP ĐỘ 4: BOM TẤN (CÓ LOA PHƯỜNG) ===
        '💥 Bom Nổ': {
            desc: 'Cực to, cực bão hòa, cực vang',
            preGain: 800, drive: 1.0, crush: 0.8, width: 1.0,
            postGain: 10, bass: 1.0, treble: 0.8,
            echo: 0.5, gateThreshold: 0.001, deEsser: 0.01
        },
        '🔊 Loa Phường': {
            desc: 'Giọng loa phường, cực to, vang xa',
            preGain: 400, drive: 0.6, crush: 0.3, width: 0.8,
            postGain: 7, bass: 0.8, treble: 0.6,
            echo: 0.4, gateThreshold: 0.002, deEsser: 0.02
        },
        '📢 Hỏng Mic': {
            desc: 'Như mic hỏng, cực ồn, cực méo',
            preGain: 1200, drive: 0.7, crush: 0.5, width: 0.6,
            postGain: 12, bass: 0.7, treble: 0.7,
            echo: 0.3, gateThreshold: 0, deEsser: 0
        },
        '💀 Chết Tiếng Cực Hạn': {
            desc: 'Gần như hỏng mic, cực méo, cực ồn',
            preGain: 1500, drive: 1.0, crush: 0.9, width: 1.0,
            postGain: 15, bass: 1.0, treble: 1.0,
            echo: 0.5, gateThreshold: 0, deEsser: 0
        },
        '🔥 Siêu Bom': {
            desc: 'Bom nổ cấp độ hủy diệt',
            preGain: 2000, drive: 1.0, crush: 1.0, width: 1.0,
            postGain: 20, bass: 1.0, treble: 1.0,
            echo: 0.8, gateThreshold: 0, deEsser: 0
        },

        // === CẤP ĐỘ 5: ROBOT & BIẾN GIỌNG ===
        '🤖 Robot Bão Tố': {
            desc: 'Robot nhưng cực bão hòa, điên loạn',
            preGain: 350, drive: 1.0, crush: 0.9, width: 0,
            postGain: 6, bass: 0, treble: 1.0,
            echo: 0.3, gateThreshold: 0.001, deEsser: 0
        },
        '🤖 Robot Tận Thế': {
            desc: 'Robot hủy diệt, cực méo, cực ồn',
            preGain: 500, drive: 1.0, crush: 1.0, width: 0,
            postGain: 8, bass: 0, treble: 1.0,
            echo: 0.5, gateThreshold: 0, deEsser: 0
        },
        '🐿 Chipmunk Điên': {
            desc: 'Giọng chipmunk + méo tiếng',
            preGain: 200, drive: 0.8, crush: 0, width: 0,
            postGain: 4, bass: 0, treble: 0.9,
            echo: 0.2, gateThreshold: 0.003, deEsser: 0
        },
        '🐺 Quái Vật': {
            desc: 'Giọng quái vật, đáng sợ, méo mó',
            preGain: 400, drive: 0.9, crush: 0.8, width: 0.4,
            postGain: 7, bass: 0.7, treble: 0.6,
            echo: 0.4, gateThreshold: 0.001, deEsser: 0.02
        },
        '🦇 Ma Cà Rồng': {
            desc: 'Giọng ma cà rồng, trầm, ẩm ương',
            preGain: 350, drive: 0.7, crush: 0.6, width: 0.3,
            postGain: 6, bass: 0.9, treble: 0.2,
            echo: 0.3, gateThreshold: 0.002, deEsser: 0.05
        },

        // === CẤP ĐỘ 6: ĐẶC BIỆT (XÓA BABY + TÀU HỎA) ===
        '🌍 Động Đất': {
            desc: 'Rung, ồn như động đất',
            preGain: 600, drive: 0.8, crush: 0.7, width: 0.7,
            postGain: 9, bass: 1.0, treble: 0.3,
            echo: 0.4, gateThreshold: 0.001, deEsser: 0.01
        },
        '🌪️ Bão Cát': {
            desc: 'Ồn ào, như bão cát',
            preGain: 400, drive: 1.0, crush: 0.6, width: 0.8,
            postGain: 7, bass: 0.7, treble: 0.7,
            echo: 0.5, gateThreshold: 0.001, deEsser: 0
        },
        '⚡ Tiếng Sấm': {
            desc: 'Vang rền như tiếng sấm',
            preGain: 500, drive: 0.5, crush: 0.2, width: 0.6,
            postGain: 8, bass: 0.8, treble: 0.4,
            echo: 1.0, gateThreshold: 0.001, deEsser: 0.02
        },
        '🌊 Sóng Thần': {
            desc: 'Ầm ầm như sóng thần ập tới',
            preGain: 700, drive: 0.9, crush: 0.7, width: 0.9,
            postGain: 10, bass: 1.0, treble: 0.5,
            echo: 0.6, gateThreshold: 0.001, deEsser: 0.01
        },
        '🔥 Núi Lửa Phun': {
            desc: 'Giọng như núi lửa đang phun trào',
            preGain: 550, drive: 0.8, crush: 0.6, width: 0.7,
            postGain: 9, bass: 0.9, treble: 0.4,
            echo: 0.5, gateThreshold: 0.001, deEsser: 0.02
        },
        '🌀 Lốc Xoáy': {
            desc: 'Giọng như bị cuốn vào lốc xoáy',
            preGain: 300, drive: 0.9, crush: 0.5, width: 1.0,
            postGain: 6, bass: 0.5, treble: 0.8,
            echo: 0.7, gateThreshold: 0.001, deEsser: 0.01
        },
        '💀 Thần Chết': {
            desc: 'Giọng của thần chết, lạnh lùng, đáng sợ',
            preGain: 450, drive: 0.8, crush: 0.9, width: 0.4,
            postGain: 8, bass: 0.8, treble: 0.2,
            echo: 0.3, gateThreshold: 0.002, deEsser: 0.05
        },
    };

    // ============================================================
    //  LƯU CONFIG
    // ============================================================
    let savedConfigs = JSON.parse(localStorage.getItem('hellfire_configs') || '{}');

    function saveConfigToStorage(name) {
        if (!name || name.trim() === '') return false;
        savedConfigs[name] = { ...P };
        localStorage.setItem('hellfire_configs', JSON.stringify(savedConfigs));
        return true;
    }

    function loadConfigFromStorage(name) {
        if (!savedConfigs[name]) return false;
        Object.assign(P, savedConfigs[name]);
        return true;
    }

    function deleteConfigFromStorage(name) {
        if (!savedConfigs[name]) return false;
        delete savedConfigs[name];
        localStorage.setItem('hellfire_configs', JSON.stringify(savedConfigs));
        return true;
    }

    function getSavedConfigNames() {
        return Object.keys(savedConfigs);
    }

    // ============================================================
    //  WORKLET
    // ============================================================
    const WORKLET = `
    class BODUYKHANH extends AudioWorkletProcessor {
        static get parameterDescriptors() {
            return [
                { name:'preGain', defaultValue:1, min:0, max:99999999 },
                { name:'drive', defaultValue:0, min:0, max:99999999 },
                { name:'crush', defaultValue:0, min:0, max:99999999 },
                { name:'width', defaultValue:0, min:0, max:99999999 },
                { name:'postGain', defaultValue:1, min:0, max:99999999 },
                { name:'bass', defaultValue:0, min:0, max:99999999 },
                { name:'treble', defaultValue:0, min:0, max:99999999 },
                { name:'echo', defaultValue:0, min:0, max:99999999 },
                { name:'gateThreshold', defaultValue:0.005, min:0, max:99999999 },
                { name:'deEsser', defaultValue:0, min:0, max:99999999 },
            ];
        }
        constructor() { super(); this.SR = sampleRate || 48000; this._limL = 1; this._limR = 1; this._echoBufL = 0; this._echoBufR = 0; this._gateL = 1; this._gateR = 1; this._deEsserL = 0; this._deEsserR = 0; }
        _sat(x,k) { if(k<0.001)return x; const d=k*20; return Math.atan(x*d)/Math.atan(d); }
        _bassBoost(x,a) { if(a<0.001)return x; return x*(1+a*1.5); }
        _trebleBoost(x,a) { if(a<0.001)return x; return x*(1+a*2); }
        _deEsser(x,a) { if(a<0.001)return x; const h=x*0.3+this._deEsserL*0.7; this._deEsserL=h; const r=1-Math.min(a,Math.abs(h)*a*4); return x*Math.max(0.3,r); }
        _noiseGate(x,t) { if(t<0.0001)return x; const rms=Math.abs(x); if(rms>t){this._gateL=Math.min(1,this._gateL+0.01);}else{this._gateL=Math.max(0,this._gateL-0.001);} return x*this._gateL; }
        _softLimit(x) { if(Math.abs(x)>0.95){const s=x>0?1:-1; const e=Math.abs(x)-0.95; return s*(0.95+e*0.5);} return x; }
        _echo(x,a) { if(a<0.001)return x; const w=a*0.4; const f=0.3; const out=x+this._echoBufL*w; this._echoBufL=x*f+this._echoBufL*(1-f*0.3); return out; }
        process(i,o,p) {
            const inp=i[0]; if(!inp||inp.length===0)return true;
            const out=o[0]; const pg=p.preGain[0], dr=p.drive[0], cr=p.crush[0], wd=p.width[0], po=p.postGain[0], bs=p.bass[0], tr=p.treble[0], ec=p.echo[0], gt=p.gateThreshold[0], de=p.deEsser[0];
            for(let idx=0; idx<inp.length; idx++) {
                let L=inp[idx]*pg; let R=(inp.length>1?inp[idx]:inp[idx])*pg;
                L=this._noiseGate(L,gt); R=this._noiseGate(R,gt);
                L=this._deEsser(L,de); R=this._deEsser(R,de);
                L=this._bassBoost(L,bs); R=this._bassBoost(R,bs);
                L=this._trebleBoost(L,tr); R=this._trebleBoost(R,tr);
                L=this._sat(L,dr); R=this._sat(R,dr);
                if(cr>0){const th=Math.max(0.001,1.0-cr*0.98); L=Math.max(-th,Math.min(th,L))/th; R=Math.max(-th,Math.min(th,R))/th;}
                if(wd>0){const mid=(L+R)*0.5; const side=(L-R)*0.5*(1+wd*1.5); L=mid+side; R=mid-side;}
                L=this._echo(L,ec); R=this._echo(R,ec);
                L*=po; R*=po;
                L=this._softLimit(L); R=this._softLimit(R);
                out[idx]=L||0; if(o[1])o[1][idx]=R||0;
            }
            return true;
        }
    }
    registerProcessor('boduytadao', BODUYKHANH);
    `;

    // ============================================================
    //  HOOK HỆ THỐNG
    // ============================================================
    const _NativeCtx = window.AudioContext || window.webkitAudioContext;
    let _ctx = null;

    class BODUYAudioContext extends _NativeCtx {
        constructor(...args) {
            super({ latencyHint: 'interactive', sampleRate: 48000 });
            if (!_ctx) {
                _ctx = this;
                const blob = new Blob([WORKLET], { type: 'application/javascript' });
                _ctx.audioWorklet.addModule(URL.createObjectURL(blob))
                    .then(() => UI.badge('SẴN SÀNG', '#0f0'));
            }
        }
    }
    try {
        window.AudioContext = BODUYAudioContext;
        if (window.webkitAudioContext) window.webkitAudioContext = BODUYAudioContext;
    } catch (e) {}

    const _nativeGUM = navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);
    navigator.mediaDevices.getUserMedia = async function (constraints) {
        if (constraints.audio) constraints.audio = { autoGainControl: false, echoCancellation: false, noiseSuppression: false, channelCount: 2 };
        let raw;
        try { raw = await _nativeGUM(constraints); } catch (e) { return raw; }
        try {
            const proc = await Core.build(raw);
            UI.badge('BẬT', '#0f0');
            return proc;
        } catch (e) { return raw; }
    };

    const Core = {
        node: null,
        async build(stream) {
            if (!_ctx) {
                try {
                    _ctx = new _NativeCtx({ latencyHint: 'interactive', sampleRate: 48000 });
                    const blob = new Blob([WORKLET], { type: 'application/javascript' });
                    await _ctx.audioWorklet.addModule(URL.createObjectURL(blob));
                } catch (e) { return stream; }
            }
            if (_ctx.state === 'suspended') await _ctx.resume();
            const src = _ctx.createMediaStreamSource(stream);
            const dest = _ctx.createMediaStreamDestination();
            this.node = new AudioWorkletNode(_ctx, 'boduytadao', { numberOfOutputs: 1, outputChannelCount: [2] });
            this.push();
            src.connect(this.node);
            this.node.connect(dest);
            return dest.stream;
        },
        push() {
            if (!this.node || !_ctx) return;
            const mp = this.node.parameters,
                t = _ctx.currentTime;
            mp.get('preGain').setTargetAtTime(P.preGain, t, 0.015);
            mp.get('drive').setTargetAtTime(P.drive, t, 0.015);
            mp.get('crush').setTargetAtTime(P.crush, t, 0.015);
            mp.get('width').setTargetAtTime(P.width, t, 0.015);
            mp.get('postGain').setTargetAtTime(P.postGain, t, 0.015);
            mp.get('bass').setTargetAtTime(P.bass, t, 0.015);
            mp.get('treble').setTargetAtTime(P.treble, t, 0.015);
            mp.get('echo').setTargetAtTime(P.echo, t, 0.015);
            mp.get('gateThreshold').setTargetAtTime(P.gateThreshold, t, 0.015);
            mp.get('deEsser').setTargetAtTime(P.deEsser, t, 0.015);
        }
    };

    // ============================================================
    //  APPLY CONFIG
    // ============================================================
    function applyConfig(config) {
        Object.assign(P, config);
        Core.push();
        syncUI();
        updateInputs();
        console.log('✅ Đã áp dụng config');
    }

    function updateInputs() {
        const map = {
            'preGain': 'num-pg',
            'drive': 'num-dr',
            'crush': 'num-cr',
            'width': 'num-wd',
            'postGain': 'num-po',
            'bass': 'num-bs',
            'treble': 'num-tr',
            'echo': 'num-ec',
            'gateThreshold': 'num-gt',
            'deEsser': 'num-de',
        };
        Object.keys(map).forEach(param => {
            const num = document.getElementById(map[param]);
            if (num) num.value = P[param].toFixed(4);
        });
        document.querySelectorAll('.suggestion-btn').forEach(b => {
            const isActive = b.dataset.config && JSON.stringify(P) === JSON.stringify(SUGGESTIONS[b.dataset.config]);
            b.style.background = isActive ? 'linear-gradient(135deg,#00ff88,#00cc66)' : 'rgba(0,255,136,0.05)';
            b.style.color = isActive ? '#000' : '#00ff88';
            b.style.boxShadow = isActive ? '0 0 30px #00ff88, inset 0 0 30px #00ff8840' : 'none';
            b.style.transform = isActive ? 'scale(1.02)' : 'scale(1)';
        });
    }

    function syncUI() {
        const els = [
            ['sl-pg', 'lb-pg', 'preGain', 'x'],
            ['sl-dr', 'lb-dr', 'drive', ''],
            ['sl-cr', 'lb-cr', 'crush', ''],
            ['sl-wd', 'lb-wd', 'width', ''],
            ['sl-po', 'lb-po', 'postGain', 'x'],
            ['sl-bs', 'lb-bs', 'bass', ''],
            ['sl-tr', 'lb-tr', 'treble', ''],
            ['sl-ec', 'lb-ec', 'echo', ''],
            ['sl-gt', 'lb-gt', 'gateThreshold', ''],
            ['sl-de', 'lb-de', 'deEsser', ''],
        ];
        els.forEach(arr => {
            const el = document.getElementById(arr[0]),
                lb = document.getElementById(arr[1]);
            if (!el || !lb) return;
            let val = P[arr[2]];
            el.value = val;
            let pct = Math.min(100, (val / (val + 1)) * 100);
            el.style.setProperty('--v', pct + '%');
            if (arr[3] === 'x') lb.innerText = val.toFixed(1) + 'x';
            else lb.innerText = val.toFixed(2);
        });
    }

    // ============================================================
    //  UI - SIÊU ĐẸP, TO, MƯỢT, DOUBLE TAP
    // ============================================================
    const UI = {
        badge(t, c) {
            const e = document.getElementById('kh-st'),
                d = document.getElementById('kh-dot');
            if (e) { e.innerText = t;
                e.style.color = c; }
            if (d) { d.style.background = c;
                d.style.boxShadow = '0 0 20px ' + c; }
        },
        init() {
            // DOUBLE TAP MÀN HÌNH
            let lastTap = 0;
            let uiVisible = true;
            const root = document.getElementById('kh-root');

            document.addEventListener('click', function(e) {
                // Không bắt double tap khi click vào UI
                if (e.target.closest('#kh-root') || e.target.closest('#kh-toggle')) return;
                
                const now = Date.now();
                if (now - lastTap < 400) {
                    // DOUBLE TAP - TẮT/BẬT UI
                    uiVisible = !uiVisible;
                    if (root) {
                        root.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                        root.style.transform = uiVisible ? 'scale(1)' : 'scale(0.8)';
                        root.style.opacity = uiVisible ? '1' : '0';
                        setTimeout(() => {
                            root.style.display = uiVisible ? 'block' : 'none';
                        }, 400);
                    }
                    const toggleBtn = document.getElementById('kh-toggle');
                    if (toggleBtn) {
                        toggleBtn.style.borderColor = uiVisible ? '#00ff88' : '#ff3355';
                        toggleBtn.style.boxShadow = uiVisible ? '0 0 40px #00ff8840' : '0 0 40px #ff335540';
                        toggleBtn.textContent = uiVisible ? '🎤' : '🔇';
                    }
                    console.log(uiVisible ? '✅ UI hiển thị' : '🔇 UI ẩn');
                    lastTap = 0;
                } else {
                    lastTap = now;
                }
            });

            // NÚT TRÒN TOGGLE
            const toggleBtn = document.createElement('button');
            toggleBtn.id = 'kh-toggle';
            toggleBtn.textContent = '🎤';
            toggleBtn.style.cssText = `
                position:fixed;bottom:24px;left:24px;z-index:999999;
                width:64px;height:64px;border-radius:50%;
                background:linear-gradient(135deg,#0a0a12,#1a1a2e);
                border:2px solid #00ff88;color:#00ff88;font-size:28px;cursor:pointer;
                box-shadow:0 0 40px #00ff8840, inset 0 0 40px #00ff8820;
                transition:all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                display:flex;align-items:center;justify-content:center;
                font-family:'Segoe UI',sans-serif;user-select:none;
                backdrop-filter:blur(10px);
            `;
            toggleBtn.onmouseenter = () => {
                toggleBtn.style.transform = 'scale(1.1)';
                toggleBtn.style.boxShadow = '0 0 60px #00ff8860, inset 0 0 60px #00ff8840';
            };
            toggleBtn.onmouseleave = () => {
                toggleBtn.style.transform = 'scale(1)';
                toggleBtn.style.boxShadow = '0 0 40px #00ff8840, inset 0 0 40px #00ff8820';
            };
            toggleBtn.onclick = () => {
                uiVisible = !uiVisible;
                if (root) {
                    root.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                    root.style.transform = uiVisible ? 'scale(1)' : 'scale(0.8)';
                    root.style.opacity = uiVisible ? '1' : '0';
                    setTimeout(() => {
                        root.style.display = uiVisible ? 'block' : 'none';
                    }, 400);
                }
                toggleBtn.style.borderColor = uiVisible ? '#00ff88' : '#ff3355';
                toggleBtn.style.boxShadow = uiVisible ? '0 0 40px #00ff8840' : '0 0 40px #ff335540';
                toggleBtn.textContent = uiVisible ? '🎤' : '🔇';
            };
            document.body.appendChild(toggleBtn);

            // MAIN UI - TO HƠN
            const el = document.createElement('div');
            el.id = 'kh-root';
            let html = `
            <div id="kh-head">
                <div id="kh-title">
                    <span style="font-size:22px;animation:pulse 2s infinite;">🎤</span>
                    <span id="kh-name" style="font-size:20px;">BỐ DUY KHÁNH</span>
                </div>
                <div id="kh-right">
                    <div id="kh-badge">
                        <span id="kh-dot"></span>
                        <span id="kh-st">CHỜ</span>
                    </div>
                    <button id="kh-close">✕</button>
                </div>
            </div>
            <div id="kh-body">
                <div class="kh-section-title">💀 CONFIG GÂY ỒN</div>
                <div id="kh-suggestions">
                    ${Object.keys(SUGGESTIONS).map(key => `
                        <button class="suggestion-btn" data-config="${key}">
                            <span style="font-size:14px;">${key}</span>
                            <span style="font-size:10px;color:#888;display:block;margin-top:2px;">${SUGGESTIONS[key].desc}</span>
                        </button>
                    `).join('')}
                </div>
                <div class="kh-sep"></div>

                <div class="kh-section-title">💾 LƯU CONFIG</div>
                <div style="display:flex;gap:8px;margin-bottom:10px;">
                    <input type="text" id="config-name-input" placeholder="Tên config..." style="flex:1;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.2);color:#00ff88;border-radius:8px;padding:8px 12px;font-size:13px;">
                    <button id="save-config-btn" style="padding:8px 16px;background:linear-gradient(135deg,#00ff88,#00cc66);border:none;color:#000;border-radius:8px;cursor:pointer;font-weight:bold;">💾 LƯU</button>
                </div>
                <div id="saved-configs-list" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px;">
                    ${getSavedConfigNames().map(name => `
                        <button class="saved-config-btn" data-name="${name}">
                            ${name}
                            <span style="font-size:10px;color:#ff3355;margin-left:6px;" class="del-config">✕</span>
                        </button>
                    `).join('')}
                </div>
                <div class="kh-sep"></div>

                ${[
                    ['sl-pg', 'lb-pg', 'num-pg', '🔊 TIỀN KHUẾCH', '1.0x', 'preGain'],
                    ['sl-dr', 'lb-dr', 'num-dr', '🔥 DRIVE', '0.00', 'drive'],
                    ['sl-cr', 'lb-cr', 'num-cr', '💥 NÉN', '0.00', 'crush'],
                    ['sl-wd', 'lb-wd', 'num-wd', '📢 MỞ RỘNG', '0.00', 'width'],
                    ['sl-po', 'lb-po', 'num-po', '⚡ HẬU KHUẾCH', '1.0x', 'postGain'],
                    ['sl-bs', 'lb-bs', 'num-bs', '🎸 BASS', '0.00', 'bass'],
                    ['sl-tr', 'lb-tr', 'num-tr', '🎵 TREBLE', '0.00', 'treble'],
                    ['sl-ec', 'lb-ec', 'num-ec', '🔊 VANG', '0.00', 'echo'],
                    ['sl-gt', 'lb-gt', 'num-gt', '🔇 LỌC NHIỄU', '0.000', 'gateThreshold'],
                    ['sl-de', 'lb-de', 'num-de', '🗣️ LỌC XÌ', '0.00', 'deEsser'],
                ].map(([slId, lbId, numId, label, defaultVal, param]) => `
                    <div class="kh-row">
                        <div class="kh-rowlabel">
                            <span>${label}</span>
                            <div style="display:flex;gap:8px;align-items:center;">
                                <span id="${lbId}" style="min-width:50px;">${defaultVal}</span>
                                <input type="number" id="${numId}" value="${defaultVal}" style="width:80px;background:rgba(0,255,136,0.05);border:1px solid rgba(0,255,136,0.2);color:#00ff88;border-radius:6px;padding:4px 8px;font-size:12px;text-align:center;">
                            </div>
                        </div>
                        <input type="range" id="${slId}" min="0" max="1000" step="1" value="0" style="--v:0%">
                    </div>
                `).join('')}

                <div class="kh-sep"></div>
                <button id="kh-rst">↺ KHÔI PHỤC</button>
            </div>
            `;
            el.innerHTML = html;
            document.body.appendChild(el);

            // STYLE CSS
            this.css();
            this.events();
            this.badge('CHỜ', '#888');
            syncUI();
            updateInputs();

            // ANIMATION MÀU
            let hue = 0;
            const rootEl = document.getElementById('kh-root');
            const nameEl = document.getElementById('kh-name');
            setInterval(() => {
                hue = (hue + 0.003) % 1;
                if (rootEl) {
                    rootEl.style.borderColor = `hsl(${hue * 360}, 100%, 50%)`;
                    rootEl.style.boxShadow = `0 0 60px hsla(${hue * 360}, 100%, 50%, 0.3), inset 0 0 60px hsla(${hue * 360}, 100%, 50%, 0.1)`;
                }
                if (nameEl) nameEl.style.textShadow = `0 0 40px hsl(${hue * 360}, 100%, 50%)`;
                const dot = document.getElementById('kh-dot');
                if (dot) dot.style.background = `hsl(${hue * 360}, 100%, 50%)`;
            }, 50);
        },
        events() {
            document.getElementById('kh-close').onclick = () => {
                const root = document.getElementById('kh-root');
                root.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
                root.style.transform = 'scale(0.8)';
                root.style.opacity = '0';
                setTimeout(() => { root.style.display = 'none'; }, 400);
                const toggleBtn = document.getElementById('kh-toggle');
                if (toggleBtn) {
                    toggleBtn.style.borderColor = '#ff3355';
                    toggleBtn.style.boxShadow = '0 0 40px #ff335540';
                    toggleBtn.textContent = '🔇';
                }
            };

            // GỢI Ý
            document.querySelectorAll('.suggestion-btn').forEach(btn => {
                btn.onclick = () => {
                    const key = btn.dataset.config;
                    if (SUGGESTIONS[key]) {
                        applyConfig(SUGGESTIONS[key]);
                        document.querySelectorAll('.suggestion-btn').forEach(b => {
                            const isActive = b === btn;
                            b.style.background = isActive ? 'linear-gradient(135deg,#00ff88,#00cc66)' : 'rgba(0,255,136,0.05)';
                            b.style.color = isActive ? '#000' : '#00ff88';
                            b.style.boxShadow = isActive ? '0 0 30px #00ff88, inset 0 0 30px #00ff8840' : 'none';
                            b.style.transform = isActive ? 'scale(1.02)' : 'scale(1)';
                        });
                    }
                };
            });

            // LƯU CONFIG
            document.getElementById('save-config-btn').onclick = () => {
                const nameInput = document.getElementById('config-name-input');
                const name = nameInput.value.trim();
                if (!name) {
                    console.warn('⚠️ Nhập tên config!');
                    return;
                }
                if (saveConfigToStorage(name)) {
                    console.log('✅ Đã lưu config:', name);
                    nameInput.value = '';
                    refreshSavedConfigs();
                }
            };

            // XÓA CONFIG
            document.addEventListener('click', (e) => {
                if (e.target.classList.contains('del-config')) {
                    const parent = e.target.closest('.saved-config-btn');
                    if (parent) {
                        const name = parent.dataset.name;
                        if (deleteConfigFromStorage(name)) {
                            console.log('🗑️ Đã xóa config:', name);
                            refreshSavedConfigs();
                        }
                    }
                }
            });

            // LOAD CONFIG
            document.addEventListener('click', (e) => {
                const btn = e.target.closest('.saved-config-btn');
                if (btn && !e.target.classList.contains('del-config')) {
                    const name = btn.dataset.name;
                    if (loadConfigFromStorage(name)) {
                        console.log('✅ Đã load config:', name);
                        syncUI();
                        updateInputs();
                    }
                }
            });

            // SLIDERS + INPUTS
            const paramMap = {
                'preGain': { sl: 'sl-pg', lb: 'lb-pg', num: 'num-pg' },
                'drive': { sl: 'sl-dr', lb: 'lb-dr', num: 'num-dr' },
                'crush': { sl: 'sl-cr', lb: 'lb-cr', num: 'num-cr' },
                'width': { sl: 'sl-wd', lb: 'lb-wd', num: 'num-wd' },
                'postGain': { sl: 'sl-po', lb: 'lb-po', num: 'num-po' },
                'bass': { sl: 'sl-bs', lb: 'lb-bs', num: 'num-bs' },
                'treble': { sl: 'sl-tr', lb: 'lb-tr', num: 'num-tr' },
                'echo': { sl: 'sl-ec', lb: 'lb-ec', num: 'num-ec' },
                'gateThreshold': { sl: 'sl-gt', lb: 'lb-gt', num: 'num-gt' },
                'deEsser': { sl: 'sl-de', lb: 'lb-de', num: 'num-de' },
            };

            Object.keys(paramMap).forEach(param => {
                const ids = paramMap[param];
                const sl = document.getElementById(ids.sl);
                const num = document.getElementById(ids.num);
                if (!sl || !num) return;

                sl.oninput = () => {
                    let val = parseFloat(sl.value);
                    if (param === 'gateThreshold') val = val * 0.05;
                    else if (param === 'postGain') val = val * 20;
                    else if (param === 'preGain') val = val * 1000;
                    else val = val / 1000;
                    P[param] = val;
                    num.value = val.toFixed(4);
                    Core.push();
                    syncUI();
                    updateInputs();
                };

                num.oninput = () => {
                    let val = parseFloat(num.value) || 0;
                    P[param] = val;
                    let sliderVal = val;
                    if (param === 'gateThreshold') sliderVal = val / 0.05;
                    else if (param === 'postGain') sliderVal = val / 20;
                    else if (param === 'preGain') sliderVal = val / 1000;
                    else sliderVal = val * 1000;
                    sl.value = Math.min(1000, Math.max(0, sliderVal));
                    Core.push();
                    syncUI();
                };

                num.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') num.blur();
                });
            });

            document.getElementById('kh-rst').onclick = () => {
                applyConfig({ preGain: 1, drive: 0, crush: 0, width: 0, postGain: 1, bass: 0, treble: 0, echo: 0, gateThreshold: 0.005, deEsser: 0 });
                document.querySelectorAll('.suggestion-btn').forEach(b => {
                    b.style.background = 'rgba(0,255,136,0.05)';
                    b.style.color = '#00ff88';
                    b.style.boxShadow = 'none';
                    b.style.transform = 'scale(1)';
                });
                console.log('🔄 Reset về mặc định');
            };
        },
        css() {
            const s = document.createElement('style');
            s.textContent = `
            @keyframes pulse {
                0%,100%{transform:scale(1);}
                50%{transform:scale(1.1);}
            }
            @keyframes glow {
                0%,100%{text-shadow:0 0 20px #00ff88;}
                50%{text-shadow:0 0 40px #00ff88,0 0 80px #00ff8840;}
            }
            #kh-root {
                position:fixed;top:20px;right:20px;width:440px;
                background:rgba(10,10,18,0.92);
                backdrop-filter:blur(20px);
                border:2px solid #00ff88;
                border-radius:20px;
                box-shadow:0 0 60px #00ff8840, inset 0 0 60px #00ff8820;
                font-family:'Segoe UI',system-ui,sans-serif;
                color:#00ff88;
                z-index:999998;
                user-select:none;
                max-height:90vh;
                overflow-y:auto;
                transition:all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                transform-origin:top right;
            }
            #kh-root::-webkit-scrollbar{width:6px;}
            #kh-root::-webkit-scrollbar-track{background:rgba(0,255,136,0.05);border-radius:10px;}
            #kh-root::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#00ff88,#00cc66);border-radius:10px;}
            #kh-head {
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:16px 20px;
                background:rgba(15,15,26,0.8);
                border-bottom:1px solid rgba(0,255,136,0.1);
                border-radius:20px 20px 0 0;
                backdrop-filter:blur(10px);
            }
            #kh-title{display:flex;align-items:center;gap:12px;}
            #kh-name{font-size:20px;font-weight:900;letter-spacing:1px;animation:glow 3s infinite;}
            #kh-right{display:flex;align-items:center;gap:12px;}
            #kh-badge{display:flex;align-items:center;gap:8px;background:rgba(0,255,136,0.05);padding:6px 14px;border-radius:12px;border:1px solid rgba(0,255,136,0.1);}
            #kh-dot{width:10px;height:10px;border-radius:50%;background:#888;transition:all 0.3s;}
            #kh-st{font-size:11px;color:#888;letter-spacing:1px;font-weight:bold;}
            #kh-close{background:rgba(255,51,85,0.1);border:1px solid rgba(255,51,85,0.2);color:#ff3355;border-radius:8px;width:32px;height:32px;font-size:16px;cursor:pointer;transition:all 0.3s;}
            #kh-close:hover{background:rgba(255,51,85,0.2);border-color:#ff3355;transform:scale(1.1);}
            #kh-body{padding:20px;}
            .kh-section-title{font-size:12px;font-weight:bold;color:#00ff88;margin:12px 0 8px;letter-spacing:2px;text-transform:uppercase;opacity:0.7;}
            #kh-suggestions{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:12px;}
            .suggestion-btn{
                padding:8px 10px;font-size:12px;font-weight:bold;
                background:rgba(0,255,136,0.05);
                border:1px solid rgba(0,255,136,0.15);
                color:#00ff88;
                border-radius:10px;
                cursor:pointer;
                transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                text-align:left;
                line-height:1.4;
            }
            .suggestion-btn:hover{
                background:rgba(0,255,136,0.1);
                border-color:#00ff88;
                transform:scale(1.02);
                box-shadow:0 0 20px rgba(0,255,136,0.1);
            }
            #saved-configs-list{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;}
            .saved-config-btn{
                flex:0 1 auto;padding:6px 12px;font-size:11px;font-weight:bold;
                background:rgba(167,139,250,0.05);
                border:1px solid rgba(167,139,250,0.2);
                color:#a78bfa;
                border-radius:8px;
                cursor:pointer;
                transition:all 0.3s;
            }
            .saved-config-btn:hover{background:rgba(167,139,250,0.1);border-color:#a78bfa;transform:scale(1.05);}
            .del-config{cursor:pointer;color:#ff3355;transition:all 0.3s;}
            .del-config:hover{color:#ff0000;transform:scale(1.2);}
            .kh-sep{height:1px;background:linear-gradient(90deg,transparent,rgba(0,255,136,0.3),transparent);margin:12px 0;}
            .kh-row{margin-bottom:12px;}
            .kh-rowlabel{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:bold;margin-bottom:4px;}
            .kh-rowlabel span:first-child{opacity:0.8;}
            .kh-rowlabel span:last-child{color:#fff;text-shadow:0 0 20px #00ff88;}
            .kh-rowlabel input[type=number]{
                width:80px;
                background:rgba(0,255,136,0.05);
                border:1px solid rgba(0,255,136,0.15);
                color:#00ff88;
                border-radius:6px;
                padding:4px 8px;
                font-size:12px;
                text-align:center;
                transition:all 0.3s;
            }
            .kh-rowlabel input[type=number]:focus{
                outline:none;
                border-color:#00ff88;
                box-shadow:0 0 20px rgba(0,255,136,0.1);
            }
            input[type=range]{
                -webkit-appearance:none;
                width:100%;
                height:6px;
                background:linear-gradient(90deg,#00ff88 var(--v,0%),rgba(0,255,136,0.1) var(--v,0%));
                border-radius:10px;
                outline:none;
                transition:all 0.3s;
            }
            input[type=range]::-webkit-slider-thumb{
                -webkit-appearance:none;
                width:20px;
                height:20px;
                background:radial-gradient(circle at 30% 30%, #00ff88, #00cc66);
                border:2px solid #0a0a12;
                border-radius:50%;
                cursor:pointer;
                box-shadow:0 0 20px rgba(0,255,136,0.3);
                transition:all 0.3s;
            }
            input[type=range]::-webkit-slider-thumb:hover{
                transform:scale(1.15);
                box-shadow:0 0 30px rgba(0,255,136,0.5);
            }
            #kh-rst{
                width:100%;padding:12px;margin-top:8px;
                background:rgba(0,255,136,0.05);
                border:1px solid rgba(0,255,136,0.15);
                color:#00ff88;
                font-size:13px;font-weight:bold;
                border-radius:10px;
                cursor:pointer;
                transition:all 0.3s;
            }
            #kh-rst:hover{
                background:rgba(0,255,136,0.1);
                border-color:#00ff88;
                transform:scale(1.02);
                box-shadow:0 0 30px rgba(0,255,136,0.1);
            }
            @media (max-width:480px){#kh-root{width:340px;right:10px;top:10px;}}
            `;
            document.head.appendChild(s);
        }
    };

    function refreshSavedConfigs() {
        const container = document.getElementById('saved-configs-list');
        if (!container) return;
        const names = getSavedConfigNames();
        container.innerHTML = names.map(name => `
            <button class="saved-config-btn" data-name="${name}">
                ${name}
                <span style="font-size:10px;color:#ff3355;margin-left:6px;" class="del-config">✕</span>
            </button>
        `).join('');
    }

    // ============================================================
    //  BOOT
    // ============================================================
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => UI.init());
    else UI.init();

    console.log('✅ HELLFIRE ULTIMATE - Bố Duy Khánh đã sẵn sàng!');
    console.log('💀 GIỮ NGUYÊN 100% CONFIG GỐC (CÓ LOA PHƯỜNG)');
    console.log('🔇 DOUBLE TAP MÀN HÌNH ĐỂ TẮT/BẬT UI');
    console.log('🔥 UI SIÊU ĐẸP, TO, KÉO MƯỢT');
})();