"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = getApp();
Page({
    data: {
        motto: '点击 “编译” 以构建',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        time: (new Date()).toString(),
        a: 1, b: 2, c: 3,
        name: 'world',
        length: 3,
        array: [{
                message: 'foo',
            }, {
                message: 'bar'
            }],
        objectArray: [
            { id: 5, unique: 'unique_5' },
            { id: 4, unique: 'unique_4' },
            { id: 3, unique: 'unique_3' },
            { id: 2, unique: 'unique_2' },
            { id: 1, unique: 'unique_1' },
            { id: 0, unique: 'unique_0' },
        ],
        numberArray: [1, 2, 3, 4],
    },
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        });
    },
    onLoad: function () {
        var _this = this;
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true,
            });
        }
        else if (this.data.canIUse) {
            app.userInfoReadyCallback = function (res) {
                _this.setData({
                    userInfo: res,
                    hasUserInfo: true
                });
            };
        }
        else {
            wx.getUserInfo({
                success: function (res) {
                    app.globalData.userInfo = res.userInfo;
                    _this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    });
                }
            });
        }
    },
    getUserInfo: function (e) {
        console.log(e);
        app.globalData.userInfo = e.detail.userInfo;
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: true
        });
    },
    switch: function (e) {
        var length = this.data.objectArray.length;
        for (var i = 0; i < length; ++i) {
            var x = Math.floor(Math.random() * length);
            var y = Math.floor(Math.random() * length);
            var temp = this.data.objectArray[x];
            this.data.objectArray[x] = this.data.objectArray[y];
            this.data.objectArray[y] = temp;
        }
        this.setData({
            objectArray: this.data.objectArray
        });
    },
    addToFront: function (e) {
        var length = this.data.objectArray.length;
        this.data.objectArray = [{ id: length, unique: 'unique_' + length }].concat(this.data.objectArray);
        this.setData({
            objectArray: this.data.objectArray
        });
    },
    addNumberToFront: function (e) {
        this.data.numberArray = [this.data.numberArray.length + 1].concat(this.data.numberArray);
        this.setData({
            numberArray: this.data.numberArray
        });
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBVSxDQUFBO0FBRTVCLElBQUksQ0FBQztJQUNILElBQUksRUFBRTtRQUNKLEtBQUssRUFBRSxhQUFhO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO1FBQ1osV0FBVyxFQUFFLEtBQUs7UUFDbEIsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsOEJBQThCLENBQUM7UUFDbkQsSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUM3QixDQUFDLEVBQUUsQ0FBQyxFQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDakIsSUFBSSxFQUFFLE9BQU87UUFDYixNQUFNLEVBQUMsQ0FBQztRQUVSLEtBQUssRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSxLQUFLO2FBQ2YsRUFBRTtnQkFDRCxPQUFPLEVBQUUsS0FBSzthQUNmLENBQUM7UUFDRixXQUFXLEVBQUU7WUFDWCxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztZQUMzQixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBQztTQUM1QjtRQUNELFdBQVcsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUMx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Q0FBQTtRQUNoRyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztTQUNuQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZ0JBQWdCLEVBQUUsVUFBUyxDQUFNO1FBQy9CLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQzFGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXO1NBQ25DLENBQUMsQ0FBQTtJQUNKLENBQUM7Q0FFRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvL2luZGV4LmpzXG4vL+iOt+WPluW6lOeUqOWunuS+i1xuaW1wb3J0IHsgSU15QXBwIH0gZnJvbSAnLi4vLi4vYXBwJ1xuXG5jb25zdCBhcHAgPSBnZXRBcHA8SU15QXBwPigpXG5cblBhZ2Uoe1xuICBkYXRhOiB7XG4gICAgbW90dG86ICfngrnlh7sg4oCc57yW6K+R4oCdIOS7peaehOW7uicsXG4gICAgdXNlckluZm86IHt9LFxuICAgIGhhc1VzZXJJbmZvOiBmYWxzZSxcbiAgICBjYW5JVXNlOiB3eC5jYW5JVXNlKCdidXR0b24ub3Blbi10eXBlLmdldFVzZXJJbmZvJyksXG4gICAgdGltZTogKG5ldyBEYXRlKCkpLnRvU3RyaW5nKCksXG4gICAgYTogMSwgIGI6IDIsIGM6IDMsXG4gICAgbmFtZTogJ3dvcmxkJyxcbiAgICBsZW5ndGg6MyxcblxuICAgIGFycmF5OiBbe1xuICAgICAgbWVzc2FnZTogJ2ZvbycsXG4gICAgfSwge1xuICAgICAgbWVzc2FnZTogJ2JhcidcbiAgICB9XSxcbiAgICBvYmplY3RBcnJheTogW1xuICAgICAge2lkOiA1LCB1bmlxdWU6ICd1bmlxdWVfNSd9LFxuICAgICAge2lkOiA0LCB1bmlxdWU6ICd1bmlxdWVfNCd9LFxuICAgICAge2lkOiAzLCB1bmlxdWU6ICd1bmlxdWVfMyd9LFxuICAgICAge2lkOiAyLCB1bmlxdWU6ICd1bmlxdWVfMid9LFxuICAgICAge2lkOiAxLCB1bmlxdWU6ICd1bmlxdWVfMSd9LFxuICAgICAge2lkOiAwLCB1bmlxdWU6ICd1bmlxdWVfMCd9LFxuICAgIF0sXG4gICAgbnVtYmVyQXJyYXk6IFsxLCAyLCAzLCA0XSxcbiAgfSxcbiAgLy/kuovku7blpITnkIblh73mlbBcbiAgYmluZFZpZXdUYXAoKSB7XG4gICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICB1cmw6ICcuLi9sb2dzL2xvZ3MnXG4gICAgfSlcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIGlmIChhcHAuZ2xvYmFsRGF0YS51c2VySW5mbykge1xuICAgICAgdGhpcy5zZXREYXRhISh7XG4gICAgICAgIHVzZXJJbmZvOiBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyxcbiAgICAgICAgaGFzVXNlckluZm86IHRydWUsXG4gICAgICB9KVxuICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmNhbklVc2Upe1xuICAgICAgLy8g55Sx5LqOIGdldFVzZXJJbmZvIOaYr+e9kee7nOivt+axgu+8jOWPr+iDveS8muWcqCBQYWdlLm9uTG9hZCDkuYvlkI7miY3ov5Tlm55cbiAgICAgIC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgIGFwcC51c2VySW5mb1JlYWR5Q2FsbGJhY2sgPSAocmVzKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgIHVzZXJJbmZvOiByZXMsXG4gICAgICAgICAgaGFzVXNlckluZm86IHRydWVcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8g5Zyo5rKh5pyJIG9wZW4tdHlwZT1nZXRVc2VySW5mbyDniYjmnKznmoTlhbzlrrnlpITnkIZcbiAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHRoaXMuc2V0RGF0YSEoe1xuICAgICAgICAgICAgdXNlckluZm86IHJlcy51c2VySW5mbyxcbiAgICAgICAgICAgIGhhc1VzZXJJbmZvOiB0cnVlXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0sXG5cbiAgZ2V0VXNlckluZm8oZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZSlcbiAgICBhcHAuZ2xvYmFsRGF0YS51c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvXG4gICAgdGhpcy5zZXREYXRhISh7XG4gICAgICB1c2VySW5mbzogZS5kZXRhaWwudXNlckluZm8sXG4gICAgICBoYXNVc2VySW5mbzogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgc3dpdGNoOiBmdW5jdGlvbihlOiBhbnkpIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmRhdGEub2JqZWN0QXJyYXkubGVuZ3RoXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbmd0aClcbiAgICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZW5ndGgpXG4gICAgICBjb25zdCB0ZW1wID0gdGhpcy5kYXRhLm9iamVjdEFycmF5W3hdXG4gICAgICB0aGlzLmRhdGEub2JqZWN0QXJyYXlbeF0gPSB0aGlzLmRhdGEub2JqZWN0QXJyYXlbeV1cbiAgICAgIHRoaXMuZGF0YS5vYmplY3RBcnJheVt5XSA9IHRlbXBcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIG9iamVjdEFycmF5OiB0aGlzLmRhdGEub2JqZWN0QXJyYXlcbiAgICB9KVxuICB9LFxuXG4gIGFkZFRvRnJvbnQ6IGZ1bmN0aW9uKGU6IGFueSkge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuZGF0YS5vYmplY3RBcnJheS5sZW5ndGhcbiAgICB0aGlzLmRhdGEub2JqZWN0QXJyYXkgPSBbe2lkOiBsZW5ndGgsIHVuaXF1ZTogJ3VuaXF1ZV8nICsgbGVuZ3RofV0uY29uY2F0KHRoaXMuZGF0YS5vYmplY3RBcnJheSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgb2JqZWN0QXJyYXk6IHRoaXMuZGF0YS5vYmplY3RBcnJheVxuICAgIH0pXG4gIH0sXG5cbiAgYWRkTnVtYmVyVG9Gcm9udDogZnVuY3Rpb24oZTogYW55KXtcbiAgICB0aGlzLmRhdGEubnVtYmVyQXJyYXkgPSBbIHRoaXMuZGF0YS5udW1iZXJBcnJheS5sZW5ndGggKyAxIF0uY29uY2F0KHRoaXMuZGF0YS5udW1iZXJBcnJheSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgbnVtYmVyQXJyYXk6IHRoaXMuZGF0YS5udW1iZXJBcnJheVxuICAgIH0pXG4gIH1cblxufSlcbiJdfQ==