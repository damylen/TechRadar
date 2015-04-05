var Slide;
(function (Slide) {
    var SlideCtrl = (function () {
        function SlideCtrl($scope, busService) {
            var _this = this;
            this.$scope = $scope;
            this.busService = busService;
            $scope.vm = this;
            busService.subscribe('slide', function (title, slide) {
                if (title !== 'newSlide')
                    return;
                _this.showSlide(slide);
            });
        }
        SlideCtrl.prototype.showSlide = function (slide) {
            if (this.$scope.$root.$$phase != '$apply' && this.$scope.$root.$$phase != '$digest') {
                this.$scope.$apply();
            }
        };
        SlideCtrl.$inject = [
            '$scope',
            'busService'
        ];
        return SlideCtrl;
    })();
    Slide.SlideCtrl = SlideCtrl;
})(Slide || (Slide = {}));