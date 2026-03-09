const BILIBILI_DYNAMIC_URL = "https://t.bilibili.com"
const BILIBILI_DYNAMIC_DETAIL_URL = "https://www.bilibili.com/opus"
const BILIBILI_SPACE_URL = "https://space.bilibili.com"
const BILIBILI_SEARCH_URL = "https://search.bilibili.com"
const BILIBILI_POPULAR_URL = "https://www.bilibili.com/v/popular"
const BILIBILI_VIDEO_URL = "https://www.bilibili.com/video"
const BILIBILI_WATCH_LATER_URL = "https://www.bilibili.com/list/watchlater"

// 数据来源: 
// https://zhuanlan.zhihu.com/p/647858735
// https://www.bilibili.com/opus/947355522451898376
const BILIBILI_UID_TIME_RANGES = [
    [1, 27, "2009/06"],
    [28, 91, "2009/07"],
    [92, 1543, "2009/07"],
    [1544, 5697, "2009/07-12"],
    [5698, 5714, "2009/12"],
    [5715, 9999, "2010/01-02"],
    [10000, 44186, "2010/02-06"],
    [44187, 78765, "2010/06-12"],
    [78766, 99999, "2011/01-02"],
    [100000, 259332, "2011/02-12"],
    [259333, 680417, "2012/01-12"],
    [680418, 999999, "2013/01-05"],
    [1000000, 2954623, "2013/05-12"],
    [2954624, 7532842, "2014/01-12"],
    [7532843, 9999999, "2015/01-05"],
    [10000000, 20593642, "2015/05-12"],
    [20593643, 73886290, "2016/01-12"],
    [73886291, 99999999, "2017/01-03"],
    [100000000, 200000000, "2017/03-09"],
    [200000001, 272960616, "2017/09-12"],
    [272960617, 333333333, "2018/01-06"],
    [333333334, 393942207, "2018/06-12"],
    [393942208, 450000000, "2019/01-06"],
    [450000001, 490696435, "2019/06-12"],
    [490696436, 550000000, "2020/01-04"],
    [550000001, 600000000, "2020/04-06"],
    [600000001, 650000000, "2020/06-08"],
    [650000001, 703223216, "2020/08-10"],
    [703223217, 799999999, "2020/10"],
    [1000000000, 3000000000, "2020/10~"],
    [100000000000000, 3461499999999999, "2022/03-05"],
    [3461500000000000, 3492999999999999, "2022/05-10"],
    [3493000000000000, 3494299999999999, "2022/10-2023/05"],
    [3494300000000000, 3537099999999999, "2023/05-07"],
    [3537100000000000, 9999999999999999, "2023/07~"]
]
const BILIBILI_VIDEO_TYPE_MAP = {"1": "动画", "24": "MAD·AMV", "25": "MMD·3D", "47": "短片·手书", "210": "手办·模玩", "86": "特摄", "253": "动漫杂谈", "27": "综合", "13": "番剧", "51": "资讯", "152": "官方延伸", "32": "完结动画", "33": "连载动画", "167": "国创", "153": "国产动画", "168": "国产原创相关", "169": "布袋戏", "170": "资讯", "195": "动态漫·广播剧", "3": "音乐", "28": "原创音乐", "31": "翻唱", "30": "VOCALOID·UTAU", "59": "演奏", "193": "MV", "29": "音乐现场", "130": "音乐综合", "243": "乐评盘点", "244": "音乐教学", "129": "舞蹈", "20": "宅舞", "154": "舞蹈综合", "156": "舞蹈教程", "198": "街舞", "199": "明星舞蹈", "200": "国风舞蹈", "4": "游戏", "17": "单机游戏", "171": "电子竞技", "172": "手机游戏", "65": "网络游戏", "173": "桌游棋牌", "121": "GMV", "136": "音游", "19": "Mugen", "36": "知识", "201": "科学科普", "124": "社科·法律·心理", "228": "人文历史", "207": "财经商业", "208": "校园学习", "209": "职业职场", "229": "设计·创意", "122": "野生技术协会", "188": "科技", "95": "数码", "230": "软件应用", "231": "计算机技术", "232": "科工机械", "233": "极客DIY", "234": "运动", "235": "篮球", "249": "足球", "164": "健身", "236": "竞技体育", "237": "运动文化", "238": "运动综合", "223": "汽车", "245": "赛车", "246": "改装玩车", "247": "新能源车", "248": "房车", "240": "摩托车", "227": "购车攻略", "176": "汽车生活", "160": "生活", "138": "搞笑", "250": "出行", "251": "三农", "239": "家居房产", "161": "手工", "162": "绘画", "21": "日常", "211": "美食", "76": "美食制作", "212": "美食侦探", "213": "美食测评", "214": "田园美食", "215": "美食记录", "217": "动物圈", "218": "喵星人", "219": "汪星人", "221": "野生动物", "222": "小宠异宠", "75": "动物综合", "119": "鬼畜", "22": "鬼畜调教", "26": "音MAD", "126": "人力VOCALOID", "216": "鬼畜剧场", "127": "教程演示", "155": "时尚", "157": "美妆护肤", "252": "仿妆cos", "158": "穿搭", "159": "时尚潮流", "202": "资讯", "203": "热点", "204": "环球", "205": "社会", "206": "综合", "5": "娱乐", "71": "综艺", "241": "娱乐杂谈", "242": "粉丝创作", "137": "明星综合", "181": "影视", "182": "影视杂谈", "183": "影视剪辑", "85": "小剧场", "184": "预告·资讯", "177": "纪录片", "37": "人文·历史", "178": "科学·探索·自然", "179": "军事", "180": "社会·美食·旅行", "23": "电影", "147": "华语电影", "145": "欧美电影", "146": "日本电影", "83": "其他国家", "11": "电视剧", "185": "国产剧", "187": "海外剧", "257": "配音", "174": "其他"}
const BILIBILI_VIDEO_TYPE_LINK = {"1": "douga", "24": "douga/mad", "25": "douga/mmd", "47": "douga/voice", "210": "douga/garage_kit", "86": "douga/tokusatsu", "253": "douga/acgntalks", "27": "douga/other", "13": "anime", "51": "anime/information", "152": "anime/offical", "32": "anime/finish", "33": "anime/serial", "167": "guochuang", "153": "guochuang/chinese", "168": "guochuang/original", "169": "guochuang/puppetry", "170": "guochuang/information", "195": "guochuang/motioncomic", "3": "music", "28": "music/original", "31": "music/cover", "30": "music/vocaloid", "59": "music/perform", "193": "music/mv", "29": "music/live", "130": "music/other", "243": "music/commentary", "244": "music/tutorial", "129": "dance", "20": "dance/otaku", "154": "dance/three_d", "156": "dance/demo", "198": "dance/hiphop", "199": "dance/star", "200": "dance/china", "4": "game", "17": "game/stand_alone", "171": "game/esports", "172": "game/mobile", "65": "game/online", "173": "game/board", "121": "game/gmv", "136": "game/music", "19": "game/mugen", "36": "knowledge", "201": "knowledge/science", "124": "knowledge/social_science", "228": "knowledge/humanity_history", "207": "knowledge/business", "208": "knowledge/campus", "209": "knowledge/career", "229": "knowledge/design", "122": "knowledge/skill", "188": "tech", "95": "tech/digital", "230": "tech/application", "231": "tech/computer_tech", "232": "tech/industry", "233": "tech/diy", "234": "sports", "235": "sports/basketball", "249": "sports/football", "164": "sports/aerobics", "236": "sports/athletic", "237": "sports/culture", "238": "sports/comprehensive", "223": "car", "245": "car/racing", "246": "car/modifiedvehicle", "247": "car/newenergyvehicle", "248": "car/touringcar", "240": "car/motorcycle", "227": "car/strategy", "176": "car/life", "160": "life", "138": "life/funny", "250": "life/travel", "251": "life/rurallife", "239": "life/home", "161": "life/handmake", "162": "life/painting", "21": "life/daily", "211": "food", "76": "food/make", "212": "food/detective", "213": "food/measurement", "214": "food/rural", "215": "food/record", "217": "animal", "218": "animal/cat", "219": "animal/dog", "221": "animal/wild_animal", "222": "animal/reptiles", "75": "animal/animal_composite", "119": "kichiku", "22": "kichiku/guide", "26": "kichiku/mad", "126": "kichiku/manual_vocaloid", "216": "kichiku/theatre", "127": "kichiku/course", "155": "fashion", "157": "fashion/makeup", "252": "fashion/cos", "158": "fashion/clothing", "159": "fashion/trend", "202": "information", "203": "information/hotspot", "204": "information/global", "205": "information/social", "206": "information/multiple",  "5": "ent", "71": "ent/variety", "241": "ent/talker", "242": "ent/fans", "137": "ent/celebrity", "181": "cinephile", "182": "cinephile/cinecism", "183": "cinephile/montage", "85": "cinephile/shortfilm", "184": "cinephile/trailer_info", "177": "documentary", "37": "documentary/history", "178": "documentary/science", "179": "documentary/military", "180": "documentary/travel", "23": "movie", "147": "movie/chinese", "145": "movie/west", "146": "movie/japan", "83": "movie/movie", "11": "tv", "185": "tv/mainland", "187": "tv/overseas", "257": "douga/voice", "174": "life/other"}
