'use strict';

angular.module('d3ForceTestApp')
  .controller('MainCtrl', ['$scope','$http','$routeParams', function ($scope, $http, $routeParams) {
    $scope.relationships = {};
    $scope.data          = {};
    $scope.assort        = '1';
    $scope.assortData    = [
      {
        "category_id": "01",
        "category_name": "乳及乳制品",
        "includes": [
          {
            "category_id": "0101",
            "category_name": "巴氏杀菌乳类",
            "includes": [
              {
                "category_id": "010101",
                "category_name": "巴氏杀菌乳"
              },
              {
                "category_id": "010102",
                "category_name": "灭菌乳"
              },
              {
                "category_id": "010103",
                "category_name": "调制乳"
              }
            ]
          },
          {
            "category_id": "0102",
            "category_name": "风味发酵乳类",
            "includes": [
              {
                "category_id": "010201",
                "category_name": "发酵乳"
              },
              {
                "category_id": "010202",
                "category_name": "风味发酵乳"
              }
            ]
          },
          {
            "category_id": "0103",
            "category_name": "乳粉和奶油粉类",
            "includes": [
              {
                "category_id": "010301",
                "category_name": "乳粉和奶油粉"
              },
              {
                "category_id": "010302",
                "category_name": "调制乳粉和调制奶油粉"
              }
            ]
          },
          {
            "category_id": "0104",
            "category_name": "炼乳类",
            "includes": [
              {
                "category_id": "010401",
                "category_name": "淡炼乳"
              },
              {
                "category_id": "010402",
                "category_name": "调制炼乳"
              }
            ]
          },
          {
            "category_id": "0105",
            "category_name": "稀奶油类",
            "includes": [
              {
                "category_id": "010501",
                "category_name": "稀奶油"
              },
              {
                "category_id": "010502",
                "category_name": "凝固稀奶油"
              },
              {
                "category_id": "010503",
                "category_name": "调味稀奶油"
              },
              {
                "category_id": "010504",
                "category_name": "稀奶油类似品"
              }
            ]
          },
          {
            "category_id": "0106",
            "category_name": "干酪",
            "includes": [
              {
                "category_id": "010601",
                "category_name": "非熟化干酪"
              },
              {
                "category_id": "010602",
                "category_name": "熟化干酪"
              },
              {
                "category_id": "010603",
                "category_name": "乳清干酪"
              },
              {
                "category_id": "010604",
                "category_name": "再制干酪"
              },
              {
                "category_id": "010605",
                "category_name": "类干酪"
              },
              {
                "category_id": "010606",
                "category_name": "乳清蛋白干酪"
              }
            ]
          },
          {
            "category_id": "0107",
            "category_name": "即食风味甜点",
            "includes": []
          },
          {
            "category_id": "0108",
            "category_name": "其他乳制品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "02",
        "category_name": "脂肪及油类",
        "includes": [
          {
            "category_id": "0201",
            "category_name": "基本无水脂肪和油",
            "includes": [
              {
                "category_id": "020101",
                "category_name": "植物油脂"
              },
              {
                "category_id": "020102",
                "category_name": "动物油脂"
              },
              {
                "category_id": "020103",
                "category_name": "无水黄油，无水乳脂"
              }
            ]
          },
          {
            "category_id": "0202",
            "category_name": "水油状脂肪乳化制品",
            "includes": [
              {
                "category_id": "020201",
                "category_name": "脂肪含量80%以上的乳化制品"
              },
              {
                "category_id": "020202",
                "category_name": "脂肪含量80%以下的乳化制品"
              }
            ]
          },
          {
            "category_id": "0203",
            "category_name": "其他脂肪乳化制品",
            "includes": []
          },
          {
            "category_id": "0204",
            "category_name": "脂肪类甜品",
            "includes": []
          },
          {
            "category_id": "0205",
            "category_name": "其他油脂或油脂制品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "03",
        "category_name": "冷冻饮品",
        "includes": [
          {
            "category_id": "0301",
            "category_name": "冰淇淋类、雪糕类",
            "includes": []
          },
          {
            "category_id": "0303",
            "category_name": "风味冰、冰棍类",
            "includes": []
          },
          {
            "category_id": "0304",
            "category_name": "食用冰",
            "includes": []
          },
          {
            "category_id": "0305",
            "category_name": "其他冷冻饮品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "04",
        "category_name": "果蔬豆菌藻坚果类",
        "includes": [
          {
            "category_id": "0401",
            "category_name": "水果",
            "includes": [
              {
                "category_id": "040101",
                "category_name": "新鲜水果"
              },
              {
                "category_id": "040102",
                "category_name": "加工水果"
              }
            ]
          },
          {
            "category_id": "0402",
            "category_name": "蔬菜",
            "includes": [
              {
                "category_id": "040201",
                "category_name": "新鲜蔬菜"
              },
              {
                "category_id": "040202",
                "category_name": "加工蔬菜"
              },
              {
                "category_id": "040203",
                "category_name": "根茎类"
              },
              {
                "category_id": "040204",
                "category_name": "叶菜类"
              }
            ]
          },
          {
            "category_id": "0403",
            "category_name": "食用菌类",
            "includes": [
              {
                "category_id": "040301",
                "category_name": "新鲜食用菌和藻类"
              },
              {
                "category_id": "040302",
                "category_name": "加工食用菌和藻类"
              }
            ]
          },
          {
            "category_id": "0404",
            "category_name": "豆类制品",
            "includes": [
              {
                "category_id": "040401",
                "category_name": "非发酵豆制品"
              },
              {
                "category_id": "040402",
                "category_name": "发酵豆制品"
              },
              {
                "category_id": "040403",
                "category_name": "其他豆制品"
              }
            ]
          },
          {
            "category_id": "0405",
            "category_name": "坚果和籽类",
            "includes": [
              {
                "category_id": "040501",
                "category_name": "新鲜坚果与籽类"
              },
              {
                "category_id": "040502",
                "category_name": "加工坚果与籽类"
              }
            ]
          }
        ]
      },
      {
        "category_id": "05",
        "category_name": "巧克力和糖果类",
        "includes": [
          {
            "category_id": "0501",
            "category_name": "巧克力",
            "includes": [
              {
                "category_id": "050101",
                "category_name": "可可制品"
              },
              {
                "category_id": "050102",
                "category_name": "巧克力类制品"
              },
              {
                "category_id": "050103",
                "category_name": "代可可脂巧克力类"
              }
            ]
          },
          {
            "category_id": "0502",
            "category_name": "糖果",
            "includes": [
              {
                "category_id": "050201",
                "category_name": "口香糖类"
              },
              {
                "category_id": "050202",
                "category_name": "硬质夹心糖类"
              }
            ]
          },
          {
            "category_id": "0503",
            "category_name": "糖果和巧克力制品包衣",
            "includes": []
          },
          {
            "category_id": "0504",
            "category_name": "装饰糖果类",
            "includes": []
          }
        ]
      },
      {
        "category_id": "06",
        "category_name": "粮食和粮食制品",
        "includes": [
          {
            "category_id": "0601",
            "category_name": "原粮",
            "includes": []
          },
          {
            "category_id": "0602",
            "category_name": "大米及其制品",
            "includes": [
              {
                "category_id": "060201",
                "category_name": "大米"
              },
              {
                "category_id": "060202",
                "category_name": "大米制品"
              },
              {
                "category_id": "060203",
                "category_name": "米粉"
              },
              {
                "category_id": "060204",
                "category_name": "米粉制品"
              }
            ]
          },
          {
            "category_id": "0603",
            "category_name": "小麦粉及其制品",
            "includes": [
              {
                "category_id": "060301",
                "category_name": "小麦粉"
              },
              {
                "category_id": "060302",
                "category_name": "小麦粉制品"
              }
            ]
          },
          {
            "category_id": "0604",
            "category_name": "杂粮粉及其制品",
            "includes": [
              {
                "category_id": "060401",
                "category_name": "杂粮粉"
              },
              {
                "category_id": "060402",
                "category_name": "杂粮制品"
              }
            ]
          },
          {
            "category_id": "0605",
            "category_name": "淀粉及淀粉类制品",
            "includes": [
              {
                "category_id": "060501",
                "category_name": "食用淀粉"
              },
              {
                "category_id": "060502",
                "category_name": "淀粉制品"
              }
            ]
          },
          {
            "category_id": "0606",
            "category_name": "即食谷物",
            "includes": []
          },
          {
            "category_id": "0607",
            "category_name": "方便米面制品",
            "includes": []
          },
          {
            "category_id": "0608",
            "category_name": "冷冻米面制品",
            "includes": []
          },
          {
            "category_id": "0609",
            "category_name": "谷类和淀粉类甜品",
            "includes": []
          },
          {
            "category_id": "0610",
            "category_name": "粮食制品馅料",
            "includes": []
          }
        ]
      },
      {
        "category_id": "07",
        "category_name": "焙烤食品",
        "includes": [
          {
            "category_id": "0701",
            "category_name": "面包",
            "includes": []
          },
          {
            "category_id": "0702",
            "category_name": "糕点",
            "includes": [
              {
                "category_id": "070201",
                "category_name": "中式糕点"
              },
              {
                "category_id": "070202",
                "category_name": "西式糕点"
              },
              {
                "category_id": "070203",
                "category_name": "月饼"
              },
              {
                "category_id": "070204",
                "category_name": "糕点彩装"
              }
            ]
          },
          {
            "category_id": "0703",
            "category_name": "饼干",
            "includes": [
              {
                "category_id": "070301",
                "category_name": "夹心及装饰类饼干"
              },
              {
                "category_id": "070302",
                "category_name": "威化饼干"
              },
              {
                "category_id": "070303",
                "category_name": "蛋卷"
              },
              {
                "category_id": "070304",
                "category_name": "其他饼干"
              }
            ]
          },
          {
            "category_id": "0704",
            "category_name": "焙烤食品馅料及表面用挂浆",
            "includes": []
          },
          {
            "category_id": "0705",
            "category_name": "其他焙烤食品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "08",
        "category_name": "肉及肉制品",
        "includes": [
          {
            "category_id": "0801",
            "category_name": "生、鲜肉",
            "includes": [
              {
                "category_id": "080101",
                "category_name": "生鲜肉"
              },
              {
                "category_id": "080102",
                "category_name": "冷却肉"
              },
              {
                "category_id": "080103",
                "category_name": "冻肉"
              }
            ]
          },
          {
            "category_id": "0802",
            "category_name": "预制肉制品",
            "includes": [
              {
                "category_id": "080201",
                "category_name": "调理肉制品"
              },
              {
                "category_id": "080202",
                "category_name": "腌腊肉制品类"
              }
            ]
          },
          {
            "category_id": "0803",
            "category_name": "熟肉制品",
            "includes": [
              {
                "category_id": "080301",
                "category_name": "酱卤肉制品类"
              },
              {
                "category_id": "080302",
                "category_name": "熏、烧、烤肉类"
              },
              {
                "category_id": "080303",
                "category_name": "油炸肉类"
              },
              {
                "category_id": "080304",
                "category_name": "西式火腿类"
              },
              {
                "category_id": "080305",
                "category_name": "肉灌肠类"
              },
              {
                "category_id": "080306",
                "category_name": "发酵肉制品类"
              },
              {
                "category_id": "080307",
                "category_name": "熟肉干制品"
              },
              {
                "category_id": "080308",
                "category_name": "肉罐头类"
              },
              {
                "category_id": "080309",
                "category_name": "可食用动物肠衣类"
              },
              {
                "category_id": "080310",
                "category_name": "其他肉及肉制品"
              }
            ]
          }
        ]
      },
      {
        "category_id": "09",
        "category_name": "水产及其制品",
        "includes": [
          {
            "category_id": "0901",
            "category_name": "鲜水产",
            "includes": [
              {
                "category_id": "090101",
                "category_name": "鲐鱼"
              },
              {
                "category_id": "090102",
                "category_name": "其他"
              }
            ]
          },
          {
            "category_id": "0902",
            "category_name": "冷冻水产品及其制品",
            "includes": [
              {
                "category_id": "090201",
                "category_name": "冷冻制品"
              },
              {
                "category_id": "090202",
                "category_name": "冷冻挂桨制品"
              },
              {
                "category_id": "090203",
                "category_name": "冷冻鱼糜制品"
              }
            ]
          },
          {
            "category_id": "0903",
            "category_name": "预制水产品",
            "includes": [
              {
                "category_id": "090301",
                "category_name": "醋渍水产品"
              },
              {
                "category_id": "090302",
                "category_name": "腌制水产品"
              },
              {
                "category_id": "090303",
                "category_name": "鱼子制品"
              },
              {
                "category_id": "090304",
                "category_name": "干制水产品"
              },
              {
                "category_id": "090305",
                "category_name": "水发水产品"
              },
              {
                "category_id": "090306",
                "category_name": "其他预制水产品"
              }
            ]
          },
          {
            "category_id": "0904",
            "category_name": "熟制水产品",
            "includes": [
              {
                "category_id": "090401",
                "category_name": "熟干水产品"
              },
              {
                "category_id": "090402",
                "category_name": "烹制水产品"
              },
              {
                "category_id": "090403",
                "category_name": "熏、烤水产品"
              },
              {
                "category_id": "090404",
                "category_name": "发酵水产品"
              }
            ]
          },
          {
            "category_id": "0905",
            "category_name": "水产品罐头",
            "includes": []
          },
          {
            "category_id": "0906",
            "category_name": "其他水产品及其制品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "10",
        "category_name": "蛋及蛋制品",
        "includes": [
          {
            "category_id": "1001",
            "category_name": "鲜蛋",
            "includes": []
          },
          {
            "category_id": "1002",
            "category_name": "再制蛋",
            "includes": [
              {
                "category_id": "100201",
                "category_name": "卤蛋"
              },
              {
                "category_id": "100202",
                "category_name": "糟蛋"
              },
              {
                "category_id": "100203",
                "category_name": "皮蛋"
              },
              {
                "category_id": "100204",
                "category_name": "咸蛋"
              },
              {
                "category_id": "100205",
                "category_name": "其他再制蛋"
              }
            ]
          },
          {
            "category_id": "1003",
            "category_name": "蛋制品",
            "includes": [
              {
                "category_id": "100301",
                "category_name": "脱水蛋制品"
              },
              {
                "category_id": "100302",
                "category_name": "热凝固蛋制品"
              },
              {
                "category_id": "100303",
                "category_name": "冷冻蛋制品"
              },
              {
                "category_id": "100304",
                "category_name": "液体蛋"
              }
            ]
          },
          {
            "category_id": "1004",
            "category_name": "其他蛋制品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "11",
        "category_name": "甜味料",
        "includes": [
          {
            "category_id": "1101",
            "category_name": "食糖",
            "includes": [
              {
                "category_id": "110101",
                "category_name": "白糖及白糖制品"
              },
              {
                "category_id": "110102",
                "category_name": "其他糖和糖浆"
              }
            ]
          },
          {
            "category_id": "1102",
            "category_name": "淀粉糖",
            "includes": []
          },
          {
            "category_id": "1103",
            "category_name": "蜂蜜及花粉",
            "includes": [
              {
                "category_id": "110301",
                "category_name": "蜂蜜"
              },
              {
                "category_id": "110302",
                "category_name": "花粉"
              }
            ]
          },
          {
            "category_id": "1104",
            "category_name": "餐桌甜味料",
            "includes": []
          },
          {
            "category_id": "1105",
            "category_name": "调味糖浆",
            "includes": [
              {
                "category_id": "110501",
                "category_name": "水果调味糖浆"
              },
              {
                "category_id": "110502",
                "category_name": "其他调味糖浆"
              }
            ]
          },
          {
            "category_id": "1106",
            "category_name": "其他甜味料",
            "includes": []
          }
        ]
      },
      {
        "category_id": "12",
        "category_name": "调味品",
        "includes": [
          {
            "category_id": "1201",
            "category_name": "盐及代盐制品",
            "includes": []
          },
          {
            "category_id": "1202",
            "category_name": "鲜味剂和助鲜剂",
            "includes": []
          },
          {
            "category_id": "1203",
            "category_name": "醋",
            "includes": [
              {
                "category_id": "120301",
                "category_name": "酿造食醋"
              },
              {
                "category_id": "120302",
                "category_name": "配制食醋"
              }
            ]
          },
          {
            "category_id": "1204",
            "category_name": "酱油",
            "includes": [
              {
                "category_id": "120401",
                "category_name": "酿造酱油"
              },
              {
                "category_id": "120402",
                "category_name": "配制酱油"
              }
            ]
          },
          {
            "category_id": "1205",
            "category_name": "酱及酱制品",
            "includes": [
              {
                "category_id": "120501",
                "category_name": "酿造酱"
              },
              {
                "category_id": "120502",
                "category_name": "配制酱"
              }
            ]
          },
          {
            "category_id": "1207",
            "category_name": "料酒及制品",
            "includes": []
          },
          {
            "category_id": "1209",
            "category_name": "香辛料类",
            "includes": []
          },
          {
            "category_id": "1210",
            "category_name": "复合调味料",
            "includes": []
          },
          {
            "category_id": "1211",
            "category_name": "其他调味料",
            "includes": []
          }
        ]
      },
      {
        "category_id": "13",
        "category_name": "特殊膳食用食品",
        "includes": [
          {
            "category_id": "1301",
            "category_name": "婴幼儿配方食品",
            "includes": [
              {
                "category_id": "130101",
                "category_name": "婴儿配方食品"
              },
              {
                "category_id": "130102",
                "category_name": "婴幼儿配方食品"
              },
              {
                "category_id": "130103",
                "category_name": "特殊医学用途类"
              }
            ]
          },
          {
            "category_id": "1302",
            "category_name": "婴幼儿辅助食品",
            "includes": [
              {
                "category_id": "130201",
                "category_name": "婴幼儿谷类辅助食品"
              },
              {
                "category_id": "130202",
                "category_name": "婴幼儿罐装辅助食品"
              }
            ]
          },
          {
            "category_id": "1303",
            "category_name": "特殊医学用途配方食品",
            "includes": []
          },
          {
            "category_id": "1304",
            "category_name": "低能量配方食品",
            "includes": []
          },
          {
            "category_id": "1305",
            "category_name": "其他食品",
            "includes": []
          }
        ]
      },
      {
        "category_id": "14",
        "category_name": "饮料类",
        "includes": [
          {
            "category_id": "1401",
            "category_name": "包装饮用水类",
            "includes": [
              {
                "category_id": "140101",
                "category_name": "饮用天然矿泉水"
              },
              {
                "category_id": "140102",
                "category_name": "饮用纯净水"
              },
              {
                "category_id": "140103",
                "category_name": "其他饮用水"
              }
            ]
          },
          {
            "category_id": "1402",
            "category_name": "果蔬汁类",
            "includes": [
              {
                "category_id": "140201",
                "category_name": "果蔬汁"
              },
              {
                "category_id": "140202",
                "category_name": "浓缩果蔬汁"
              },
              {
                "category_id": "140203",
                "category_name": "果蔬汁"
              }
            ]
          },
          {
            "category_id": "1403",
            "category_name": "蛋白饮料类",
            "includes": [
              {
                "category_id": "140301",
                "category_name": "含乳饮料"
              },
              {
                "category_id": "140302",
                "category_name": "植物蛋白饮料"
              },
              {
                "category_id": "140303",
                "category_name": "复合蛋白饮料"
              }
            ]
          },
          {
            "category_id": "1404",
            "category_name": "水基调味饮料类",
            "includes": [
              {
                "category_id": "140401",
                "category_name": "碳酸饮料"
              },
              {
                "category_id": "140402",
                "category_name": "非碳酸饮料"
              }
            ]
          },
          {
            "category_id": "1405",
            "category_name": "茶、咖啡、植物饮料类",
            "includes": [
              {
                "category_id": "140501",
                "category_name": "茶饮料类"
              },
              {
                "category_id": "140502",
                "category_name": "咖啡饮料类"
              },
              {
                "category_id": "140503",
                "category_name": "植物饮料类"
              }
            ]
          },
          {
            "category_id": "1406",
            "category_name": "固体饮料类",
            "includes": [
              {
                "category_id": "140601",
                "category_name": "果香型固体饮料"
              },
              {
                "category_id": "140602",
                "category_name": "蛋白型固体饮料"
              },
              {
                "category_id": "140603",
                "category_name": "速溶咖啡"
              },
              {
                "category_id": "140604",
                "category_name": "其他固体饮料"
              }
            ]
          },
          {
            "category_id": "1407",
            "category_name": "生活饮用水",
            "includes": []
          },
          {
            "category_id": "1408",
            "category_name": "其他饮料类",
            "includes": []
          }
        ]
      },
      {
        "category_id": "15",
        "category_name": "酒类",
        "includes": [
          {
            "category_id": "1501",
            "category_name": "蒸馏酒",
            "includes": [
              {
                "category_id": "150101",
                "category_name": "白酒"
              },
              {
                "category_id": "150102",
                "category_name": "调香蒸馏酒"
              },
              {
                "category_id": "150103",
                "category_name": "白兰地"
              },
              {
                "category_id": "150104",
                "category_name": "威士忌"
              },
              {
                "category_id": "150105",
                "category_name": "伏特加"
              },
              {
                "category_id": "150106",
                "category_name": "朗姆酒"
              },
              {
                "category_id": "150107",
                "category_name": "其他蒸馏酒"
              }
            ]
          },
          {
            "category_id": "1502",
            "category_name": "配制酒",
            "includes": []
          },
          {
            "category_id": "1503",
            "category_name": "发酵酒",
            "includes": [
              {
                "category_id": "150301",
                "category_name": "葡萄酒"
              },
              {
                "category_id": "150302",
                "category_name": "黄酒"
              },
              {
                "category_id": "150303",
                "category_name": "果酒"
              },
              {
                "category_id": "150304",
                "category_name": "蜂蜜酒"
              },
              {
                "category_id": "150305",
                "category_name": "啤酒和麦芽饮料"
              },
              {
                "category_id": "150306",
                "category_name": "其他发酵酒类"
              }
            ]
          }
        ]
      },
      {
        "category_id": "16",
        "category_name": "其他类",
        "includes": [
          {
            "category_id": "1601",
            "category_name": "果冻",
            "includes": []
          },
          {
            "category_id": "1602",
            "category_name": "茶叶、咖啡",
            "includes": []
          },
          {
            "category_id": "1603",
            "category_name": "胶原蛋白肠衣",
            "includes": []
          },
          {
            "category_id": "1604",
            "category_name": "酵母及其制品",
            "includes": [
              {
                "category_id": "160401",
                "category_name": "干酵母"
              },
              {
                "category_id": "160402",
                "category_name": "其他酵母及其制品"
              }
            ]
          },
          {
            "category_id": "1606",
            "category_name": "膨化食品",
            "includes": []
          },
          {
            "category_id": "1607",
            "category_name": "小吃",
            "includes": []
          },
          {
            "category_id": "1608",
            "category_name": "油炸食品",
            "includes": []
          },
          {
            "category_id": "1609",
            "category_name": "其他",
            "includes": []
          }
        ]
      }
    ];

    $scope.firstAssort  = {};
    $scope.secondAssort = {};
    $scope.thirdAssort  = {};

    $scope.clearSelect = function (a) {
      switch (a) {
        case 'first' :
          $scope.secondAssort = {};
          $scope.thirdAssort  = {};
          break;
        case 'second' :
          $scope.thirdAssort = {};
          break;
        default:
          break;
      }
    };

    $scope.isSecondAssort = function() {
      return $routeParams.tabs !== "second" && $routeParams.tabs !== "third";
    };
    $scope.isThirdAssort = function() {
      return $routeParams.tabs !== "third";
    };


    $scope.getData = function () {
      var categoryId = ($scope.thirdAssort && $scope.thirdAssort.category_id)
        || ($scope.secondAssort && $scope.secondAssort.category_id)
        || ($scope.firstAssort && $scope.firstAssort.category_id);


      // TODO： 拼字符串
      $http.get('/api/things').success(function (relationships) {
        $scope.relationships = relationships;
      }).error(function () {
        $scope.relationships = 'error';
      });
    };


    $scope.$on('getNodeInfo', function (e, d) {
      $scope.data = d;
    });

  }]);
