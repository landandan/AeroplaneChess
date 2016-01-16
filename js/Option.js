/**
 * Created by Andrew on 2015/5/14.
 */
/**
 * 设置
 * @constructor
 */
var PlaneOption = function () {
    /**
     *
     * @param color /red/blue/yellow/green
     * @param state /normal/close/win/computer
     * @constructor
     */
    var PLANEUSER = function (color, state) {
        this.color = color;
        this.state = state;
    };
    this.userList = [new PLANEUSER('red', 'normal'), new PLANEUSER('blue', 'computer'), new PLANEUSER('yellow', 'computer'), new PLANEUSER('green', 'computer')];
    this.difficulty = 'normal';  //难度
    this.currentUser = 'red';  //当前用户
    this.backgroundMusic = true;    //背景音乐开关
    this.gameMusic = true;  //游戏音效开关
    /**
     * 设置难度
     */
    this.setDifficulty = function () {
        $j('#nandu li').each(function () {
            if ($j(this).hasClass('bth')) {
                switch ($j(this).text()) {
                    case '简单':
                        this.difficulty = 'easy';
                        break;
                    case '普通':
                        this.difficulty = 'normal';
                        break;
                    case '难':
                        this.difficulty = 'hard';
                        break;
                }
            }
        });
    };

    /**
     * 设置默认首个启动用户
     */
    function setFirstUser() {
        for (var i = 0; i < this.userList.length; i++) {
            if (this.userList.state == 'normal') {
                this.currentUser = this.userList.color;
                return;
            }
        }
    }

    function setUser(obj, user) {
        $j(obj).each(function () {
            if ($j(this).hasClass('bth')) {
                switch ($j(this).text()) {
                    case '玩家':
                        user.state = 'normal';
                        break;
                    case '电脑':
                        user.state = 'computer';
                        break;
                    case '无':
                        user.state = 'close';
                        break;
                }
            }
        });
    }

    this.setUserList = function () {
        setUser('#redUser li', this.userList[0]);
        setUser('#blueUser li', this.userList[1]);
        setUser('#yellowUser li', this.userList[2]);
        setUser('#greenUser li', this.userList[3]);
    };

    /**
     * 开始
     */
    this.begin = function () {
        this.setUserList();
        this.setDifficulty();
        createPlane(planeOption.userList);
        $j("#sdn" + planeOption.currentUser).text('请投骰');
        $j('.option').hide();
    };

    this.tabStyle = function (obj) {
        $j(obj).each(function () {
            $j(this).click(function () {
                $j(this).addClass('bth');
                $j(this).siblings().removeClass('bth');
            });
        });
    };
};
var planeOption = new PlaneOption();