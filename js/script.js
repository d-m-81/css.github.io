"use strict";
//declare const Splide: any
gsap.registerPlugin(ScrollTrigger);
window.addEventListener('load', (e) => {
    document.body.classList.remove('loading');
});
document.querySelectorAll('.section--01').forEach((v, k) => {
    v.insertAdjacentHTML('afterbegin', '<div class="section-number"></div>');
});
(() => {
    const scrollEffect03 = class {
        constructor(target, options) {
            this.c = {};
            this.s = {
                rect: '-rect',
            };
            this.getSelectorName('scrollEffect');
            this.target = target;
            if (this.target) {
                window.addEventListener('load', (e) => {
                    this.img = this.target.querySelector('img');
                    this.options = options;
                    let gs = {
                        img1: {
                            set: {
                                yPercent: 0,
                            },
                            to: {
                                yPercent: {
                                    yPercent: -40,
                                    ease: 'none',
                                },
                            },
                            scrollTrigger: {
                                trigger: this.target,
                                start: 'top bottom', //'center bottom'
                                end: 'bottom top', //'+=+' + wh + ' bottom'
                                scrub: 1,
                                markers: false,
                            }
                        },
                    };
                    Object.assign(gs.img1.set, this.options.img1.set);
                    Object.assign(gs.img1.to, this.options.img1.to);
                    Object.assign(gs.img1.scrollTrigger, this.options.img1.scrollTrigger);
                    Object.assign(gs.img1.to.yPercent, { scrollTrigger: gs.img1.scrollTrigger });
                    gsap.set(this.img, gs.img1.set);
                    gsap.to(this.img, gs.img1.to.yPercent);
                    console.log(gs);
                });
            }
        }
        getSelectorName(prefix) {
            Object.keys(this.s).forEach((v) => {
                this.c[v] = prefix + this.s[v];
                this.s[v] = '.' + prefix + this.s[v];
            });
        }
    };
    window.addEventListener('DOMContentLoaded', (e) => {
        document.querySelectorAll('.scrollEffect--02').forEach((v, k) => {
            const yPercent = { max: 1, min: .1 };
            console.log("'bottom+=' + (10 * Math.random()) + 'vw top'", 'bottom+=' + (10 * Math.random()) + 'vw top');
            const loop = new scrollEffect03(v, {
                img1: {
                    to: {
                        yPercent: {
                            yPercent: (Math.random() * (yPercent.max - yPercent.min) + yPercent.min) * -100
                        }
                    },
                    scrollTrigger: {
                        //trigger: document.querySelector('.gridView-contents'),
                        end: 'bottom+=' + (50 * Math.random()) + 'vw top', //'+=+' + wh + ' bottom'
                        //scrub: Math.random(),
                    }
                }
            });
        });
    });
})();
let ww = window.outerWidth;
window.addEventListener('resize', (e) => {
    if (window.outerWidth != ww)
        ScrollTrigger.refresh();
    ww = window.outerWidth;
});
window.addEventListener('load', (e) => {
    setTimeout(() => {
        ScrollTrigger.refresh();
    }, 1000);
});
