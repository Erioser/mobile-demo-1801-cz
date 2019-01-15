// $.fn.tap = function (callback) {
//     let st, et;
//     let sx,sy,ex,ey;
//     let isMove = false;
//     this.on('touchstart', function (e) {
//         isMove = false;
//         st = Date.now()
//         sx = e.touches[0].clientX
//         sy = e.touches[0].clientY
//     })

//     this.on('touchmove', function () {
//         isMove = true
//     })

//     this.on('touchend', function (e) {
//         et = Date.now()
//         ex = e.changedTouches[0].clientX
//         ey = e.changedTouches[0].clientY
//         if ( et - st < 100 && ! isMove && Math.abs(ex - sx) < 10 && Math.abs(ey - sy) < 10 ) {
//             callback.call(this)
//         }
//     })
// }


