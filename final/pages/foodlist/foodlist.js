// pages/foodlist/foodlist.js
var app=getApp()
const regeneratorRuntime = require('../../utils/regenrator-runtime/runtime')
const promise=require('../../utils/promise/promise')
const promiseauto=require('../../utils/promise/primise-min')
const db = wx.cloud.database()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tit:'搜索查询',
    tit2:'列表查询',
    tit3:'输入添加',
   subcal:0.0,//提交的摄入热量
    input1:"",
    showvalue1:'',
    selectedfoodname:'当前选择的食物',
    foodcal:'',
    foodgram:'',
    showvalue:'',
    Bakcal:[465
      , 221
      , 374
      , 258
      , 497
      , 203
      , 227
      , 340
      , 276
      , 255
      , 495
      , 240
      , 254
      , 426
      , 213
      , 235
      , 407
      , 223
      , 383
      , 412
      , 346
      , 285
      , 340
      , 414
      , 349
      , 222
      , 296
      , 265
      , 396
      , 355
      , 225
      , 316
      , 194
      , 361
      , 285
      , 417
      , 270
      , 321
      , 337
      , 218
      , 243
      , 376
      , 245
      , 227
      , 260
      , 295
      , 204
      , 229
      , 412
      , 270
      , 402
      , 223
      , 407
      , 344
      , 362
      , 269
      , 501
      , 527
      , 366
      , 457
      , 518
      , 508
      , 313
      , 289
      , 243
      , 299
      , 307
      , 551
      , 278
      , 371
      , 273
      , 286
      , 236
      , 277
      , 263
      , 274
      , 196
      , 360
      , 293
      , 279
      , 218
      , 333
      , 362
      , 412
      , 285
      , 291
      , 391
      , 467
      , 291
      , 105
      , 53
      , 97
      , 51
      , 383
      , 258
      , 488
      , 270
      , 447
      , 264
      , 270
     
      , 293
      , 227
      , 484
      , 333
      , 316
      , 506
      , 313
      , 371
      , 395
      , 312
      , 408
      , 403
      , 389
      , 473
      , 371
      , 423
      , 434
      , 274
      , 393
      , 531
      , 235
      , 422
      , 293
      , 283
      , 391
      , 404
      , 326
      , 235
      , 391
      , 387
      , 235
      , 275
      , 469
      , 503
      , 418
      , 432
      , 316
      , 393
      , 467
      , 365
      , 418
      , 392
      , 438
      , 394
      , 371
      , 391
      , 316
      , 305
      , 391
      , 393
      , 395
      , 390
      , 272
      , 366
      , 376
      , 198
      , 388
      , 466
      , 236
      , 369
      , 407
      , 442
      , 208
      , 367
      , 410
      , 393
      , 203
      , 413
      , 370
      , 233
      , 431
      , 405
      , 430
      , 497
      , 400
      , 406
      , 407
      , 407
      , 460
      , 390
      , 420
      , 468
      , 400
      , 403
      , 500
      , 435
      , 408
      , 421
      , 406
      , 400
      , 428
      , 480
      , 400
      , 411
      , 338
      , 472
      , 348
      , 435
      , 461
      , 381
     
      , 390
      , 487
      , 424
      , 431
      , 388
      , 407
      , 548
      , 241
      , 465
      , 232
      , 407
      , 476
      , 441
      , 307
      , 445
      , 501
      , 239
      , 418
      , 273
      , 391
      , 241
      , 273
      , 475
      , 255
      , 287
      , 305
      , 521
      , 377
      , 445
      , 330
      , 367
      , 484
      , 424
      , 418
      , 490
      , 467
      , 413
      , 234
      , 409
      , 289
      , 468
      , 374
      , 317
      , 482
      , 309
      , 416
      , 492
      , 379
      , 298
      , 474
      , 290
      , 390
      , 279
      , 422
      , 444
      , 433
      , 484
      , 506
      , 277
      , 450
      , 294
      , 278
      , 496
      , 503
      , 423
      , 441
      , 293
      , 430
      , 260
      , 366
      , 406
      , 334
      , 365
      , 258
      , 428
      , 250
      , 257
      , 203
      , 390
      , 403
      , 372
      , 348
      , 421
      , 360
      , 446
      , 417
      , 421
      , 288
      , 208
      , 412
      , 305
      , 427
      , 405
      , 436
      , 430
      , 365
      , 255
      , 474
      , 494
      , 266
     
      , 273
      , 237
      , 260
      , 276
      , 371
      , 262
      , 232
      , 393
      , 418
      , 268
      , 210
      , 316
      , 270
      , 251
      , 266
      , 452
      , 298
      , 260
      , 325
      , 275
      , 310
      , 399
      , 312
      , 304
      , 457
      , 267
      , 371
      , 237
      , 443
      , 222
      , 325
      , 468
      , 275
      , 390
      , 275
      , 502
      , 403
      , 421
      , 481],
      Bakm:[14.2
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 160
        , 180
        , 28.35
        , 173
        , 28.35
        , 154
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28
        , 43
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 17
        , 4.6
        , 5
        , 4.6
        , 28.35
        , 3
        , 28.35
        , 4.6
        , 28.35
        , 28.35
        , 28.35
  
        , 28.35
        , 28.35
        , 244
        , 28.35
        , 28.35
        , 223
        , 28.35
        , 28.35
        , 52
        , 28.35
        , 52
        , 28.35
        , 30
        , 14.2
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 15
        , 129
        , 28.35
        , 50
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 52
        , 52
        , 28.35
        , 28.35
        , 194
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 52
        , 28.35
        , 28.35
        , 28.35
        , 52
        , 50
        , 52
        , 28.35
        , 52
        , 28.35
        , 28.35
        , 52
        , 52
        , 52
        , 52
        , 78
        , 52
        , 50
        , 35
        , 54
        , 24
        , 35
        , 52
        , 62
        , 24
        , 35
        , 52
        , 62
        , 25
        , 35
        , 62
        , 116
        , 116
        , 24
        , 25
        , 26
        , 24
        , 25
        , 26
        , 25
        , 28
        , 22
        , 25
        , 28
        , 20
        , 25
        , 26
        , 24
        , 28
        , 26
        , 25
        , 26
        , 25
        , 26
        , 21
        , 25
        , 24
        , 20
        , 28
        , 31
        , 26
        , 28
        , 28
    
        , 67
        , 24
        , 32
        , 28
        , 41
        , 31
        , 57
        , 62
        , 31
        , 57
        , 28
        , 11
        , 30
        , 34
        , 42
        , 183
        , 28.35
        , 40
        , 43
        , 55
        , 59
        , 39
        , 31
        , 71
        , 51
        , 16
        , 202
        , 28
        , 229
        , 44
        , 63
        , 182
        , 28
        , 39
        , 39
        , 42
        , 43
        , 64
        , 51
        , 35
        , 225
        , 55
        , 61
        , 28
        , 28
        , 29
        , 3.3
        , 86
        , 32
        , 12.3
        , 131
        , 55
        , 70
        , 32
        , 29
        , 30
        , 31
        , 198
        , 36
        , 28.35
        , 24
        , 28.35
        , 14.2
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 120
        , 28.35
        , 26
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 24
        , 28.35
        , 46
        , 28.35
        , 28
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 26
        , 12.2
        , 210
        , 28.35
    
        , 26
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 28
        , 28.35
        , 28.35
        , 28.35
        , 4
        , 28.35
        , 28
        , 28.35
        , 28.35
        , 28.35
        , 142
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 28.35
        , 28.35
        , 28.35
        , 14.2
        , 28.35
        , 14.2
        , 28.35
        , 14.2
        , 28.35],
   Bak2:["Croutons, seasoned"
   , "English muffins, whole-wheat, toasted"
   , "Danish pastry, cheese"
   , "Cream puffs, prepared from recipe, shell, with custard filling"
   , "Crackers, wheat, sandwich, with cheese filling"
   , "English muffins, whole-wheat"
   , "English muffins, plain, enriched, with ca prop (includes sourdough)"
   , "Pancakes, buckwheat, dry mix, incomplete"
   , "English muffins, raisin-cinnamon, toasted (includes apple-cinnamon)"
   , "English muffins, mixed-grain, toasted (includes granola)"
   , "Crackers, wheat, sandwich, with peanut butter filling"
   , "English muffins, raisin-cinnamon (includes apple-cinnamon)"
   , "Croissants, apple"
   , "Doughnuts, cake-type, plain, sugared or glazed"
   , "French toast, frozen, ready-to-heat"
   , "English muffins, mixed-grain (includes granola)"
   , "Croutons, plain"
   , "English muffins, wheat"
   , "Cracker meal"
   , "Doughnuts, french crullers, glazed"
   , "Muffins, corn, toaster-type"
   , "Muffins, blueberry, prepared from recipe, made with low fat (2%) milk"
   , "Doughnuts, yeast-leavened, with jelly filling"
   , "Croissants, cheese"
   , "Pancakes, special dietary, dry mix"
   , "Pancakes, blueberry, prepared from recipe"
   , "Muffins, plain, prepared from recipe, made with low fat (2%) milk"
   , "Pie, apple, prepared from recipe"
   , "Muffins, wheat bran, dry mix"
   , "Pancakes, plain, dry mix, incomplete (includes buttermilk)"
   , "Pancakes plain, frozen, ready-to-heat (includes buttermilk)"
   , "Muffins, corn, prepared from recipe, made with low fat (2%) milk"
   , "Pancakes, plain, dry mix, complete, prepared"
   , "Doughnuts, yeast-leavened, with creme filling"
   , "Pie, lemon meringue, prepared from recipe"
   , "Ice cream cones, cake or wafer-type"
   , "English muffins, plain, toasted, enriched, with calcium propionate (includes sourdough)"
   , "Muffins, corn, dry mix, prepared"
   , "Hush puppies, prepared from recipe"
   , "Pancakes, plain, dry mix, incomplete, prepared"
   , "English muffins, wheat, toasted"
   , "Pancakes, plain, dry mix, complete (includes buttermilk)"
   , "Pie, blueberry, prepared from recipe"
   , "Pancakes, plain, prepared from recipe"
   , "Pie, chocolate mousse, prepared from mix, no-bake type"
   , "Muffins, wheat bran, toaster-type with raisins"
   , "Pie, pumpkin, prepared from recipe"
   , "French toast, prepared from recipe, made with low fat (2%) milk"
   , "Pie, pecan, prepared from recipe"
   , "Pie, cherry, prepared from recipe"
   , "Ice cream cones, sugar, rolled-type"
   , "Pie, peach"
   , "Pie, pecan, commercially prepared"
   , "Pancakes, whole-wheat, dry mix, incomplete"
   , "Cream puffs, prepared from recipe, shell (includes eclair)"
   , "Pie, banana cream, prepared from recipe"
   , "Pie crust, standard-type, dry mix, prepared, baked"
   , "Pie crust, standard-type, prepared from recipe, baked"
   , "Muffins, blueberry, dry mix"
   , "Pie crust, standard-type, frozen, ready-to-bake, enriched"
   , "Pie crust, standard-type, dry mix"
   , "Pie crust, standard-type, frozen, ready-to-bake, enriched, baked"
   , "Muffins, blueberry, toaster-type"
   , "Pie, mince, prepared from recipe"
   , "Pie, pumpkin, commercially prepared"
   , "Phyllo dough"
   , "Rolls, dinner, egg"
   , "Puff pastry, frozen, ready-to-bake"
   , "Pie, vanilla cream, prepared from recipe"
   , "Popovers, dry mix, enriched"
   , "Rolls, dinner, wheat"
   , "Rolls, dinner, rye"
   , "Rolls, dinner, oat bran"
   , "Rolls, french"
   , "Rolls, hamburger or hotdog, mixed-grain"
   , "Strudel, apple"
   , "Rolls, hamburger or hotdog, reduced-calorie"
   , "Sweet rolls, cheese"
   , "Rolls, hard (includes kaiser)"
   , "Rolls, hamburger or hotdog, plain"
   , "Tortillas, ready-to-bake or -fry, corn"
   , "Sweet rolls, cinnamon, refrigerated dough with frosting"
   , "Sweet rolls, cinnamon, refrigerated dough with frosting, baked"
   , "Toaster pastries, brown-sugar-cinnamon"
   , "Waffles, plain, frozen, ready-to-heat"
   , "Wonton wrappers (includes egg roll wrappers)"
   , "Toaster pastries, fruit (includes apple, blueberry, cherry, strawberry)"
   , "Taco shells, baked"
   , "Waffles, plain, prepared from recipe"
   , "Leavening agents, yeast, baker's, compressed"
   , "Leavening agents, baking powder, double-acting, sodium aluminum sulfate"
   , "Leavening agents, baking powder, low-sodium"
   , "Leavening agents, baking powder, double-acting, straight phosphate"
   , "Bread crumbs, dry, grated, seasoned"
   , "Leavening agents, cream of tartar"
   , "Cookies, chocolate chip, prepared from recipe, made with butter"
   , "Leavening agents, baking soda"
   , "Cookies, oatmeal, prepared from recipe, without raisins"
   , "Bread, rice bran, toasted"
   , "Bread, protein, toasted (includes gluten)"
   
   , "Bread, wheat germ, toasted"
   , "Pancakes, buttermilk, prepared from recipe"
   , "Pie crust, cookie-type, prepared from recipe, graham cracker, chilled"
   , "Muffins, blueberry, toaster-type, toasted"
   , "Rolls, dinner, plain, prepared from recipe, made with low fat (2%) milk"
   , "Pie crust, cookie-type, prepared from recipe, chocolate wafer, chilled"
   , "Muffins, wheat bran, toaster-type with raisins, toasted"
   , "Danish pastry, lemon, unenriched"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Apple cinnamon"
   , "Waffles, plain, frozen, ready -to-heat, toasted"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Blueberry"
   , "Doughnuts, yeast-leavened, glazed, unenriched (includes honey buns)"
   , "Cake, pound, commercially prepared, other than all butter, unenriched"
   , "Crackers, wheat, low salt"
   , "Popovers, dry mix, unenriched"
   , "Cake, white, dry mix, pudding-type, unenriched"
   , "Crackers, saltines, unsalted tops (includes oyster, soda, soup)"
   , "Bread, raisin, unenriched"
   , "Crackers, saltines, fat-free, low-sodium"
   , "Pie crust, cookie-type, prepared from recipe, vanilla wafer, chilled"
   , "English muffins, plain, unenriched, with calcium propionate (includes sourdough)"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted brown sugar cinnamon"
   , "Bread, white, commercially prepared, toasted, low sodium no salt"
   , "Cake, pound, commercially prepared, fat-free"
   , "Crackers, matzo, egg and onion"
   , "Cake, yellow, dry mix, light"
   , "Cookies, oatmeal, commercially prepared, fat-free"
   , "English muffins, plain, unenriched, without calcium propionate (includes sourdough)"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted grape"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted chocolate fudge"
   , "English muffins, plain, enriched, without calcium propionate(includes sourdough)"
   , "Bread, pita, white, unenriched"
   , "Pie crust, standard-type, prepared from recipe, unbaked"
   , "Crackers, cheese, low sodium"
   , "Bread, cornbread, dry mix, unenriched (includes corn muffin mix)"
   , "Cake, yellow, dry mix, regular, unenriched"
   , "Pie, fried pies, lemon"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Cherry"
   , "Cookies, butter, commercially prepared, unenriched"
   , "Cookies, ladyfingers, without lemon juice and rind"
   , "Coffeecake, cinnamon with crumb topping, commercially prepared, unenriched"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, S'mores"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Brown sugar cinnamon"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Strawberry"
   , "Danish pastry, raspberry, unenriched"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted chocolate vanilla creme"
   , "Pie, fried pies, cherry"
   , "Cake, snack cakes, cupcakes, chocolate, with frosting, low-fat"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted blueberry"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted cherry"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted raspberry"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted strawberry"
   , "KELLOGG, KELLOGG'S EGGO, Banana Bread Waffles"
   , "KELLOGG, KELLOGG'S LOW FAT POP TARTS, Frosted chocolate fudge"
   , "KELLOGG, KELLOGG'S LOW FAT POP TARTS, Frosted brown sugar cinnamon"
   , "KELLOGG'S Eggo Golden Oat Waffles"
   , "Toaster Pastries, KELLOGG, KELLOGG'S POP TARTS, Frosted wild berry"
   , "ARCHWAY Home Style Cookies, Sugar Free Rocky Road"
   , "KELLOGG'S Eggo Lowfat Homestyle Waffles"
   , "KELLOGG, KELLOGG'S LOW FAT POP TARTS, Strawberry"
   , "KELLOGG'S Pop-Tarts Pastry Swirls, Cheese Danish"
   , "ARCHWAY Home Style Cookies, Sugar Free Oatmeal"
   , "KELLOGG'S Eggo Lowfat Blueberry Nutri-Grain Waffles"
   , "KELLOGG, KELLOGG'S LOW FAT POP TARTS, Frosted strawberry"
   , "KELLOGG'S Pop-Tarts Pastry Swirls, Strawberry Danish"
   , "ARCHWAY Home Style Cookies, Apple Filled Oatmeal"
   , "KELLOGG'S Eggo Lowfat Nutri-Grain Waffles"
   , "KELLOGG'S Pop-Tarts Pastry Swirls, Apple Cinnamon Danish"
   , "KELLOGG, KELLOG'S NUTRI-GRAIN CEREAL BARS, Mixed Berry"
   , "KELLOGG, KELLOGG'S EGGO, Buttermilk Pancake"
   , "ARCHWAY Home Style Cookies, Dutch Cocoa"
   , "ARCHWAY Home Style Cookies, Cherry Filled"
   , "ARCHWAY Home Style Cookies, Frosty Lemon"
   , "ARCHWAY Home Style Cookies, Chocolate Chip Ice Box"
   , "ARCHWAY Home Style Cookies, Apricot Filled"
   , "ARCHWAY Home Style Cookies, Old Fashioned Molasses"
   , "ARCHWAY Home Style Cookies, Chocolate Chip Drop"
   , "ARCHWAY Home Style Cookies, Dark Molasses"
   , "ARCHWAY Home Style Cookies, Coconut Macaroon"
   , "ARCHWAY Home Style Cookies, Cookies Jar Hermits"
   , "ARCHWAY Home Style Cookies, Iced Molasses"
   , "ARCHWAY Home Style Cookies, Old Fashioned Windmill Cookies"
   , "ARCHWAY Home Style Cookies, Date Filled Oatmeal"
   , "ARCHWAY Home Style Cookies, Molasses"
   , "ARCHWAY Home Style Cookies, Pecan Ice Box"
   , "ARCHWAY Home Style Cookies, Iced Oatmeal"
   , "ARCHWAY Home Style Cookies, Fruit & Honey Bar"
   , "ARCHWAY Home Style Cookies, Oatmeal"
   , "ARCHWAY Home Style Cookies, Oatmeal Raisin"
   , "ARCHWAY Home Style Cookies, Raspberry Filled"
   , "ARCHWAY Home Style Cookies, Ruth's Oatmeal"
   , "ARCHWAY Home Style Cookies, Peanut Butter"
   , "ARCHWAY Home Style Cookies, Strawberry Filled"
   , "ARCHWAY Home Style Cookies, Sugar"
   , "ARCHWAY Home Style Cookies, Fat Free Devil's Food Cookie"
   , "ARCHWAY Home Style Cookies, Gourmet Oatmeal Pecan"
   , "ARCHWAY Home Style Cookies, Fat Free Oatmeal Raisin"
   , "ARCHWAY Home Style Cookies, Gourmet Apple'n Raisin"
   , "ARCHWAY Home Style Cookies, Gourmet Rocky Road"
   , "KRAFT, STOVE TOP Stuffing Mix Chicken Flavor"
  
   , "GEORGE WESTON BAKERIES, Brownberry Sage and Onion Stuffing Mix, dry"
   , "ARCHWAY Home Style Cookies, Sugar Free Chocolate Chip"
   , "ARCHWAY Home Style Cookies, Reduced Fat Ginger Snaps"
   , "ARCHWAY Home Style Cookies, Gourmet Ruth's Golden Oatmeal"
   , "MARTHA WHITE FOODS, Martha White's Buttermilk Biscuit Mix,dry"
   , "Artificial Blueberry Muffin Mix,dry"
   , "MCKEE BAKING, LITTLE DEBBIE NUTTY BARS, Wafers with Peanut Butter, Chocolate Covered"
   , "PILLSBURY, Crusty French Loaf, refrigerated dough"
   , "KEEBLER, KEEBLER Chocolate Graham SELECTS"
   , "GEORGE WESTON BAKERIES, Thomas English Muffins"
   , "MARTHA WHITE FOODS, Martha White's Chewy Fudge Brownie Mix,dry"
   , "NABISCO, NABISCO OREO CRUNCHIES, Cookie Crumb Topping"
   , "PILLSBURY, Traditional Fudge Brownie Mix, dry"
   , "PILLSBURY Golden Layer Buttermilk Biscuits, Artificial Flavor, refrigerated dough"
   , "Pan Dulce, LA RICURA, Salpora de Arroz con Azucar, cookie-like, contains wheat flour and rice flour"
   , "Pie Crust, Cookie-type, Graham Cracker, Ready Crust"
   , "Pancakes, plain, frozen, ready-to-heat, microwave (includes buttermilk)"
   , "CONTINENTAL MILLS, KRUSTEAZ Almond Poppyseed Muffin Mix, Artificially Flavored, dry"
   , "INTERSTATE BRANDS CORP, WONDER Hamburger Rolls"
   , "Toaster Pastries, fruit, frosted (include apples, blueberry, cherry, strawberry)"
   , "HEINZ, WEIGHT WATCHER, Chocolate Eclair, frozen"
   , "Waffles, buttermilk, frozen, ready-to-heat"
   , "KEEBLER, KEEBLER GOLDEN Vanilla Wafers, Artificially Flavored"
   , "Muffin, blueberry, commercially prepared, low-fat"
   , "MISSION FOODS, MISSION Flour Tortillas, Soft Taco, 8 inch"
   , "NABISCO, NABISCO SNACKWELL'S Fat Free Devil's Food Cookie Cakes"
   , "Pie crust, deep dish, frozen, baked, made with enriched flour"
   , "KRAFT FOODS, SHAKE 'N' BAKE ORIGINAL RECIPE, Coating for Pork, dry"
   , "Pie crust, refrigerated, regular, unbaked"
   , "PILLSBURY, Cinnamon Rolls with Icing, refrigerated dough"
   , "Bread, pan dulce, sweet yeast bread"
   , "Pie Crust, Cookie-type, Chocolate, Ready Crust"
   , "NABISCO, NABISCO GRAHAMS Crackers"
   , "Cake, pound, BIMBO Bakeries USA, Panque Casero, home baked style"
   , "Crackers, cheese, sandwich-type with cheese filling"
   , "Keikitos (muffins), Latino bakery item"
   , "GENERAL MILLS, BETTY CROCKER SUPERMOIST Yellow Cake Mix, dry"
   , "PILLSBURY, Buttermilk Biscuits, Artificial Flavor, refrigerated dough"
   , "Toaster pastries, fruit, toasted ( include apple, blueberry, cherry, strawberry)"
   , "Waffle, buttermilk, frozen, ready-to-heat, microwaved"
   , "Pie crust, deep dish, frozen, unbaked, made with enriched flour"
   , "Bread, salvadoran sweet cheese (quesadilla salvadorena)"
   , "PILLSBURY GRANDS, Buttermilk Biscuits, refrigerated dough"
   , "PILLSBURY, Chocolate Chip Cookies, refrigerated dough"
   , "Waffle, buttermilk, frozen, ready-to-heat, toasted"
   , "Crackers, whole-wheat, reduced fat"
   , "NABISCO, NABISCO RITZ Crackers"
   , "Pastry, Pastelitos de Guava (guava pastries)"
   , "Waffle, plain, frozen, ready-to-heat, microwave"
   , "Tostada shells, corn"
   , "Pie, Dutch Apple, Commercially Prepared"
   , "Bread, pound cake type, pan de torta salvadoran"
   , "Waffles, chocolate chip, frozen, ready-to-heat"
   , "Crackers, cream, LA MODERNA RIKIS CREAM CRACKERS"
   , "Crackers, wheat, reduced fat"
   , "Crackers, snack, GOYA CRACKERS"
   , "Crackers, cream, GAMESA SABROSAS"
   , "Pie crust, refrigerated, regular, baked"
   , "Rolls, pumpernickel"
   , "Cookies, oatmeal, commercially prepared, regular"
   , "Bagels, cinnamon-raisin, toasted"
   , "Bagels, egg"
   , "Crackers, cheese, sandwich-type with peanut butter filling"
   , "Crackers, cheese, regular"
   , "Cookies, graham crackers, plain or honey (includes cinnamon)"
   , "Cookies, vanilla wafers, lower fat"
   , "Bread, white, commercially prepared, toasted"
   , "Danish pastry, nut (includes almond, raisin nut, cinnamon nut)"
   , "Bread, cracked-wheat"
   , "Crackers, crispbread, rye"
   , "Croissants, butter"
   , "Crackers, rye, wafers, plain"
   , "Biscuits, plain or buttermilk, commercially baked"
   , "Bread, rye"
   , "Biscuits, plain or buttermilk, dry mix"
   , "Bread, pumpernickel"
   , "Bagels, plain, enriched, with calcium propionate (includes onion, poppy, sesame)"
   , "Bread, reduced-calorie, rye"
   , "Crackers, melba toast, plain"
   , "Danish pastry, cinnamon, enriched"
   , "Sweet rolls, cinnamon, commercially prepared with raisins"
   , "Cookies, fig bars"
   , "Crackers, saltines (includes oyster, soda, soup)"
   , "Doughnuts, cake-type, wheat, sugared or glazed"
   , "Cookies, animal crackers (includes arrowroot, tea biscuits)"
   , "Doughnuts, cake-type, chocolate, sugared or glazed"
   , "Cookies, marshmallow, chocolate-coated (includes marshmallow pies)"
   , "Bagels, plain, toasted, enriched, with calcium propionate (includes onion, poppy, sesame)"
   , "Pancakes, whole-wheat, dry mix, incomplete, prepared"
   , "Bread sticks, plain"
   , "Muffins, corn, commercially prepared"
   , "Crackers, whole-wheat"
   , "Cookies, brownies, commercially prepared"
   , "Cookies, sugar, refrigerated dough"
   , "Cookies, molasses"
   , "Cookies, ladyfingers, with lemon juice and rind"
   , "Bagels, oat bran"
   , "Cookies, chocolate chip, commercially prepared, regular, higher fat, enriched"
   , "Pie crust, cookie-type, prepared from recipe, graham cracker, baked"
   , "Bread, white, commercially prepared (includes soft bread crumbs)"
   
   , "Bagels, cinnamon-raisin"
   , "Pie, apple, commercially prepared, enriched flour"
   , "Pie, coconut custard, commercially prepared"
   , "Pie, coconut cream, prepared from mix, no-bake type"
   , "Danish pastry, fruit, enriched (includes apple, cinnamon, raisin, lemon, raspberry, strawberry)"
   , "Eclairs, custard-filled with chocolate glaze, prepared from recipe"
   , "Pie, blueberry, commercially prepared"
   , "Muffins, blueberry, commercially prepared (Includes mini-muffins)"
   , "Doughnuts, cake-type, plain (includes unsugared, old-fashioned)"
   , "Pie, lemon meringue, commercially prepared"
   , "Pie, egg custard, commercially prepared"
   , "Pie, fried pies, fruit"
   , "Muffins, oat bran"
   , "Pie, banana cream, prepared from mix, no-bake type"
   , "Rolls, dinner, whole-wheat"
   , "Doughnuts, cake-type, plain, chocolate-coated or frosted"
   , "Pie, coconut creme, commercially prepared"
   , "Pie, cherry, commercially prepared"
   , "Leavening agents, yeast, baker's, active dry"
   , "Bagels, plain, enriched, without calcium propionate (includes onion, poppy, sesame)"
   , "Rolls, dinner, plain, commercially prepared (includes brown-and-serve)"
   , "Doughnuts, yeast-leavened, glazed, enriched (includes honey buns)"
   , "Tortillas, ready-to-bake or -fry, flour"
   , "Pie, chocolate creme, commercially prepared"
   , "Pie crust, standard-type, frozen, ready-to-bake, unenriched"
   , "Bread, white, commercially prepared, low sodium no salt"
   , "Danish pastry, fruit, unenriched (includes apple, cinnamon, raisin, strawberry)"
   , "Pie, apple, commercially prepared, unenriched flour"
   , "Crackers, whole-wheat, low salt"
   , "Tortillas, ready-to-bake or -fry, corn, without added salt"
   , "Tortillas, ready-to-bake or -fry, flour, without added calcium"
   , "Taco shells, baked, without added salt"
   , "Bagels, plain, unenriched, without calcium propionate(includes onion, poppy, sesame)"
   , "Crackers, melba toast, plain, without salt"
   , "Bagels, plain, unenriched, with calcium propionate (includes onion, poppy, sesame)"
   , "Crackers, standard snack-type, regular, low salt"
   , "Danish pastry, cinnamon, unenriched"
   , "Crackers, saltines, low salt (includes oyster, soda, soup)"
   , "Cookies, chocolate chip, commercially prepared, regular, higher fat, unenriched"],
  Bak:["全麦英式松饼", "丹麦奶酪糕点", "奶油泡芙", "双莓果酱口味松饼", "橙子奶油酸奶口味松饼", "奶酪馅三明治", "脆香巧克力香蕉口味松饼", "葡萄干肉桂松饼", "荞麦薄煎饼", "培根山核桃糖浆口味英式松饼", "英式苹果肉桂松饼", "牛角面包", "英式混合谷物制松饼， ", "加糖甜甜圈", "花生酱馅三明治", "法式吐司", "红薯松饼", "英式奶油饼干", "英式奶油松饼", "法式煎饼", "米面薄煎饼", "牛角奶酪面包", "果冻馅甜甜圈", "玉米松饼", "低脂牛奶制成松饼", "法式蓝莓煎饼", "蓝莓牛奶松饼", "苹果派", "麦麸松饼", "玉米面煎饼", "米面薄煎饼", "地瓜面薄煎饼", "玉米奶油松饼", "奶油馅甜甜圈", "雪糕筒", "柠檬蛋白酥饼", "原味热狗", "酸面饼", "豆面煎饼", "玉米松饼", "地瓜面薄煎饼", "英式小麦烤松饼", "麦麸烤葡萄干型松饼 ", "酪乳薄煎饼", "蓝莓派", "巧克力慕斯", "法式低脂牛奶吐司", "山核桃派", "樱桃派", "南瓜派", "冰淇淋卷筒", "杏仁派", "奶油香蕉派", "高粱面煎饼", "奶油蓝莓泡芙", "烘焙派皮", "烘焙馅饼皮", "蓝莓松饼", "桃子派", "即食馅饼皮", "芒果派", "猪肉馅饼", "白面饼", "芒果泡芙", "烘焙派皮", "鸡蛋面包卷", "草莓松饼", "干酪面团", "香草奶油派", "有糖奶油爆米花", "小麦面包卷", "燕麦面包卷", "苹果酱馅面包", "汉堡包", "黑麦面包卷", "法式面包卷", "原味热狗", "奶酪面包卷", "草莓牛奶面包卷", "奶油面包卷", "烤玉米饼", "即食华夫饼", "肉桂甜面包卷", "羊肉馄饨", "肉桂馅甜面包卷", "红糖肉桂蛋糕", "烤玉米卷", "酵母面包", "烤蓝莓糕点", "草莓华夫饼", "芒果酱馅面包", "蓝莓酱面包", "发酵原味面包", "调味面包糠", "巧克力曲奇饼干作", "黄油曲奇", "米糠烤面包", "芝士面包", "燕麦曲奇饼干", "烤面筋","红豆牛奶面包卷，", "法式酪乳薄煎饼", "红豆烤松饼", "奶油夹心饼干类", "小麦胚芽烤面包", "草莓酱饼干", "麦麸烤葡萄干松饼", "丹麦柠檬糕点", "苹果肉桂馅饼", "草莓酱馅华夫饼", "蓝莓酱馅馅饼", "蜂蜜面包", "薄脆饼干", "布丁蛋糕", "黄油蛋糕", "薄脆小麦饼干", "奶油爆米花", "香草饼干类", "葡萄干面包", "薄脆草莓夹心饼干", "马苏饼干", "鸡蛋面包", "红糖肉桂馅饼", "苹果酱馅松饼", "黄油鸡蛋蛋糕", "脱水鸡蛋蛋糕", "蓝莓燕麦曲奇饼干", "巧克力酱馅饼", "干果松饼", "葡萄干馅饼", "红豆奶油面包", "柠檬奶油松饼", "薄脆奶酪饼干", "玉米面包", "黄油干酪蛋糕", "黄油曲奇饼干的", "樱桃烤馅饼", "柠檬奶油曲奇饼干", "未烘焙馅饼皮", "柠檬奶油派", "烤鸡蛋蛋糕点", "红糖烤糕点", "咖啡肉桂蛋糕", "香草奶油蛋糕", "草莓烤馅饼", "樱桃炸派", "纸杯巧克力蛋糕", "丹麦覆盆子糕点", "蓝莓烤馅饼", "樱桃烤馅饼", "覆盆子烤馅饼", "红糖肉桂馅饼", "巧克力奶油馅饼", "香蕉鸡蛋华夫饼", "蛋黄燕麦华夫饼", "无糖巧克力曲奇", "草莓奶油馅饼", "草莓低脂华夫饼", "浆果馅饼", "蓝莓酱馅饼", "低脂蓝莓华夫饼", "草莓麦片烤蛋糕", "无糖燕麦曲奇", "草莓加糖馅饼", "苹果燕麦曲奇", "麦片奶酪馅饼", "苹果肉桂馅饼", "鸡蛋酪乳煎饼", "蛋黄低脂华夫饼", "浆果馅饼", "杏仁馅饼干", "柠檬味曲奇", "蜂蜜曲奇", "樱桃饼干", "可可草莓曲奇", "巧克力牛奶曲奇", "椰子杏仁饼干", "巧克力红薯曲奇", "奶油蜂蜜曲奇", "蜂蜜曲奇", "红糖曲奇", "蜂蜜曲奇", "红枣燕麦曲奇", "山核桃饼干", "燕麦饼干，", "绿豆糕", "蜂蜜草莓饼干", "草莓燕麦曲奇", "葡萄燕麦饼干", "覆盆子曲奇", "花生酱曲奇", "可可燕麦曲奇", "草莓牛奶饼", "黑糖夹心饼干", "燕麦山核桃曲奇", "燕麦饼干", "苹果葡萄干曲奇", "芒果酱曲奇", "肉松面包", "鸡肉卷","巧克力夹心饼干", "酪乳夹心饼干", "乳酪奶油曲奇", "酪乳饼干", "草莓水果蛋糕", "蓝莓水果蛋糕", "红枣蛋糕", "硬法式面包", "巧克力花生酱面包", "鸡肉馅面包", "法式烘培小面包", "饼干屑", "酪乳奶油饼干", "葱花馅饼", "草莓干酪华夫饼", "蛋黄烤蛋糕", "巴旦木华夫饼", "杏仁松饼", "法式酪乳煎饼", "樱桃烤蛋糕", "软玉米卷", "巧克力蛋糕", "酪乳即食华夫饼", "葡萄干蛋糕", "低脂蓝莓松饼", " 金色香草华夫饼", "牛肉馅饼", "肉松小蛋糕", "猪肉涂层小蛋糕", "带糖霜的肉桂卷", "甜酵母面包", "奶酪三明治", "巧克力布朗尼", "无糖草莓酱饼干", "草莓无水蛋糕", "黄油无水蛋糕", "苹果无水蛋糕", "酪乳奶油华夫饼", "黄油酵母蛋糕", "法式手撕蛋糕", "全麦烤蛋糕", "黄油蒸蛋糕", "椰蓉葡萄蛋糕", "黄油面包", "巧克力曲奇", "酪乳饼干", "玉米奶油蛋糕", "香草奶油蛋糕", "，番石榴馅饼", "巧克力涂层蛋糕", "巧克力片华夫饼", "减脂饼干", "荷兰苹果派", "戈雅饼干", "饼奶油饼干", "蜂蜜小面包", "燕麦奶油饼干", "烤派皮", "肉松鸡蛋面包", "香葱饼干", "肉桂葡萄干烤面包", "鸡蛋百吉饼", "香草奶油华夫饼", "奶酪饼干", "三明治式花生酱馅", "蜂蜜饼干", "老式烤面包", "黄油全麦面包", "黑麦面包", "肉桂坚果蛋糕", "法式黄油小面包", "玛格丽特小饼干", "蛋黄小饼干", "草莓粗饼干", "黑麦酥性饼干", "黄油牛角面包，", "凹印花甜饼干", "奶油夹心苏打饼干", "芝麻百吉饼", "肉桂糕点", "咸饼干", "无花果饼干条", "茶饼干", "肉桂甜面包卷", "小麦甜甜圈", "巧克力甜甜圈", "洋葱百吉饼", "普通面包棒", "洋葱煎饼", "巧克力涂层饼干", "玉米松饼", "曲奇饼干", "全麦饼干", "巧克力布朗尼", "白面馒头", "蜂蜜饼干", "白面包", "巧克力夹心曲奇饼干", "烘焙酥饼", "燕麦麸百吉饼","椰子奶油派型", "肉桂葡萄干百吉饼", "丹麦葡萄干糕点", "青苹果派", "蓝莓派", "椰奶冻派", "奶油冻", "草莓迷你松饼", "柠檬酥皮饼", "巧克力甜甜圈", "香蕉奶油派", "油炸草莓派", "全麦面包卷", "松饼、燕麦麸", "蛋奶冻", "草莓甜甜圈", "椰子奶油派", "原味百吉饼", "英式樱桃派", "草莓酵母面包", "烤玉米饼", "蜂蜜草莓面包", "蜂蜜甜甜圈", "巧克力奶油派", "馅饼饼皮", "烤面包卷", "全麦薄脆饼干", "肉桂无水蛋糕", "榴莲派", "炸玉米饼","葱香饼干", "玉米贝壳卷", "芝麻百吉饼", "梅尔巴烤面包", "即食玉米饼", "洋葱百吉饼", "肉桂糕点", "薄脆苏打饼干", "	巧克力曲奇饼干"
],
Beecal:[155
  , 680
  , 278
  , 165
  , 291
  , 117
  , 674
  , 263
  , 274
  , 265
  , 143
  , 128
  , 237
  , 388
  , 246
  , 202
  , 194
  , 216
  , 173
  , 112
  , 151
  , 295
  , 149
  , 149
  , 205
  , 161
  , 158
  , 99
  , 165
  , 220
  , 449
  , 251
  , 199
  , 273
  , 180
  , 220
  , 238
  , 213
  , 178
  , 85
  , 133
  , 187
  , 149
  , 209
  , 283
  , 406
  , 198
  , 182
  , 186
  , 197
  , 173
  , 187
  , 202
  , 134
  , 175
  , 278
  , 210
  , 205
  , 132
  , 241
  , 139
  , 176
  , 185
  , 196
  , 121
  , 230
  , 143
  , 276
  , 137
  , 289
  , 170
  , 157
  , 243
  , 277
  , 123
  , 124
  , 223
  , 125
  , 234
  , 322
  , 248
  , 265
  , 288
  , 230
  , 306
  , 249
  , 316
  , 244
  , 254
  , 263
  , 190
  , 239
  , 265
  , 304
  , 217
  , 228
  , 355
  , 295
  , 367
  , 183

  , 172
  , 333
  , 301
  , 854
  , 235
  , 224
  , 276
  , 191
  , 236
  , 284
  , 92
  , 105
  , 175
  , 265
  , 251
  , 331
  , 323
  , 146
  , 246
  , 335
  , 235
  , 192
  , 184
  , 194
  , 278
  , 198
  , 195
  , 228
  , 254
  , 139
  , 201
  , 169
  , 249
  , 232
  , 145
  , 159
  , 258
  , 178
  , 173
  , 165
  , 219
  , 172
  , 204
  , 210
  , 212
  , 204
  , 137
  , 228
  , 199
  , 240
  , 183
  , 214
  , 166
  , 178
  , 208
  , 274
  , 171
  , 247
  , 192
  , 168
  , 137
  , 152
  , 205
  , 164
  , 200
  , 286
  , 217
  , 184
  , 177
  , 166
  , 232
  , 205
  , 173
  , 273
  , 189
  , 133
  , 161
  , 187
  , 201
  , 188
  , 224
  , 221
  , 164
  , 211
  , 234
  , 250
  , 157
  , 165
  , 169
  , 224
  , 233
  , 158
  , 182
  , 250
  , 240
  , 196
  , 146
  , 143
  , 190
  , 186

  , 153
  , 199
  , 200
  , 181
  , 191
  , 117
  , 209
  , 160
  , 127
  , 190
  , 215
  , 222
  , 219
  , 124
  , 128
  , 130
  , 194
  , 133
  , 236
  , 317
  , 172
  , 305
  , 215
  , 211
  , 275
  , 240
  , 284
  , 241
  , 189
  , 227
  , 287
  , 187
  , 128
  , 131
  , 261
  , 127
  , 229
  , 235
  , 196
  , 236
  , 225
  , 202
  , 291
  , 207
  , 122
  , 285
  , 204
  , 227
  , 220
  , 182
  , 200
  , 205
  , 267
  , 129
  , 249
  , 210
  , 296
  , 277
  , 216
  , 227
  , 303
  , 196
  , 173
  , 172
  , 283
  , 247
  , 175
  , 223
  , 254
  , 176
  , 189
  , 215
  , 137
  , 148
  , 134
  , 171
  , 278
  , 293
  , 127
  , 133
  , 127
  , 196
  , 188
  , 124
  , 169
  , 200
  , 141
  , 153
  , 185
  , 132
  , 214
  , 138
  , 216
  , 163
  , 135
  , 142
  , 179
  , 139
  , 131
  , 178

  , 179
  , 148
  , 193
  , 122
  , 126
  , 129
  , 154
  , 130
  , 186
  , 178
  , 298
  , 141
  , 276
  , 137
  , 278
  , 276
  , 278
  , 137
  , 298
  , 141
  , 145
  , 201
  , 145
  , 295
  , 120
  , 319
  , 261
  , 191
  , 273
  , 172
  , 271
  , 211
  , 196
  , 140
  , 195
  , 216
  , 253
  , 219
  , 212
  , 218
  , 358
  , 372
  , 231
  , 238
  , 288
  , 249
  , 331
  , 244
  , 291
  , 220
  , 253
  , 223
  , 193
  , 306
  , 297
  , 201
  , 225
  , 471
  , 309
  , 283
  , 168
  , 166
  , 169
  , 162
  , 162
  , 196
  , 188
  , 200
  , 174
  , 199
  , 181
  , 207
  , 190
  , 216
  , 209
  , 163
  , 176
  , 185
  , 206
  , 285
  , 214
  , 223
  , 198
  , 169
  , 312
  , 177
  , 231
  , 193
  , 205
  , 218
  , 179
  , 193
  , 205
  , 206
  , 180
  , 219
  , 206
  , 192
  , 172
  , 182

  , 212
  , 183
  , 188
  , 267
  , 194
  , 177
  , 258
  , 283
  , 212
  , 247
  , 224
  , 349
  , 309
  , 189
  , 177
  , 295
  , 400
  , 302
  , 341
  , 202
  , 230
  , 333
  , 370
  , 330
  , 318
  , 378
  , 365
  , 299
  , 359
  , 270
  , 315
  , 352
  , 198
  , 354
  , 291
  , 324
  , 247
  , 341
  , 393
  , 337
  , 338
  , 386
  , 250
  , 355
  , 351
  , 404
  , 218
  , 266
  , 359
  , 411
  , 238
  , 218
  , 212
  , 291
  , 224
  , 223
  , 228
  , 225
  , 316
  , 249
  , 299
  , 267
  , 264
  , 250
  , 343
  , 278
  , 243
  , 189
  , 324
  , 331
  , 313
  , 257
  , 225
  , 310
  , 308
  , 246
  , 201
  , 281
  , 230
  , 262
  , 182
  , 228
  , 143
  , 150
  , 176
  , 174
  , 188
  , 294
  , 166
  , 124
  , 265
  , 145
  , 176
  , 212
  , 137
  , 280
  , 142
  , 182
  , 168
  , 160

  , 166
  , 184
  , 186
  , 191
  , 222
  , 200
  , 162
  , 181
  , 140
  , 177
  , 161
  , 182
  , 216
  , 150
  , 159
  , 172
  , 203
  , 144
  , 196
  , 159
  , 177
  , 143
  , 227
  , 160
  , 142
  , 277
  , 265
  , 164
  , 177
  , 248
  , 255
  , 230
  , 254
  , 271
  , 250
  , 220
  , 174
  , 216
  , 272
  , 193
  , 256
  , 194
  , 240
  , 182
  , 254
  , 232
  , 207
  , 246
  , 204
  , 217
  , 214
  , 170
  , 164
  , 175
  , 224
  , 205
  , 129
  , 177
  , 140
  , 203
  , 128
  , 177
  , 163
  , 189],
Beem:[28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 214
  , 28.35
  , 262
  , 28.35
  , 236
  , 28.35
  , 28.35
  , 85
  , 28.35
  , 45
  , 387
  , 387
  , 647
  , 28.35
  , 28.35
  , 391
  , 313
  , 28.35
  , 85
  , 236
  , 28.35
  , 85
  , 28.35
  , 85
  , 353
  , 34
  , 320
  , 515
  , 85
  , 723
  , 177
  , 85
  , 270
  , 483
  , 28.35
  , 1446
  , 199
  , 1141
  , 349
  , 1236
  , 68
  , 28.35
  , 231
  , 277
  , 284
  , 761
  , 489
  , 177
  , 732
  , 464
  , 286
  , 186
  , 270
  , 1855
  , 85
  , 1438
  , 269
  , 698
  , 186
  , 1106
  , 191
  , 1432
  , 85
  , 1780
  , 380
  , 473
  , 458
  , 28.35
  , 452
  , 1027
  , 1967
  , 28.35
  , 1106
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 586
  , 28.35
  , 28.35
  , 256
  , 179
  , 356
  , 28.35
  , 28.35
  , 28.35
  , 609

  , 645
  , 28.35
  , 285
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 68
  , 28.35
  , 85
  , 28.35
  , 28.35
  , 81
  , 28.35
  , 28.35
  , 329
  , 285
  , 239
  , 335
  , 28.35
  , 313
  , 28.35
  , 28.35
  , 199
  , 245
  , 28.35
  , 28.35
  , 266
  , 227
  , 1263
  , 608
  , 85
  , 233
  , 28.35
  , 173
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 1855
  , 326
  , 85
  , 85
  , 327
  , 333
  , 326
  , 252
  , 325
  , 28.35
  , 226
  , 379
  , 28.35
  , 28.35
  , 85
  , 333
  , 28.35
  , 85
  , 164
  , 383
  , 28.35
  , 1289
  , 231
  , 247
  , 28.35
  , 284
  , 259
  , 85
  , 85
  , 269
  , 28.35
  , 274
  , 85
  , 28.35
  , 140
  , 28.35
  , 1327
  , 85
  , 312
  , 547
  , 277
  , 258
  , 591
  , 453.6
  , 569
  , 231
  , 272
  , 85
  , 453.6
  , 1780
  , 315
  , 85
  , 514
  , 85
  , 85
  , 289
  , 787
  , 331
  , 386
  , 779
  , 453.6
 
  , 384
  , 309
  , 793
  , 141
  , 453.6
  , 191
  , 308
  , 382
  , 204
  , 141
  , 454
  , 445
  , 449
  , 453.6
  , 453.6
  , 453.6
  , 453.6
  , 361
  , 609
  , 272
  , 458
  , 289
  , 349
  , 141
  , 449
  , 434
  , 445
  , 586
  , 483
  , 353
  , 315
  , 732
  , 198
  , 204
  , 454
  , 381
  , 645
  , 432
  , 679
  , 356
  , 141
  , 648
  , 647
  , 793
  , 191
  , 231
  , 787
  , 429
  , 141
  , 473
  , 779
  , 331
  , 309
  , 28.35
  , 64
  , 325
  , 227
  , 308
  , 386
  , 382
  , 224
  , 340
  , 85
  , 85
  , 307
  , 68
  , 85
  , 384
  , 85
  , 85
  , 85
  , 85
  , 85
  , 28.35
  , 28.35
  , 85
  , 85
  , 85
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 261
  , 547
  , 28.35
  , 28.35
  , 28.35
 
  , 28.35
  , 28.35
  , 591
  , 1187
  , 1289
  , 252
  , 271
  , 1392
  , 383
  , 379
  , 409
  , 188
  , 470
  , 173
  , 434
  , 470
  , 434
  , 173
  , 409
  , 188
  , 648
  , 170
  , 308
  , 121
  , 303
  , 381
  , 279
  , 285
  , 85
  , 282
  , 222
  , 242
  , 351
  , 679
  , 85
  , 85
  , 207
  , 240
  , 85
  , 85
  , 314
  , 290
  , 658
  , 214
  , 85
  , 233
  , 286
  , 232
  , 85
  , 217
  , 85
  , 185
  , 233
  , 85
  , 85
  , 244
  , 220
  , 85
  , 396
  , 279
  , 85
  , 355
  , 337
  , 85
  , 85
  , 1138
  , 330
  , 267
  , 320
  , 261
  , 1141
  , 261
  , 261
  , 267
  , 267
  , 85
  , 1138
  , 85
  , 179
  , 265
  , 185
  , 191
  , 220
  , 85
  , 272
  , 85
  , 126
  , 87
  , 108
  , 85
  , 108
  , 85
  , 164
  , 126
  , 150
  , 393
  , 375
  , 164
  , 150
  , 150
 
  , 384
  , 292
  , 393
  , 85
  , 85
  , 375
  , 85
  , 85
  , 85
  , 85
  , 85
  , 332
  , 258
  , 85
  , 85
  , 257
  , 278
  , 258
  , 247
  , 85
  , 85
  , 292
  , 267
  , 289
  , 247
  , 296
  , 289
  , 296
  , 247
  , 85
  , 264
  , 267
  , 85
  , 268
  , 285
  , 267
  , 281
  , 282
  , 281
  , 267
  , 267
  , 274
  , 289
  , 292
  , 289
  , 278
  , 85
  , 283
  , 278
  , 276
  , 286
  , 313
  , 85
  , 268
  , 347
  , 85
  , 283
  , 286
  , 329
  , 149
  , 255
  , 85
  , 85
  , 204
  , 326
  , 221
  , 306
  , 594
  , 330
  , 329
  , 307
  , 306
  , 332
  , 85
  , 85
  , 177
  , 359
  , 453.6
  , 485
  , 119
  , 254
  , 193
  , 246
  , 209
  , 179
  , 141
  , 156
  , 288
  , 253
  , 200
  , 364
  , 40
  , 250
  , 186
  , 203
  , 287
  , 44
  , 184
  , 168
  , 174
 
  , 243
  , 188
  , 85
  , 225
  , 190
  , 85
  , 160
  , 30
  , 233
  , 32
  , 85
  , 236
  , 85
  , 293
  , 85
  , 34
  , 85
  , 41
  , 85
  , 85
  , 150
  , 197
  , 85
  , 85
  , 305
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 28.35
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 85
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35],
  Bee2:["Beef, brisket, whole, separable lean only, all grades, raw"
  , "Beef, retail cuts, separable fat, cooked"
  , "Beef, carcass, separable lean and fat, select, raw"
  , "Beef, flank, steak, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, carcass, separable lean and fat, choice, raw"
  , "Beef, grass-fed, strip steaks, lean only, raw"
  , "Beef, retail cuts, separable fat, raw"
  , "Beef, flank, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, rib, eye, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, rib, eye, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, variety meats and by-products, brain, raw"
  , "Beef, shank crosscuts, separable lean only, trimmed to 1/4 fat, choice, raw"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, rib, shortribs, separable lean and fat, choice, raw"
  , "USDA Commodity, beef, canned"
  , "Beef, flank, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, rib, shortribs, separable lean only, choice, raw"
  , "Beef, variety meats and by-products, heart, raw"
  , "Beef, variety meats and by-products, brain, cooked, simmered"
  , "Beef, ground, patties, frozen, cooked, broiled"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, rib eye, small end (ribs 10-12), separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, rib, eye, small end (ribs 10-12), separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, rib, eye, small end (ribs 10-12), separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, variety meats and by-products, kidneys, cooked, simmered"
  , "Beef, variety meats and by-products, kidneys, raw"
  , "Beef, variety meats and by-products, heart, cooked, simmered"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, cured, breakfast strips, cooked"
  , "Beef, cured, corned beef, brisket, cooked"
  , "Beef, round, bottom round, roast, separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, ground, 70% lean meat / 30% fat, patty, cooked, broiled"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, ground, 70% lean meat / 30% fat, patty cooked, pan-broiled"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, variety meats and by-products, tripe, raw"
  , "Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, round, tip round, roast, separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, cured, breakfast strips, raw or unheated"
  , "Beef, cured, corned beef, brisket, raw"
  , "Beef, rib, eye, small end (ribs 10- 12) separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, round, top round, steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, round, top round, steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, round, bottom round, roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, chuck, under blade pot roast or steak, boneless, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, round, bottom round, roast, separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, select, cooked"
  , "Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, brisket, flat half, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, brisket, flat half, boneless separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, ground, 70% lean meat / 30% fat, loaf, cooked, baked"
  , "Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, round, top round, steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, shoulder pot roast or steak, boneless, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, shoulder top blade steak, boneless, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, brisket, flat half, boneless, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, shoulder pot roast or steak, boneless, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, brisket, flat half, boneless, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, shoulder pot roast or steak, boneless, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, brisket, point half, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean only, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0 fat, all grades, cooked, roasted"

  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, choice, cooked"
  , "Beef, variety meats and by-products, suet, raw"
  , "Beef, variety meats and by-products, pancreas, raw"
  , "Beef, variety meats and by-products, tongue, raw"
  , "Beef, variety meats and by-products, mechanically separated beef, raw"
  , "Beef, variety meats and by-products, liver, cooked, braised"
  , "Beef, variety meats and by-products, thymus, raw"
  , "Beef, variety meats and by-products, tongue, cooked, simmered"
  , "Beef, variety meats and by-products, lungs, raw"
  , "Beef, variety meats and by-products, spleen, raw"
  , "Beef, variety meats and by-products, liver, cooked, pan-fried"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, brisket, whole, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, brisket, whole, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, round, full cut, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, round, full cut, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, round, full cut, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, shoulder steak, boneless, separable lean only, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, rib eye, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, flank, steak, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, round, tip round, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, brisket, flat half, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, round, tip round, roast, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, chuck, clod roast, separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, round, tip round, roast, separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, round, top round steak, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, round, tip round, roast, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, round, tip round, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, braised"
  , "Beef, flank, steak, separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, shoulder steak, boneless, separable lean only, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, tenderloin, separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, chuck, clod roast, separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, flank, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, shoulder top blade steak, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, chuck, top blade, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, chuck, top blade, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, plate, inside skirt steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, round, top round, separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, round, tip round, separable lean and fat, trimmed to 1/8 fat, all grades, raw"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, chuck, mock tender steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, plate, inside skirt steak, separable lean only, trimmed to 1/4 fat, all grades, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, rib eye, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, mock tender steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, plate, outside skirt steak, separable lean only, trimmed to 1/4 fat, all grades, raw"
  , "Beef, brisket, flat half, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, plate, outside skirt steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, brisket, flat half, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, loin, bottom sirloin butt, tri-tip roast, separable lean only, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, loin, bottom sirloin butt, tri-tip steak, separable lean only, trimmed 0 fat, all grades, cooked, broiled"
  , "Beef, chuck, short ribs, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, shoulder pot roast, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck eye steak, boneless, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, shoulder pot roast, boneless, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck for stew, separable lean and fat, select, cooked, braised"
 
  , "Beef, chuck eye steak, boneless, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck eye steak, boneless, separable lean only, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, shoulder pot roast, boneless, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck for stew, separable lean and fat, all grades, cooked, braised"
  , "Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, chuck eye steak, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck eye steak, boneless, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, mock tender steak, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck, under blade steak, boneless, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck, under blade steak, boneless, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, under blade steak, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck for stew, separable lean and fat, select, raw"
  , "Beef, chuck for stew, separable lean and fat, all grades, raw"
  , "Beef, chuck for stew, separable lean and fat, choice, raw"
  , "Beef, chuck for stew, separable lean and fat, choice, cooked, braised"
  , "Beef, shoulder pot roast or steak, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck, under blade steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, under blade steak, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck, under blade pot roast or steak, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, under blade steak, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, shoulder pot roast or steak, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck eye roast, boneless, America's Beef Roast, separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, under blade pot roast or steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, under blade pot roast or steak, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, under blade pot roast, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck, short ribs, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, mock tender steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck, under blade center steak, boneless, Denver Cut, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, shoulder pot roast, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, chuck, clod roast, separable lean only, trimmed to 1/4 fat, all grades, raw"
  , "USDA Commodity, beef, patties (100%), frozen, cooked"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck eye Country-Style ribs, boneless, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, clod roast, separable lean only, trimmed to 1/4 fat, all grades, cooked, roasted"
  , "Beef, chuck, clod roast, separable lean only, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "USDA Commodity, beef patties with VPP, frozen, cooked"
  , "Beef, shoulder steak, boneless, separable lean only, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck eye steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, ground, 80% lean meat / 20% fat, raw"
  , "Beef, ground, 90% lean meat / 10% fat, raw"
  , "Beef, chuck, clod steak, separable lean only, trimmed to 1/4 fat, all grades, cooked, braised"
  , "Beef, ground, 85% lean meat / 15% fat, raw"
  , "Beef, ground, 95% lean meat / 5% fat, raw"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 1/8 fat, select, raw"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8 fat, select, raw"
  , "Beef, ground, 95% lean meat / 5% fat, patty, cooked, broiled"
  , "Beef, ground, 75% lean meat / 25% fat, patty, cooked, broiled"
  , "Beef, ground, 75% lean meat / 25% fat, raw"
  , "Beef, brisket, flat half, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8 fat, select, raw"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 1/8 fat, select, raw"
  , "Beef, brisket, flat half, separable lean only, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, round, top round, steak, separable lean only, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, round, bottom round, steak, separable lean only, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, round, bottom round, roast, separable lean only, trimmed to 1/8 fat, all grades, cooked"
  , "Beef, round, top round, steak, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8 fat, choice, raw"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 1/8 fat, all grades, raw"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 1/8 fat, all grades, cooked, broiled"
 
  , "Beef, round, bottom round, roast, separable lean only, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 1/8 fat, choice, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, tip round, roast, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, round, tip round, roast, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, bottom sirloin, tri-tip roast, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, round, tip round, roast, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, select, raw"
  , "Beef, brisket, flat half, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, flank, steak, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, under blade pot roast or steak, boneless, separable lean only, trimmed to 0 fat, choice, raw"
  , "Beef, shank crosscuts, separable lean only, trimmed to 1/4 fat, choice, cooked, simmered"
  , "Beef, variety meats and by-products, spleen, cooked, braised"
  , "Beef, rib, shortribs, separable lean only, choice, cooked, braised"
  , "Beef, variety meats and by-products, lungs, cooked, braised"
  , "Beef, variety meats and by-products, thymus, cooked, braised"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0 fat, select, cooked"
  , "Beef, round, full cut, separable lean only, trimmed to 1/4 fat, choice, cooked, broiled"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0 fat, all grades, cooked"
  , "Beef, round, full cut, separable lean only, trimmed to 1/4 fat, select, cooked, broiled"
  , "Beef, variety meats and by-products, pancreas, cooked, braised"
  , "Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0 fat, all grades, cooked"
  , "Beef, variety meats and by-products, brain, cooked, pan-fried"
  , "Beef, chuck, under blade pot roast or steak, boneless, separable lean only, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, arm pot roast, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, rib, large end (ribs 6-9), separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0 fat, choice, cooked"
  , "Beef, chuck, arm pot roast, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, brisket, whole, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, brisket, point half, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, chuck, under blade pot roast, boneless, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, rib, large end (ribs 6-9), separable lean only, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, chuck, under blade pot roast, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, brisket, point half, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, brisket, whole, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, rib, large end (ribs 6-9), separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, chuck, blade roast, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, chuck, under blade pot roast, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, composite of trimmed retail cuts, separable lean only, trimmed to 0 fat, select, cooked"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, rib, shortribs, separable lean and fat, choice, cooked, braised"
  , "Beef, sandwich steaks, flaked, chopped, formed and thinly sliced, raw"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 0 fat, choice, cooked"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, tip round, roast, separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, tip round, roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, round, top round, separable lean and fat, trimmed to 0 fat, select, cooked, braised"
  , "Beef, round, tip round, roast, separable lean only, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, round, top round, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, round, tip round, roast, separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, round, top round, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, round, top round, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, round, top round, separable lean and fat, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, round, top round, separable lean and fat, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, round, tip round, roast, separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, bottom round, roast, separable lean only, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, bottom round, steak, separable lean only, trimmed to 0 fat, select, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, round, bottom round, steak, separable lean only, trimmed to 0 fat, all grades, cooked, braised"
  , "Beef, round, bottom round, steak, separable lean only, trimmed to 0 fat, choice, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, round, bottom round roast, separable lean only, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, round, bottom round, roast, separable lean only, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, tenderloin, separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"

  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0 fat, USDA select, cooked, broiled"
  , "Beef, short loin, porterhouse steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 0 fat, USDA choice, cooked, broiled"
  , "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 0 fat, USDA choice, cooked, broiled"
  , "Beef, short loin, porterhouse steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, short loin, porterhouse steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, brisket, point half, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, short loin, t-bone steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean only, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8 fat, select, cooked, braised"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, prime, cooked, roasted"
  , "Beef, chuck, arm pot roast, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, short loin, t-bone steak, separable lean only, trimmed to 1/4 fat, all grades, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 0 fat, USDA select, cooked, broiled"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8 fat, select, cooked, braised"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, prime, cooked"
  , "Beef, chuck, blade roast, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, ground, 70% lean meat / 30% fat, crumbles, cooked, pan-browned"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, short loin, t-bone steak, separable lean only, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, prime, cooked, broiled"
  , "Beef, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, all grades, cooked"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, bottom round, steak, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, prime, cooked, roasted"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, prime, cooked, broiled"
  , "Beef, round, top round, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, rib, whole (ribs 6-12), separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, rib, large end (ribs 6-9), separable lean and fat, trimmed to 1/8 fat, prime, cooked, broiled"
  , "Beef, round, bottom round, roast, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, round, top round, separable lean and fat, trimmed to 1/8 fat, choice, cooked, pan-fried"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, prime, cooked, roasted"
  , "Beef, round, top round, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, braised"
  , "Beef, round, full cut, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, bottom round, roast, separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, rib, small end (ribs 10-12), separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, round, bottom round, roast, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, round, top round, separable lean only, trimmed to 1/8 fat, choice, cooked, pan-fried"
  , "Beef, round, top round, separable lean and fat, trimmed to 1/8 fat, select, cooked, braised"
  , "Beef, tenderloin, separable lean and fat, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, tenderloin, separable lean and fat, trimmed to 1/8 fat, prime, cooked, roasted"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, select, raw"
  , "Beef, tenderloin, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, roasted"
  , "Beef, tenderloin, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, pan-fried"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8 fat, prime, cooked, broiled"
  , "Beef, short loin, top loin, separable lean and fat, trimmed to 1/8 fat, prime, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, prime, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, choice, raw"
  , "Beef, round, top round, steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, short loin, top loin, steak, separable lean and fat, trimmed to 1/8 fat, prime, raw"
  , "Beef, top sirloin, steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, tenderloin, steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, short loin, porterhouse steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, round, knuckle, tip side, steak, separable lean and fat , trimmed to 0 fat, select, raw"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, short loin, t-bone steak, separable lean and fat, trimmed to 1/8 fat, all grades, cooked, broiled"
  , "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, round, knuckle, tip side, steak, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"

  , "Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, shoulder steak, boneless, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, chuck, shoulder clod, top blade, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck, top blade, separable lean and fat, trimmed to 0 fat, select, cooked, broiled"
  , "Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0 fat, choice, cooked, grilled"
  , "Beef, chuck, shoulder clod, shoulder top and center steaks, separable lean and fat, trimmed to 0 fat, select, raw"
  , "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck, mock tender steak, separable lean and fat, trimmed to 0 fat, USDA choice, cooked, broiled"
  , "Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, chuck, clod roast, separable lean and fat, trimmed to 0 fat, choice, cooked, roasted"
  , "Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0 fat, choice, raw"
  , "Beef, chuck, mock tender steak, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, chuck, top blade, separable lean only, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, chuck, shoulder clod, shoulder tender, medallion, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, clod roast, separable lean and fat, trimmed to 0 fat, select, cooked, roasted"
  , "Beef, chuck, mock tender steak, separable lean and fat, trimmed to 0 fat, USDA select, cooked, broiled"
  , "Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, round, knuckle, tip center, steak, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, chuck, top blade, separable lean and fat, trimmed to 0 fat, choice, cooked, broiled"
  , "Beef, chuck, mock tender steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, round, outside round, bottom round, steak, separable lean and fat, trimmed to 0 fat, all grades, raw"
  , "Beef, ground, 75% lean meat / 25% fat, crumbles, cooked, pan-browned"
  , "Beef, loin, bottom sirloin butt, tri-tip steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, ground, 95% lean meat / 5% fat, patty, cooked, pan-broiled"
  , "Beef, shoulder steak, boneless, separable lean and fat, trimmed to 0 fat, select, cooked, grilled"
  , "Beef, ground, 75% lean meat / 25% fat, patty, cooked, pan-broiled"
  , "Beef, plate, outside skirt steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, ground, 90% lean meat / 10% fat, crumbles, cooked, pan-browned"
  , "Beef, ground, 80% lean meat / 20% fat, loaf, cooked, baked"
  , "Beef, ground, 80% lean meat / 20% fat, patty, cooked, broiled"
  , "Beef, ground, 85% lean meat / 15% fat, patty, cooked, broiled"
  , "Beef, plate, inside skirt steak, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, ground, 95% lean meat / 5% fat, loaf, cooked, baked"
  , "Beef, chuck, top blade, separable lean and fat, trimmed to 0 fat, all grades, cooked, broiled"
  , "Beef, ground, 80% lean meat / 20% fat, crumbles, cooked, pan-browned"
  , "Beef, ground, 95% lean meat / 5% fat, crumbles, cooked, pan-browned"
  , "Beef, ground, 85% lean meat / 15% fat, crumbles, cooked, pan-browned"
  , "Beef, tenderloin, steak, separable lean only, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, ground, 85% lean meat / 15% fat, loaf, cooked, baked"
  , "Beef, shoulder steak, boneless, separable lean and fat, trimmed to 0 fat, all grades, cooked, grilled"
  , "Beef, ground, 75% lean meat / 25% fat, loaf, cooked, baked"
  , "Beef, ground, 85% lean meat / 15% fat, patty, cooked, pan-broiled"
  , "Beef, chuck, clod roast, separable lean and fat, trimmed to 0 fat, all grades, cooked, roasted"
  , "Beef, ground, 80% lean meat / 20% fat, patty, cooked, pan-broiled"
  , "Beef, ground, 90% lean meat / 10% fat, patty, cooked, pan-broiled"
  , "Beef, ground, 90% lean meat / 10% fat, patty, cooked, broiled"
  , "Beef, ground, 90% lean meat / 10% fat, loaf, cooked, baked"
  , "Beef, top sirloin, steak, separable lean only, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, bottom round , roast, separable lean only, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 1/8 fat, choice, cooked, roasted"
  , "Beef, chuck, arm pot roast, separable lean only, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, round, bottom round, steak, separable lean only, trimmed to 1/8 fat, select, cooked, braised"
  , "Beef, brisket, flat half, separable lean only, trimmed to 1/8 fat, choice, raw"
  , "Beef, round, top round, steak, separable lean only, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, top round, steak, separable lean only, trimmed to 1/8 fat, choice, raw"
  , "Beef, brisket, flat half, separable lean only, trimmed to 1/8 fat, choice, cooked, braised"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 1/8 fat, choice, raw"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8 fat, select, cooked, broiled"
  , "Beef, round, eye of round, roast, separable lean only, trimmed to 1/8 fat, select, cooked, roasted"
  , "Beef, short loin, top loin, steak, separable lean only, trimmed to 1/8 fat, all grades, cooked, broiled"],
  Bee:["牛肉、胴体、肥瘦分开、精选级、生的", "牛肉、胴体、肥瘦分开、特选级、生的", "牛肉、胸肉、整条、纯瘦肉、所有品级、生的", "牛肉、腰肉、牛排、肥瘦分开、特选级、生的", "牛肉、扒牛排、纯瘦肉、生的", "牛肉、零售肉块、可分离脂肪、熟的", "牛肉、腰肉、牛排、肥瘦分开、特选级、熟的、炖熟", "牛肉、肋骨、肥瘦分开、特选级、生的", "牛肉、肋骨、特选级、熟的、烧烤", "牛肉、零售肉块、可分离脂肪、生的", "牛肉、腰肉、牛排、肥瘦分开、特选级、熟的、烧烤", "牛肉，罐装", "牛肉、腰肉、牛排、纯瘦肉、特选级、熟的、烧烤", "牛肉、肩胛肉、下刀口炖牛肉", "牛肉、小腿横切、纯瘦肉、切至1/4脂肪、特选级、生的", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、肋骨、短肋骨、肥瘦肩胛骨牛排、去骨、纯瘦肉、切至0脂肪、精选级、熟的、铁扒", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、腌制、早餐条、生的或未加热的", "牛肉、肩胛骨牛排、去骨、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、纯瘦肉、切至0脂肪、精选级、熟的、铁扒", "牛肉、腌制、咸牛肉、胸肉、生的", "牛肉、后腿肉、上部后腿肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、后腿肉、上部后腿肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、肋骨、眼、小头（肋骨10-12）纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，选择，即食", "牛肉、后腿、下腿肉、烤肉、肥瘦分开、所有品级、熟的、烤熟", "牛肉、肩胛肉、下刀口炖肉或牛排、去骨、纯瘦肉、精选级、生的", "牛肉、肩胛骨牛排、去骨、纯瘦肉、切至0脂肪、特选级、熟的、铁扒", "牛肉、胸肉、平头、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、肩胛骨牛排、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、胸肉、平底、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、绞肉、70%瘦肉/30%脂肪", "牛肉、肩胛骨牛排、去骨、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、后腿、上部后腿、牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、炖肩胛肉或牛排、去骨、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、肩胛骨牛排、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、铁扒", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肩胛骨牛排、去骨、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、前腰肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、胸肉、平头、去骨、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、胸肉、平底、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、胸肉、平头、去骨、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、胸肉、平头、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉，零售切割肉馅，分肥瘦，1/8肥肉，选择，生", "牛肉、炖肩胛肉或牛排、去骨、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，精选级，生", "牛肉、炖肩胛肉或牛排、去骨、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉，零售切割肉馅，分肥瘦，1/8肥肉，所有品级，生", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、胸肉、点半、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、纯瘦肉、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、优质、生的", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、优质、生的", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、精选级、生的","牛肉、畜下水和副产品、板油、生的", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，选择，即食", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、畜下水和副产品、胰腺、生的", "牛肉、各种肉类和副产品、舌头、生的", "牛肉、各种肉类和副产品、胸腺、生的", "牛肉、畜产品和副产品、机械分离牛肉、生的", "牛肉、畜下水和副产品、肝、熟的、炖熟", "牛肉、畜下水和副产品、舌头、熟的、文火炖", "牛肉、各种肉类和副产品、肺、生的", "牛肉、畜下水和副产品、脾脏、生的", "牛肉、胸肉、全部、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，优质，生", "牛肉、胸肉、全部、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、畜下水和副产品、肝、熟的、油炸", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、优质、生的", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、肩胛骨牛排、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、后腿、全切、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、后腿、下半身、牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、后腿、全切、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、肩胛骨牛排、去骨、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、后腿、全切、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、上等牛腰肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肩胛肉、去骨、纯瘦肉、切至0脂肪、精选级、熟的、铁扒", "牛肉、腰肉、牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肋眼、小头（肋10-12）、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉，后腿，后腿肉，分肥瘦，1/8肥肉，选择，生", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、前腰肉、波特豪斯牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、胸肉、平头、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、肩胛肉、烤土块、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、后腿、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、肩胛骨牛排、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、后腿肉、上部后腿肉牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、后腿、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、后腿、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉，后腿，后腿肉，分肥瘦，1/8肥肉，选择，生", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、肩胛肉、去骨、纯瘦肉、切至0脂肪、特选级、熟的", "牛肉、腰肉、牛排、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、里脊肉、肥瘦分开、切至1/8脂肪、优质、生的", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肩胛肉、烤土块、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、腰肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、后腿肉、上部后腿肉、牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肩胛骨牛排、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、胸肉、平底、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、后腿肉、上部后腿肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、后腿、上部后腿、牛排、肥瘦分开、切至0脂肪、特选级、熟的、烧烤", "牛肉、肩胛肉、上刀刃、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、肩胛肉、上刀刃、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、后腿、上部后腿、牛排、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、后腿肉、上部后腿肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、后腿肉、上部后腿肉、肥瘦分开、切至1/8脂肪、优质、生的", "牛肉、后腿、后腿肉、肥瘦分开、切至1/8脂肪、所有品级、生的", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、盘子、内裙边牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、下牛腰肉、三尖烤肉、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉、肩胛肉、模拟嫩牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、后腿肉、上部后腿肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、上腰肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、肋眼、小头（肋10-12）、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、下牛腰肉、三尖烤肉、肥瘦分开、切至0脂肪、特选级、熟的、烤熟", "牛肉、下牛腰肉、三尖烤肉、肥瘦分开、切至0脂肪、所有品级、熟的、烤熟", "牛肉、肩胛肉、短肋骨、去骨、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、盘子、内裙边牛排、纯瘦肉、切至1/4脂肪、所有品级、生的", "牛肉、胸肉、平头、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、盘子、外裙边牛排、纯瘦肉、切至1/4脂肪、所有品级、生的", "牛肉、肩胛肉、模拟嫩牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、肩胛肉、短肋骨、去骨、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、短肋骨、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、炖肩肉、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、里脊、下腰肉、三尖牛排、纯瘦肉、切0脂肪、所有品级、熟的、烧烤", "牛肉、里脊、下腰肉、三尖烤肉、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、胸肉、平头、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、盘子、外裙边牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、肩胛眼牛排、去骨、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、炖肩肉、去骨、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛眼乡村风格排骨、去骨、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、炖肩胛肉、肥瘦分开、精选级、熟的、炖熟","牛肉、肩胛肉、模拟嫩牛排、去骨、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、模拟嫩牛排、去骨、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、炖肩胛肉、肥瘦分开、所有品级、熟的、炖熟", "牛肉、肩胛眼牛排、去骨、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、肩胛眼牛排、去骨、纯瘦肉、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛眼牛排、去骨、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、肩胛肉、模拟嫩牛排、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、模拟嫩牛排、去骨、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、肩胛眼牛排、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、铁扒", "牛肉、炖肩肉、去骨、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、炖肉夹头、肥瘦分开、精选级、生的", "牛肉、肩胛肉、肩胛下牛排、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、炖肉夹头、肥瘦分开、所有品级、生的", "牛肉、肩胛肉、肩胛下牛排、去骨、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、炖肉用肩胛肉、肥瘦分开、特选级、生的", "牛肉、肩胛肉、下肩牛排、去骨、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、肥瘦分开、切至0脂肪、所有品级、熟的、烤熟", "牛肉、炖肩胛肉或牛排、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、炖肩胛肉、肥瘦分开、特选级、熟的、炖熟", "牛肉、肩胛肉、短肋骨、去骨、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肩胛肉、肩胛下牛排、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、模拟嫩牛排、去骨、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛肉、短肋骨、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、肩胛下牛排、去骨、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肩胛肉、短肋骨、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、肥瘦分开、切至0脂肪、特选级、熟的、烤熟", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、炖肩胛肉或牛排、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、下刀口炖肉或牛排、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、模拟嫩牛排、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、模拟嫩牛排、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛肉、短肋骨、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、下肩牛排、去骨、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、短肋骨、去骨、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、炖肉或牛排、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛眼烤肉、去骨、美国烤牛肉、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉、炖肩肉、去骨、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肩胛肉、模拟嫩牛排、去骨、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肩胛肉、模拟嫩牛排、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、炖肉或牛排、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛眼乡村风格排骨、去骨、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛肉、下刀口炖牛肉、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、短肋骨、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、下刀刃中心牛排、去骨、丹佛牛排、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、模拟嫩牛排、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、炖肩肉、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛眼乡村风格排骨、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、烤土块、纯瘦肉、切至1/4脂肪、所有品级、生的", "牛肉、肩胛眼乡村风格排骨、去骨、肥瘦分开、切至0脂肪、特选级、生的", "美国农业部商品，牛肉，肉饼（100%），冷冻，即食", "牛肉、肩胛眼牛排、去骨、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛眼牛排、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、炖肩肉、去骨、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肩胛眼乡村风格排骨、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛眼牛排、去骨、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛眼牛排、去骨、肥瘦分开、切至0脂肪、精选级、生的", "美国农业部商品，VPP牛肉饼，冷冻，即食", "牛肉、肩胛肉、烤土块、纯瘦肉、切至1/4脂肪、所有品级、熟的、烤熟", "牛肉、肩胛眼乡村风格排骨、去骨、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肩胛眼乡村风格排骨、去骨、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛眼牛排、去骨、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛肉、烤土块、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、肩胛肉、去骨、纯瘦肉、切至0脂肪、所有品级、熟的、铁扒", "牛肉、绞肉、90%瘦肉/10%脂肪、生的", "牛肉、肩胛眼牛排、去骨、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、绞肉、80%瘦肉/20%脂肪、生的", "牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至1/8脂肪、精选级、生的", "牛肉、里脊肉、牛排、纯瘦肉、切至1/8脂肪、精选级、生的", "牛肉、肩胛肉、肉块牛排、纯瘦肉、切至1/4脂肪、所有品级、熟的、炖熟", "牛肉、绞肉、95%瘦肉/5%脂肪、肉饼、熟的、烧烤", "牛肉、绞肉、85%瘦肉/15%脂肪、生的", "牛肉、绞肉、95%瘦肉/5%脂肪、生的", "牛肉、绞肉、75%瘦肉/25%脂肪、生的", "牛肉、胸肉、平头、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、绞肉、75%瘦肉/25%脂肪、肉饼、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、纯瘦肉、切至1/8脂肪、精选级、生的", "牛肉、胸肉、平底、纯瘦肉、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、里脊肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至1/8脂肪、精选级、生的", "牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、肩胛肉、炖臂肉、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、里脊肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、后腿肉、上部后腿肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、肩胛肉、炖臂肉、纯瘦肉、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、下牛里脊肉、三尖烤肉、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、前腰肉、上等腰肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、下牛腰肉、三尖烤肉、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、后腿、下腿肉、烤肉、纯瘦肉、切至1/8脂肪、所有品级、熟的", "牛肉、肩胛肉、炖臂肉、纯瘦肉、切至1/8脂肪、特选级、生的", "牛肉、后腿肉、上部后腿肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、生的", "牛肉、后腿、下腿肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至1/8脂肪、特选级、生的", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、下牛里脊肉、三尖烤肉、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、后腿、后腿肉、烤肉、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、后腿、下腿肉、烤肉、纯瘦肉、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、下牛腰肉、三尖烤肉、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、下牛腰肉、三尖烤肉、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、后腿、后腿肉、烤肉、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、胸肉、平底、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、胸肉、平头、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、胸肉、平头、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、胸肉、平头、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、精选级、生的", "牛肉、胸肉、平头、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、胸肉、平底、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、腰肉、牛排、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、畜下水和副产品、肺、熟的、炖熟", "牛肉、肩胛肉、炖肉或牛排、去骨、纯瘦肉、切至0脂肪、特选级、生的", "牛肉、肋骨、短肋骨、纯瘦肉、特选级、熟的、炖熟", "牛肉、畜下水和副产品、脾脏、熟的、炖熟", "牛肉、畜下水和副产品、胸腺、熟的、炖熟", "牛肉、小腿横切、纯瘦肉、切至1/4脂肪、特选级、熟的、文火炖", "牛肉，零售切割肉馅，分肥瘦，0脂肪，精选级，即食", "牛肉、后腿、全切、纯瘦肉、切至1/4脂肪、特选级、熟的、烧烤", "牛肉，零售切割肉馅，肥瘦分开，切至0脂肪，所有品级，即食", "牛肉、后腿、全切、纯瘦肉、切至1/4脂肪、精选级、熟的、烧烤", "牛肉、畜下水和副产品、脑、熟的、油炸", "牛肉、肩胛肉、下刀口炖牛肉、去骨、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉，零售切割肉馅，精瘦，0脂肪，所有品级，即食", "牛肉、肩胛肉、炖肉或牛排、去骨、纯瘦肉、切至0脂肪、所有品级、生的", "牛肉、畜下水和副产品、胰腺、熟的、炖熟", "牛肉，零售切割肉馅，精瘦，0脂肪，选择，即食", "牛肉、肩胛肉、炖臂肉、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、肋骨、大头（肋骨6-9）、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、胸肉、全部、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、炖臂肉、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至0脂肪、特选级、熟的、烤熟", "牛肉、肩胛肉、下刀口炖牛肉、去骨、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、肋骨、大头（肋骨6-9）、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、肩胛肉、下刀口炖牛肉、去骨、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉、肋骨、大头（肋骨6-9）、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、胸肉、半分肉、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、胸肉、半分之一点、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、胸肉、全部、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、炖肉、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉，零售切割肉馅，精瘦，0脂肪，选择，即食", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、肩胛肉、烤刀片、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、下刀口炖牛肉、去骨、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、肋骨、排骨、肥瘦分开、特选级、熟的、炖熟", "牛肉、三明治牛排、薄片、剁碎、成型并切成薄片、生的", "牛肉，零售切割肉馅，分肥瘦，0脂肪，选择，即食", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至0脂肪、所有品级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至0脂肪、特选级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、肥瘦分开、切至0脂肪、特选级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、后腿、后腿肉、烤肉、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、后腿、后腿肉、烤肉、肥瘦分开、切至0脂肪、所有品级、熟的、烤熟", "牛肉、后腿、上部后腿、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、后腿肉、上部后腿肉、肥瘦分开、切至0脂肪、精选级、熟的、炖熟", "牛肉、后腿、上部后腿、肥瘦分开、切至0脂肪、特选级、熟的、炖熟", "牛肉、后腿、上部后腿、肥瘦分开、切至0脂肪、所有品级、熟的、炖熟", "牛肉、后腿肉、上部后腿肉、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、后腿、后腿肉、烤肉、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、后腿、下腿肉、牛排、纯瘦肉、切至0脂肪、精选级、熟的、炖熟", "牛肉、后腿、上部后腿、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、后腿、下腿肉、烤肉、纯瘦肉、切至0脂肪、特选级、熟的、烤熟", "牛肉、后腿、下腿肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、炖熟", "牛肉、后腿肉、烤后腿肉、纯瘦肉、切至0脂肪、精选级、熟的、烤熟", "牛肉、后腿、下腿肉、烤肉、纯瘦肉、切至0脂肪、所有品级、熟的、烤熟", "牛肉、里脊肉、牛排、肥瘦分开、切至0脂肪、特选级、熟的、烧烤", "牛肉、后腿、下腿肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、炖熟", "牛肉、肋骨、小头（肋骨10-12）、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至0脂肪、特选级、熟的、烧烤", "牛肉、里脊肉、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、里脊肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、里脊肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、里脊肉、牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至0脂肪、特选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至0脂肪、特选级、熟的、烧烤", "牛肉、里脊肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、前腰肉、上腰肉、牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤","牛肉、上牛里脊肉、牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、porterhouse牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、上等牛腰肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、前腰肉、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、前腰肉、丁骨牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、丁骨牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、胸肉、半角、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、前腰肉、丁骨牛排、纯瘦肉、切至1/4脂肪、所有品级、熟的、烧烤", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，优质，即食", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、绞肉、70%瘦肉/30%脂肪、面包屑、熟的、煎棕色", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烧烤", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，所有品级，即食", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、丁骨牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、后腿、下腿肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烧烤", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特级、熟的、烧烤", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、后腿、上部后腿、肥瘦分开、切至1/8脂肪、特选级、熟的、油煎", "牛肉、后腿、上部后腿、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、后腿、上部后腿、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、后腿、全切、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、后腿、上部后腿、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、里脊肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、后腿、上部后腿、纯瘦肉、切至1/8脂肪、特选级、熟的、油煎", "牛肉、后腿肉、上部后腿肉、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、里脊肉、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、里脊肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟", "牛肉、上等牛腰肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、里脊肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、生的", "牛肉、后腿、上部后腿、牛排、肥瘦分开、切至1/8脂肪、特级、熟的、烧烤", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、特级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、油炸", "牛肉、前腰肉、上等腰肉、肥瘦分开、切至1/8脂肪、优质、熟的、烧烤", "牛肉、后腿、上部后腿、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、优质、生的", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、后腿、指关节、尖部、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、前腰肉、porterhouse牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、后腿、指关节、尖头、牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、后腿、外腿肉、下腿肉、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、肩胛肉、肩肉、肩胛肉嫩、奖章、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、后腿、指关节、尖部、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、后腿、指关节、尖部、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、嫩肩、奖章、肥瘦分开、切至0脂肪、精选级、生的","牛肉、上牛里脊肉、牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤","牛肉、前腰肉、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤","牛肉、上等牛腰肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、纯瘦肉、切至0脂肪、精选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤","牛肉、前腰肉、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、纯瘦肉、切至0脂肪、特选级、熟的、烧烤", "牛肉、前腰肉、丁骨牛排、纯瘦肉、切至0脂肪、精选级、熟的、烧烤","牛肉、前腰肉、丁骨牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤","牛肉、胸肉、半角、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟", "牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟","牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟","牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤","牛肉、肩胛肉、炖臂肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟","牛肉、前腰肉、丁骨牛排、纯瘦肉、切至1/4脂肪、所有品级、熟的、烧烤","牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟","牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤","牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、肩胛肉、烤刀片、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟", "牛肉，零售切割肉馅，分肥瘦，1/8脂肪，优质，即食", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟","牛肉、绞肉、70%瘦肉/30%脂肪、面包屑、熟的、煎棕色","牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤","牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烧烤","牛肉，零售切割肉馅，分肥瘦，1/8脂肪，所有品级，即食","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤","牛肉、前腰肉、丁骨牛排、纯瘦肉、切至0脂肪、特选级、熟的、烧烤","牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟","牛肉、后腿、下腿肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟","牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟", "牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、肋骨、整条（肋骨6-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烧烤","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、特级、熟的、烧烤","牛肉、肋骨、大头（肋骨6-9）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟","牛肉、后腿、上部后腿、肥瘦分开、切至1/8脂肪、特选级、熟的、油煎","牛肉、后腿、上部后腿、肥瘦分开、切至1/8脂肪、特选级、熟的、炖熟","牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟","牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟","牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟","牛肉、后腿、上部后腿、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤","牛肉、后腿、全切、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤","牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、后腿、下腿肉、烤肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟","牛肉、肋骨、小头（肋骨10-12）、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、后腿、上部后腿、肥瘦分开、切至1/8脂肪、所有品级、熟的、炖熟","牛肉、里脊肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烤熟","牛肉、后腿、上部后腿、纯瘦肉、切至1/8脂肪、特选级、熟的、油煎","牛肉、后腿肉、上部后腿肉、肥瘦分开、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的","牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤", "牛肉、里脊肉、肥瘦分开、切至1/8脂肪、优质、熟的、烤熟", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、前腰肉、、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤","牛肉、里脊肉、肥瘦分开、切至1/8脂肪、所有品级、熟的、烤熟","牛肉、上等牛腰肉、牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、里脊肉、肥瘦分开、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、生的", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、烧烤","牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、生的","牛肉、后腿、上部后腿、牛排、肥瘦分开、切至1/8脂肪、特级、熟的、烧烤","牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、特级、熟的、烧烤","牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、特选级、熟的、油炸","牛肉、前腰肉、上等腰肉、肥瘦分开、切至1/8脂肪、优质、熟的、烧烤","牛肉、后腿、上部后腿、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、前腰肉、上等腰肉、牛排、肥瘦分开、切至1/8脂肪、优质、生的","牛肉、里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、上牛里脊肉、牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤","牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、特选级、生的","牛肉、后腿、指关节、尖部、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒","牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、特选级、生的","牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒","牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、特选级、生的","牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒","牛肉、前腰肉、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤","牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、后腿、指关节、尖头、牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、后腿、外腿肉、下腿肉、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒","牛肉、前腰肉、丁骨牛排、肥瘦分开、切至1/8脂肪、所有品级、熟的、烧烤","牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、所有品级、生的","牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、前腰肉、丁骨牛排、肥瘦分开、切至1/8脂肪、精选级、熟的、烧烤","牛肉、肩胛肉、肩肉、肩胛肉嫩、奖章、肥瘦分开、切至0脂肪、特选级、生的","牛肉、后腿、指关节、尖部、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒","牛肉、后腿、指关节、尖部、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒","牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒","牛肉、肩胛肉、肩胛肉、嫩肩、奖章、肥瘦分开、切至0脂肪、精选级、生的","牛肉、后腿、外腿肉、下腿肉、牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、肩胛肉、上刀刃、肥瘦分开、切至0脂肪、精选级、熟的、烧烤", "牛肉、肩胛肉、去骨、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、肩胛肉和中段牛排、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、上刀刃、牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、肩肉、肩胛肉嫩、奖章、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛肉、肩胛肉、肩胛肉和中心牛排、肥瘦分开、切至0脂肪、精选级、生的", "牛肉、肩胛肉、肩肉、肩胛肉嫩、奖章、肥瘦分开、切至0脂肪、特选级、熟的、铁扒", "牛肉、后腿、外腿肉、下腿肉、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、肩胛肉、模拟嫩牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、后腿、外腿肉、下腿肉、牛排、肥瘦分开、切至0脂肪、特选级、生的", "牛肉、肩胛肉、模拟嫩牛排、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、肩胛肉、烤土块、肥瘦分开、切至0脂肪、特选级、熟的、烤熟", "牛肉、肩胛肉、肩肉、肩胛肉嫩、奖章、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、肩胛肉、肩肉、肩胛肉嫩、奖章、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、肩胛肉、上刀刃、纯瘦肉、切至0脂肪、所有品级、熟的、烧烤", "牛肉、肩胛肉、模拟嫩牛排、肥瘦分开、切至0脂肪、美国农业部精选级、熟的、烧烤", "牛肉、肩胛肉、烤土块、肥瘦分开、切至0脂肪、精选级、熟的、烤熟", "牛肉、肩胛肉、上刀刃、肥瘦分开、切至0脂肪、特选级、熟的、烧烤", "牛肉、绞肉、75%瘦肉/25%脂肪、面包屑、熟的、煎棕色", "牛肉、肩胛肉、模拟嫩牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、后腿、外腿肉、下腿肉、牛排、肥瘦分开、切至0脂肪、所有品级、生的", "牛肉、后腿、指关节、尖端中心、牛排、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、里脊、下腰肉、三尖牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、绞肉、95%瘦肉/5%脂肪、肉饼、熟的、平底锅烧烤", "牛肉、肩胛肉、去骨、肥瘦分开、切至0脂肪、精选级、熟的、铁扒", "牛肉、绞肉、75%瘦肉/25%脂肪、肉饼、熟的、平底烤肉", "牛肉、绞肉、90%瘦肉/10%脂肪、面包屑、熟的、煎棕色", "牛肉、绞肉、80%瘦肉/20%脂肪、肉饼、熟的、烧烤", "牛肉、绞肉、80%瘦肉/20%脂肪、面包、熟的、烘焙", "牛肉、盘子、内裙边牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、绞肉、85%瘦肉/15%脂肪、肉饼、熟的、烧烤", "牛肉、肩胛肉、上刀刃、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、盘子、外裙边牛排、肥瘦分开、切至0脂肪、所有品级、熟的、烧烤", "牛肉、绞肉、80%瘦肉/20%脂肪、面包屑、熟的、煎棕色", "牛肉、绞肉、95%瘦肉/5%脂肪、面包、熟的、烘焙", "牛肉、绞肉、95%瘦肉/5%脂肪、碎肉、熟的、煎棕色", "牛肉、绞肉、75%瘦肉/25%脂肪、面包、熟的、烘焙", "牛肉、绞肉、85%瘦肉/15%脂肪、面包、熟的、烘焙", "牛肉、绞肉、85%瘦肉/15%脂肪、面包屑、熟的、煎棕色", "牛肉、绞肉、85%瘦肉/15%脂肪、肉饼、熟的、平底烤肉", "牛肉、肩胛肉、去骨、肥瘦分开、切至0脂肪、所有品级、熟的、铁扒", "牛肉、绞肉、80%瘦肉/20%脂肪、肉饼、熟的、平底烤肉", "牛肉、里脊肉、牛排、纯瘦肉、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、肩胛肉、烤土块、肥瘦分开、切至0脂肪、所有品级、熟的、烤熟", "牛肉、绞肉、90%瘦肉/10%脂肪、肉饼、熟的、平底烤肉", "牛肉、绞肉、90%瘦肉/10%脂肪、肉饼、熟的、烧烤", "牛肉、后腿、下腿肉、烤肉、纯瘦肉、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、绞肉、90%瘦肉/10%脂肪、面包、熟的、烘焙", "牛肉、肩胛肉、炖臂肉、纯瘦肉、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、上牛里脊肉、牛排、纯瘦肉、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、后腿、下腿肉、牛排、纯瘦肉、切至1/8脂肪、精选级、熟的、炖熟", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至1/8脂肪、特选级、熟的、烤熟", "牛肉、后腿肉、上部后腿肉、牛排、纯瘦肉、切至1/8脂肪、特选级、生的", "牛肉、胸肉、平底、纯瘦肉、切至1/8脂肪、特选级、熟的、炖熟", "牛肉、胸肉、平头、纯瘦肉、切至1/8脂肪、特选级、生的", "牛肉、后腿、上部后腿、牛排、纯瘦肉、切至1/8脂肪、精选级、熟的、烧烤", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至1/8脂肪、特选级、生的", "牛肉、前腰肉、上等腰肉、牛排、纯瘦肉、切至1/8脂肪、所有品级、熟的、烧烤", "牛肉、后腿肉、后腿肉、烤肉、纯瘦肉、切至1/8脂肪、精选级、熟的、烤熟", "牛肉、前腰肉、上腰肉、牛排、纯瘦肉、切至1/8脂肪、精选级、熟的、烧烤"

],
Bevcal:[ 29
  , 28
  , 174
  , 237
  , 31
  , 87
  , 41
  , 43
  , 153
  , 186
  , 125
  , 27
  , 164
  , 119
  , 110
  , 371
  , 383
  , 263
  , 231
  , 83
  , 231
  , 231
  , 160
  , 37
  , 250
  , 52
  , 49
  , 372
  , 46
  , 29
  , 398
  , 29
  , 224
  , 220
  , 37
  , 90
  , 65
  , 29
  , 85
  , 88
  , 87
  , 379
  , 83
  , 55
  , 37
  , 400
  , 4
  , 35
  , 85
  , 332
  , 83
  , 95
  , 75
  , 3
  , 43
  , 29
  , 41
  , 4
  , 45
  , 46
  , 2
  , 33
  , 88
  , 6
  , 14
  , 33
  , 358
  , 29
  , 86
  , 29
  , 4
  , 2
  , 89
  , 33
  , 29
  , 4
  , 46
  , 6
  , 217
  , 42
  , 49
  , 85
  , 33
  , 1
  , 400
  , 4
  , 46
  , 413
  , 46
  , 18
  , 49
  , 2
  , 47
  , 49
  , 101
  , 77
  , 39
  , 58
  , 217
  , 54

  , 40
  , 49
  , 49
  , 227
  , 1
  , 50
  , 257
  , 395
  , 509
  , 19
  , 134
  , 287
  , 226
  , 74
  , 83
  , 80
  , 85
  , 86
  , 83
  , 82
  , 82
  , 88
  , 76
  , 85
  , 83
  , 82
  , 220
  , 80
  , 51
  , 80
  , 82
  , 81
  , 81
  , 34
  , 112
  , 36
  , 81
  , 20
  , 43
  , 41
  , 1
  ,30
  , 40
  , 63
  , 41
  , 86
  , 82
  , 45
  , 61
  , 1
  , 20
  , 48
  , 5
  , 279
  , 460
  , 19
  , 41
  , 34
  , 41
  , 405
  , 2
  , 40
  , 350
  , 64
  , 54
  , 40
  , 257
  , 389
  , 47
  , 377
  , 315
  , 47
  , 3
  , 78
  , 162
  , 50
  , 372
  , 360
  , 88
  , 48
  , 196
  , 484
  , 41
  , 241
  , 378
  , 56
  , 127
  , 385
  , 37
  , 351
  , 57
  , 50
  , 411
  , 315
  , 389
  , 27
  , 386
  , 428
  , 49
  , 162

  , 247
  , 1
  , 406
  , 338
  , 51
  , 338
  , 37
  , 11
  , 148
  , 60
  ,60
  , 401
  , 60
  , 2
  , 29
  , 49
  , 326
  , 175
  , 329
  , 42
  , 1
  , 345
  , 1
  , 1
  , 47
  , 2
  , 45
  , 60
  , 113
  , 327
  , 49
  , 60
  , 172
  , 201
  ,60
  , 153],
Bevm:[ 29.5
  , 30
  , 31.4
  , 32.6
  , 29.5
  , 32.3
  , 29.8
  , 356
  , 30.4
  , 30.2
  , 30.5
  , 29.5
  , 29.4
  , 30.8
  , 31.1
  , 33.6
  , 17
  , 27.8
  , 27.8
  , 148
  , 27.8
  , 27.8
  , 29.5
  , 245
  , 27.8
  , 247
  , 246
  , 12
  , 248
  , 243
  , 28
  , 247
  , 1.8
  , 30
  , 245
  , 282
  , 185
  , 243
  , 265
  , 266
  , 265
  , 18
  , 29
  , 206
  , 30.5
  , 20
  , 238
  , 259
  , 29.4
  , 1.9
  , 29
  , 272
  , 256
  , 179
  , 247
  , 243
  , 246
  , 243
  , 246
  , 247
  , 179
  , 243
  , 265
  , 180
  , 264
  , 243
  , 2
  , 243
  , 265
  , 243
  , 238
  , 179
  , 266
  , 243
  , 243
  , 238
  , 240
  , 29
  , 2.5
  , 240
  , 246
  , 266
  , 243
  , 246
  , 20
  , 240
  , 246
  , 7.8
  , 240
  , 200
  , 246
  , 240
  , 240
  , 246
  , 391
  , 244
  , 209
  , 240
  , 8
  , 249

  , 30.2
  , 29.5
  , 244
  , 2
  , 240
  , 4.9
  , 6.4
  , 8
  , 1.7
  , 240
  , 29.1
  , 36
  , 25
  , 29.4
  , 29.4
  , 29.4
  , 29.4
  , 29.4
  , 29.3
  , 29.4
  , 29.4
  , 29.4
  , 29.5
  , 29.5
  , 29.4
  , 29.3
  , 29.6
  , 29.5
  , 30.9
  , 29.6
  , 29.5
  , 29.3
  , 29.5
  , 30.5
  , 30.8
  , 30.6
  , 29.3
  , 29.6
  , 31
  , 30.8
  , 29.6
  , 237
  , 30.8
  , 245
  , 30.7
  , 29.5
  , 30
  , 258
  , 250
  , 237
  , 29.6
  , 31
  , 250
  , 39
  , 13
  , 237
  , 30.7
  , 30.5
  , 30.7
  , 22
  , 30
  , 247
  , 1
  , 245
  , 253
  , 29.6
  , 6.4
  , 78
  , 248
  , 19
  , 0.7
  , 250
  , 239
  , 29.4
  , 35.2
  , 29.6
  , 21
  , 3
  , 29.4
  , 30.2
  , 36.5
  , 13
  , 30.8
  , 1
  , 18
  , 245
  , 23.5
  , 182
  , 30.7
  , 1.8
  , 250
  , 250
  , 21
  , 0.7
  , 22
  , 255
  , 26
  , 21
  , 248
  , 34.8
 
  , 36.4
  , 237
  , 13
  , 1.6
  , 250
  , 1.6
  , 237
  , 240
  , 166
  , 29.6
  , 29.6
  , 182
  , 29.6
  , 238
  , 192
  , 203
  , 34.8
  , 35.2
  , 21
  , 234
  , 29.6
  , 1.4
  , 29.6
  , 238
  , 237
  , 29.6
  , 250
  , 29.6
  , 23.5
  , 31.1
  , 248
  , 29.6
  , 35.3
  , 36.2
  , 29.6
  , 36.3],
  Bev2:["Alcoholic beverage, beer, light"
  , "Alcoholic beverage, beer, light, BUDWEISER SELECT"
  , "Alcoholic beverage, pina colada, prepared-from-recipe"
  , "Alcoholic beverage, pina colada, canned"
  , "Alcoholic beverage, beer, light, BUD LIGHT"
  , "Whiskey sour mix, bottled"
  , "Alcoholic beverage, beer, regular, BUDWEISER"
  , "Alcoholic beverage, beer, regular, all"
  , "Alcoholic beverage, whiskey sour, prepared from item 14028"
  , "Alcoholic beverage, daiquiri, prepared-from-recipe"
  , "Alcoholic beverage, daiquiri, canned"
  , "Alcoholic beverage, beer, light, MICHELOB ULTRA"
  , "Alcoholic beverage, whiskey sour, prepared with water, whiskey and powder mix"
  , "Alcoholic beverage, whiskey sour, canned"
  , "Alcoholic beverage, tequila sunrise, canned"
  , "Alcoholic beverage, creme de menthe, 72 proof"
  , "Whiskey sour mix, powder"
  , "Alcoholic beverage, distilled, gin, 90 proof"
  , "Alcoholic beverage, distilled, vodka, 80 proof"
  , "Alcoholic beverage, wine, table, all"
  , "Alcoholic beverage, distilled, rum, 80 proof"
  , "Alcoholic beverage, distilled, all (gin, rum, vodka, whiskey) 80 proof"
  , "Alcoholic beverage, wine, dessert, sweet"
  , "CAMPBELL Soup Company, V8 SPLASH Smoothies, Peach Mango"
  , "Alcoholic beverage, distilled, whiskey, 86 proof"
  , "Limeade, frozen concentrate, prepared with water"
  , "CAMPBELL Soup Company, V8 V. FUSION Juices, Peach Mango"
  , "Carob-flavor beverage mix, powder"
  , "Citrus fruit juice drink, frozen concentrate, prepared with water"
  , "Dairy drink mix, chocolate, reduced calorie, with aspartame, powder, prepared with water and ice"
  , "Cocoa mix, powder"
  , "Mixed vegetable and fruit juice drink, with added nutrients"
  , "Coffee, instant, decaffeinated, powder"
  , "Coffee, brewed, espresso, restaurant-prepared, decaffeinated"
  , "CAMPBELL Soup Company, V8 SPLASH Smoothies, Strawberry Banana"
  , "Chocolate syrup, prepared with whole milk"
  , "Coffee substitute, cereal grain beverage, powder, prepared with whole milk"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Orange Pineapple"
  , "Malted drink mix, chocolate, powder, prepared with whole milk"
  , "Strawberry-flavor beverage mix, powder, prepared with whole milk"
  , "Malted drink mix, chocolate, with added nutrients, powder, prepared with whole milk"
  , "Lemonade-flavor drink, powder"
  , "Alcoholic Beverage, wine, table, red, Cabernet Franc"
  , "Cocoa mix, powder, prepared with water"
  , "Beef broth and tomato juice, canned"
  , "Cocoa mix, NESTLE, Hot Cocoa Mix Rich Chocolate With Marshmallows"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Diet Strawberry Kiwi"
  , "Tea, instant, sweetened with sugar, lemon-flavored, without added ascorbic acid, powder, prepared"
  , "Alcoholic beverage, wine, table, red"
  , "Lemonade, low calorie, with aspartame, powder"
  , "Alcoholic Beverage, wine, table, red, Cabernet Sauvignon"
  , "Eggnog-flavor mix, powder, prepared with whole milk"
  , "Carob-flavor beverage mix, powder, prepared with whole milk"
  , "Coffee, instant, with chicory, prepared with water"
  , "Lemonade, frozen concentrate, pink, prepared with water"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Strawberry Banana"
  , "CAMPBELL Soup Company, V8 SPLASH Smoothies, Tropical Colada"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Diet Berry Blend"
  , "CAMPBELL Soup Company, V8 V. FUSION Juices, Acai Berry"
  , "Fruit punch drink, frozen concentrate, prepared with water"
  , "Coffee, instant, regular, prepared with water"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Fruit Medley"
  , "Malted drink mix, natural, powder, prepared with whole milk"
  , "Coffee substitute, cereal grain beverage, prepared with water"
  , "Lemonade, powder, prepared with water"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Orchard Blend"
  , "Coffee substitute, roasted grain beverage, NATURAL TOUCH KAFFREE ROMA, powder"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Berry Blend"
  , "Malted drink mix, natural, with added nutrients, powder, prepared with whole milk"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Tropical Blend"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Diet Tropical Blend"
  , "Coffee, instant, decaffeinated, powder, prepared with water"
  , "Chocolate-flavor beverage mix for milk, powder, with added nutrients, prepared with whole milk"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Mango Peach"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Strawberry Kiwi"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Diet Fruit Medley"
  , "Energy drink, AMP"
  , "Wine, non-alcoholic"
  , "Orange-flavor drink, breakfast type, low calorie, powder"
  , "Energy Drink, Monster"
  , "CAMPBELL Soup Company, V8 V. FUSION Juices, Tropical"
  , "Chocolate-flavor beverage mix, powder, prepared with whole milk"
  , "CAMPBELL Soup Company, V8 SPLASH Juice Drinks, Guava Passion Fruit"
  , "Energy drink, VAULT Zero, sugar-free, citrus flavor"
  , "Cocoa mix, NESTLE, Rich Chocolate Hot Cocoa Mix"
  , "Energy drink, ROCKSTAR, sugar free"
  , "Beverages, vegetable and fruit juice blend, 100% juice, with added vitamins A, C, E"
  , "Beverage, Horchata, dry mix, unprepared, variety of brands, all with morro seeds"
  , "Energy drink, FULL THROTTLE"
  , "Water, with corn syrup and/or sugar and low calorie sweetener, fruit flavored"
  , "CAMPBELL Soup Company, V8 V. FUSION Juices, Strawberry Banana"
  , "Energy drink, AMP, sugar free"
  , "Rice drink, unsweetened, with added calcium, vitamins A and D"
  , "Energy drink, VAULT, citrus flavor"
  , "Meal supplement drink, NESTLE, SUPLIGEN, canned, peanut flavor"
  , "Ready-to-drink reduced fat milk beverage, flavored and sweetened, with added calcium, vitamin A and vitamin D"
  , "Beverages, fruit juice drink, reduced sugar, with vitamin E added"
  , "Energy drink, ROCKSTAR"
  , "Fruit-flavored drink, dry powdered mix, low calorie, with aspartame"
  , "Orange juice drink"
  
  , "Corn beverage"
  , "Alcoholic beverage, wine, light"
  , "Chocolate-flavored drink, whey and milk based"
  , "Fruit-flavored drink, powder, with high vitamin C with other added vitamins, low calorie"
  , "Apple cider-flavored drink, powder, low calorie, with vitamin C, prepared"
  , "Alcoholic beverage, wine, cooking"
  , "Coffee and cocoa (mocha) powder, with whitener and low calorie sweetener"
  , "Apple cider-flavored drink, powder, added vitamin C and sugar"
  , "Coffee, dry, powder, with whitener, reduced calorie"
  , "Cranberry-apple juice drink, low calorie, with vitamin C added"
  , "Alcoholic beverage, rice (sake)"
  , "Cocktail mix, non-alcoholic, concentrated, frozen"
  , "Fruit-flavored drink mix, powder, unsweetened"
  , "Alcoholic Beverage, wine, table, red, Carignane"
  , "Alcoholic Beverage, wine, table, red, Claret"
  , "Alcoholic Beverage, wine, table, red, Lemberger"
  , "Alcoholic Beverage, wine, table, red, Barbera"
  , "Alcoholic Beverage, wine, table, red, Sangiovese"
  , "Alcoholic beverage, wine, table, white, Pinot Gris (Grigio)"
  , "Alcoholic beverage, wine, table, white"
  , "Alcoholic Beverage, wine, table, red, Pinot Noir"
  , "Alcoholic Beverage, wine, table, red, Zinfandel"
  , "Alcoholic beverage, wine, table, white, Muller Thurgau"
  , "Alcoholic Beverage, wine, table, red, Petite Sirah"
  , "Alcoholic Beverage, wine, table, red, Syrah"
  , "Alcoholic beverage, wine, table, white, Fume Blanc"
  , "Carbonated beverage, club soda"
  , "Alcoholic beverage, wine, table, white, Chenin Blanc"
  , "Carbonated beverage, cream soda"
  , "Alcoholic beverage, wine, table, white, Riesling"
  , "Alcoholic beverage, wine, table, white, Semillon"
  , "Alcoholic beverage, wine, table, white, Sauvignon Blanc"
  , "Alcoholic beverage, wine, table, white, Gewurztraminer"
  , "Carbonated beverage, ginger ale"
  , "Alcoholic beverage, wine, table, white, late harvest"
  , "Tea, ready-to-drink, NESTLE, COOL NESTEA ice tea lemon flavor"
  , "Alcoholic beverage, wine, table, white, Pinot Blanc"
  , "Carbonated beverage, low calorie, other than cola or pepper,  without caffeine"
  , "Carbonated beverage, grape soda"
  , "Carbonated beverage, lemon-lime soda, contains caffeine"
  , "Carbonated beverage, low calorie, cola or pepper-type, with aspartame, without caffeine"
  , "Coffee, brewed from grounds, prepared with tap water, decaffeinated"
  , "Carbonated beverage, SPRITE, lemon-lime, without caffeine"
  , "Cranberry-apple juice drink, bottled"
  , "Carbonated beverage, cola, with higher caffeine"
  , "Alcoholic Beverage, wine, table, red, Burgundy"
  , "Alcoholic beverage, wine, table, white, Muscat"
  , "Energy drink, RED BULL, with added caffeine, niacin, pantothenic acid, vitamins B6 and B12"
  , "Grape drink, canned"
  , "Coffee, brewed from grounds, prepared with tap water"
  , "Carbonated beverage, reduced sugar, cola, contains caffeine and sweeteners"
  , "Carbonated beverage, orange"
  , "Energy drink, RED BULL, sugar free, with added caffeine, niacin, pantothenic acid, vitamins B6 and B12"
  , "Chocolate syrup"
  , "Coffee, instant, with sugar, mocha-flavor, powder"
  , "Cranberry juice cocktail, bottled, low calorie, with calcium, saccharin and corn sweetener"
  , "Carbonated beverage, cola, without caffeine"
  , "Carbonated beverage, tonic water"
  , "Carbonated beverage, pepper-type, contains caffeine"
  , "Chocolate-flavor beverage mix for milk, powder, without added nutrients"
  , "Coffee, brewed, espresso, restaurant-prepared"
  , "Lemonade, frozen concentrate, white, prepared with water"
  , "Coffee, instant, regular, powder, half the caffeine"
  , "Cranberry-apricot juice drink, bottled"
  , "Cranberry juice cocktail, bottled"
  , "Carbonated beverage, low calorie, other than cola or pepper, with aspartame, contains caffeine"
  , "Coffee and cocoa (mocha) powder, with whitener and low calorie sweetener, decaffeinated"
  , "Malted drink mix, chocolate, with added nutrients, powder"
  , "Fruit punch drink, with added nutrients, canned"
  , "Cocoa mix, no sugar added, powder"
  , "Tea, instant, unsweetened, powder, decaffeinated"
  , "Pineapple and grapefruit juice drink, canned"
  , "Lemonade, low calorie, with aspartame, powder, prepared with water"
  , "Alcoholic Beverage, wine, table, red, Gamay"
  , "Citrus fruit juice drink, frozen concentrate"
  , "Carbonated beverage, low calorie, cola or pepper-types, with sodium saccharin, contains caffeine"
  , "Malted drink mix, natural, with added nutrients, powder"
  , "Coffee substitute, cereal grain beverage, powder"
  , "Alcoholic Beverage, wine, table, red, Mouvedre"
  , "Clam and tomato juice, canned"
  , "Lemonade, frozen concentrate, white"
  , "Coffee, instant, with sugar, french-flavor, powder"
  , "Carbonated beverage, root beer"
  , "Coffee, instant, regular, powder"
  , "Lemonade, powder"
  , "Cranberry-grape juice drink, bottled"
  , "Shake, fast food, chocolate"
  , "Tea, instant, sweetened with sugar, lemon-flavored, without added ascorbic acid, powder,  decaffeinated"
  , "Carbonated beverage, cola, contains caffeine"
  , "Coffee, instant, with chicory, powder"
  , "Grape juice drink, canned"
  , "Pineapple and orange juice drink, canned"
  , "Malted drink mix, chocolate, powder"
  , "Tea, instant, unsweetened, powder"
  , "Strawberry-flavor beverage mix, powder"
  , "Lemonade-flavor drink, powder, prepared with water"
  , "Orange-flavor drink, breakfast type, powder"
  , "Malted drink mix, natural, powder"
  , "Orange drink, canned, with added vitamin C"
  , "Fruit punch drink, frozen concentrate"

  , "Limeade, frozen concentrate"
  , "Tea, brewed, prepared with tap water"
  , "Coffee, instant, with sugar, cappuccino-flavor powder"
  , "Tea, instant, sweetened with sodium saccharin, lemon-flavored, powder"
  , "Orange and apricot juice drink, canned"
  , "Tea, instant, sweetened with sodium saccharin, lemon-flavored, powder, decaffeinated"
  , "Malt beverage"
  , "Sports drink, fruit-flavored, low calorie, ready-to-drink"
  , "Shake, fast food, vanilla"
  , "Water, bottled, POLAND SPRING"
  , "Water, tap, well"
  , "Tea, instant, sweetened with sugar, lemon-flavored, without added ascorbic acid, powder"
  , "Water, tap, drinking"
  , "Tea, instant, sweetened with sodium saccharin, lemon-flavored, prepared"
  , "Cocoa mix, with aspartame, powder, prepared with water"
  , "Orange-flavor drink, breakfast type, powder, prepared with water"
  , "Alcoholic beverage, liqueur, coffee, 53 proof"
  , "Fruit punch juice drink, frozen concentrate"
  , "Dairy drink mix, chocolate, reduced calorie, with low-calorie sweeteners, powder"
  , "Fruit punch juice drink, frozen concentrate, prepared with water"
  , "Tea, herb, other than chamomile, brewed"
  , "Tea, instant, unsweetened, lemon-flavored, powder"
  , "Tea, brewed, prepared with tap water, decaffeinated"
  , "Tea, instant, unsweetened, powder, prepared"
  , "Cranberry juice cocktail, frozen concentrate, prepared with water"
  , "Carbonated beverage, low calorie, cola or pepper-type, with aspartame, contains caffeine"
  , "Orange drink, breakfast type, with juice and pulp, frozen concentrate, prepared with water"
  , "Water, bottled, non-carbonated, DANNON"
  , "Shake, fast food, strawberry"
  , "Alcoholic beverage, liqueur, coffee with cream, 34 proof"
  , "Orange-flavor drink, breakfast type, with pulp, frozen concentrate, prepared with water"
  , "Water, bottled, PERRIER"
  , "Orange-flavor drink, breakfast type, with pulp, frozen concentrate"
  , "Cranberry juice cocktail, frozen concentrate"
  , "Water, tap, municipal"
  , "Orange drink, breakfast type, with juice and pulp, frozen concentrate"],
  Bev:["淡啤酒", "浓啤酒", "酸威士忌，瓶装", "可乐果，罐装", "百威啤酒，清淡", "果酒", "雪花啤酒", "黛奎里白兰地", "酒精饮料，酸威士忌", "普通大麦啤酒", "鸡尾酒", "酒精饮料，酸威士忌加水", "酒精饮料，百威低卡小麦啤酒", "酒精饮料，代奎里，罐装", "酒精饮料，酸威士忌，罐装", "酒精饮料，龙舌兰，罐装", "酒精饮料，蒸馏，伏特加，80度", "威士忌酸混合酒", "酒精饮料，杜松子酒，90度", "酒精饮料、加气起泡葡萄酒", "酒精饮料，甜葡萄酒", "酒精饮料，朗姆酒，80度", "桃芒果冰沙", "朗姆酒，70度", "角豆风味混合饮料", "酒精饮料，蒸馏，威士忌，86度", "松子酒，60度", "柑橘果汁饮料，冷冻浓缩，用水配制", "坎贝尔汤公司，桃芒果融合果汁", "乳制品饮料混合物", "巧克力糖浆，用全脂牛奶调制", "浓缩雀巢咖啡", "可可粉混合物冲剂饮料", "坎贝尔汤公司，草莓香蕉冰沙", "雀巢咖啡、速溶", "谷物饮料，用全脂牛奶配制", "坎贝尔汤公司，橙汁菠萝果汁饮料，", "麦芽饮料混合物，用全脂牛奶配制", "蔬菜果汁混合饮料", "草莓味饮料混合物，用全脂牛奶配制", "牛肉汤罐装", "酒精饮料，红葡萄酒", "柠檬味饮料", "可可混合饮料", "麦芽混合饮料、用全脂牛奶配制", "酒精饮料，白葡萄酒", "柠檬水，低热量", "热可可巧克力混合饮料", "柠檬茶", "金宝汤公司、无糖草莓猕猴桃果汁饮料，", "番茄汁", "菊苣咖啡，速溶", "角豆风味混合饮料，用全脂牛奶配制", "草莓柠檬饮料", "蛋酒风味混合物，，用全脂牛奶配制", "坎贝尔汤公司，草莓香蕉果汁饮料，", "坎贝尔汤公司，无糖浆果混合物果汁饮料，", "坎贝尔汤公司，浆果融合果汁", "坎贝尔汤公司，热带可乐冰沙，", "芒果果汁饮料", "坎贝尔汤公司，果园混合饮料", "百香果柠檬饮料", "雀巢浓咖啡", "谷物饮料", "坎贝尔汤公司，水果混合饮料", "麦芽混合饮料", "咖啡替代品，烘焙谷物饮料", "坎贝尔汤公司，浆果饮料", "坎贝尔汤公司，热带混合果汁饮料", "天然麦芽混合饮料", "坎贝尔汤公司，V热带果混饮饮料", "坎贝尔汤公司，无糖水果混合饮料", "巧克力味牛奶", "雀巢速溶咖啡", "金宝汤公司，草莓猕猴桃果汁饮料，", "橙汁饮料", "体质能量饮料", "魔爪能量饮料", "葡萄饮料", "坎贝尔汤公司，芒果桃果汁饮料，", "巧克力味饮料混合物", "摇滚明星能量饮料", "坎贝尔汤公司，热带融合果汁", "雀巢巧克力热可可混合物", "零度柑橘口味能量饮料", "缤纷果汁饮料", "蔬菜和果汁混合饮料", "坎贝尔汤公司，番石榴西番莲果汁饮料，", "乐虎能量饮料", "玉米糖浆", "金库柑橘口味能量饮料", "还原糖果汁饮料", "AMP无糖能量饮料", "花生味膳食补充饮料，", "米酒", "草莓香蕉融合果汁，", "即食低脂牛奶饮料", "蓝莓味饮料", "橙汁饮料", "公牛能量饮料","葡萄味果汁饮料", "巧克力味饮料", "酒精饮料，淡葡萄酒", "水果味饮料含高维生素C和其他维生素，低热量", "苹果酒风味饮料，低热量，含维生素C", "玉米饮料", "苹果酒味饮料，添加维生素C和糖", "小红莓苹果汁饮料，低热量，添加维生素C", "可可冲剂，低热量甜味剂", "干咖啡、低热量", "果味饮料混合物，未加糖", "鸡尾酒混合物，不含酒精", "酒精饮料，清酒", "酒精饮料，加勒比红葡萄酒", "酒精饮料，桑吉奥维斯葡萄酒，红色，", "酒精饮料，莱姆伯格葡萄酒", "酒精饮料，巴贝拉红葡萄酒", "酒精饮料，白葡萄酒", "酒精饮料，灰比诺白葡萄酒", "酒精饮料，红葡萄酒", "酒精饮料，仙粉黛红葡萄酒", "酒精饮料，白烟白葡萄酒", "酒精饮料、Muller Thurgau白葡萄酒，", "酒精饮料，黑比诺红葡萄酒", "酒精饮料，西拉红葡萄酒", "葡萄味苏拉饮料", "碳酸饮料、苏打水", "酒精饮料，白藜芦白葡萄酒", "碳酸饮料，奶油汽水", "酒精饮料，雷司令白葡萄酒，", "酒精饮料，晚收白葡萄酒，", "酒精饮料，长城白葡萄酒，", "碳酸饮料，姜汁汽水", "酒精饮料，赛美蓉白葡萄酒，", "清凉雀巢冰茶柠檬味", "酒精饮料、格乌尔茨特拉米纳白葡萄酒，", "碳酸饮料，葡萄汽水", "碳酸饮料，柠檬酸苏打，含咖啡因", "酒精饮料，白比诺白葡萄酒", "低热量碳酸饮料，可乐", "蔓越莓苹果汁饮料，瓶装", "咖啡饮料", "碳酸饮料，雪碧", "酒精饮料，勃艮第红葡萄酒", "碳酸饮料、芬达橙味汽水", "酒精饮料、波尔多白葡萄酒", "咖啡风味饮品", "葡萄汁饮料", "能量饮料，红牛，添加咖啡因，烟酸，泛酸，维生素B6和B12", "碳酸饮料，可乐，含较高咖啡因", "碳酸饮料，还原糖，可乐，含咖啡因和甜味剂", "碳酸饮料，橙汁", "摩卡咖啡", "能量饮料，红牛，无糖，添加咖啡因，烟酸，泛酸，维生素B6和B12", "碳酸饮料、可乐、不含咖啡因", "巧克力糖浆", "蔓越莓汁鸡尾酒，瓶装，低热量，含钙、糖精和玉米甜味剂", "巧克力味牛奶混合饮料", "碳酸饮料、柠檬味汽水", "碳酸饮料，苹果味汽水", "柠檬味饮料", "蔓越莓杏汁饮料，瓶装", "蔓越莓汁鸡尾酒，瓶装", "浓缩摩卡咖啡", "可可饮料", "低卡路里碳酸饮料", "麦芽巧克力混合饮料", "摩卡速溶咖啡", "草莓果汁饮料", "可可牛奶饮品", "茉莉花茶饮料", "铁观音茶饮料", "柑橘果汁饮料", "酒精饮料，加迈酒", "菠萝葡萄柚汁饮料，罐装", "红茶饮料", "天然麦芽混合饮料", "酒精饮料，穆维德葡萄酒，", "玉米糖浆", "蛤蜊番茄汁，罐装", "根啤", "黑啤", "菊花茶饮料", "法式速溶咖啡", "蔓越莓葡萄汁饮料，瓶装", "巧克力奶昔", "桃味饮料", "百香果汁", "大红袍茶饮料", "中啡速溶咖啡", "", "葡萄汁饮料，罐装", "柠檬水风味饮料", "菠萝橙汁饮料，罐装", "草莓味混合饮料，粉末", "橙汁饮料，罐装，添加维生素C", "橙汁饮料，早餐型，粉末", "奇异果果汁饮料", "天然麦芽混合饮料", "麦芽混合饮料、巧克力、粉末","绿茶饮料", "柠檬茶饮料", "卡布奇诺饮料", "橙汁杏汁饮料，罐装", "酸梅汤", "波兰泉水瓶装水", "香草奶昔", "麦芽饮料", "青柠味运动饮料", "普洱茶饮料", "龙井茶饮料", "小甘菊茶饮料", "利口酒，53度", "毛尖茶饮料", "橙汁饮料，早餐型，粉末", "杨梅果汁饮料", "伏茶饮料", "可可混合冲剂", "柚子果汁", "巧克力乳制品饮料混合饮料", "香草味饮料", "蔓越莓汁鸡尾酒", "碧螺春茶饮料", "黄瓜味能量饮料", "乌龙茶饮料", "雀舌茶饮料", "奶油咖啡饮料", "柠檬苏打水", "草莓奶昔", "橙汁果肉饮料", "蓝莓果汁饮料", "黄茶饮料", "矿泉水", "参茶饮料", "青梅茶饮料", "桃汁饮料"],
  Brecal:[402
    , 260
    , 402
    , 250
    , 405
    , 366
    , 416
    , 359
    , 365
    , 378
    , 398
    , 318
    , 384
    , 381
    , 386
    , 373
    , 333
    , 333
    , 489
    , 343
    , 373
    , 377
    , 395
    , 367
    , 367
    , 402
    , 364
    , 361
    , 393
    , 399
    , 401
    , 320
    , 367
    , 379
    , 333
    , 400
    , 382
    , 317
    , 383
    , 429
    , 388
    , 405
    , 407
    , 398
    , 389
    , 319
    , 322
    , 367
    , 360
    , 287
    , 398
    , 387
    , 405
    , 394
    , 347
    , 384
    , 360
    , 385
    , 370
    , 372
    , 76
    , 382
    , 71
    , 359
    , 366
    , 438
    , 379
    , 72
    , 69
    , 349
    , 370
    , 370
    , 52
    , 55
    , 50
    , 360
    , 62
    , 373
    , 366
    , 361
    , 72
    , 53
    , 88
    , 71
    , 87
    , 101
    , 361
    , 379
    , 352
    , 68
    , 385
    , 107
    , 76
    , 370
    , 375
    , 71
    , 366
    , 365
    , 378
    , 357

    , 100
    , 341
    , 360
    , 337
    , 342
    , 364
    , 371
    , 322
    , 415
    , 62
    , 402
    , 366
    , 61
    , 56
    , 340
    , 368
    , 71
    , 433
    , 53
    , 394
    , 71
    , 382
    , 71
    , 53
    , 50
    , 62
    , 333
    , 387
    , 374
    , 65
    , 369
    , 62
    , 371
    , 76
    , 71
    , 59
    , 59
    , 352
    , 61
    , 59
    , 52
    , 59
    , 65
    , 71
    , 383
    , 60
    , 53
    , 400
    , 378
    , 411
    , 396
    , 405
    , 366
    , 373
    , 467
    , 390
    , 386
    , 417
    , 379
    , 384
    , 372
    , 200
    , 364
    , 349
    , 365
    , 371
    , 72
    , 365
    , 382
    , 382
    , 367
    , 309
    , 331
    , 377
    , 350
    , 364
    , 373
    , 192
    , 358
    , 400
    , 378
    , 382
    , 385
    , 384
    , 384
    , 414
    , 386
    , 400
    , 379
    , 366
    , 354
    , 377
    , 412
    , 392
    , 430
    , 374
    , 365
    , 380
    , 357
    , 336

    , 408
    , 339
    , 404
    , 391
    , 371
    , 322
    , 376
    , 401
    , 337
    , 393
    , 367
    , 408
    , 373
    , 415
    , 365
    , 394
    , 381
    , 381
    , 357
    , 107
    , 396
    , 347
    , 316
    , 371
    , 200
    , 359
    , 328
    , 284
    , 372
    , 399
    , 384
    , 370
    , 365
    , 347
    , 107
    , 366
    , 389
    , 377
    , 102
    , 119
    , 96
    , 387
    , 346
    , 363
    , 344
    , 385
    , 353
    , 121
    , 368
    , 120
    , 108
    , 364
    , 353
    , 369
    , 330
    , 368
    , 356
    , 359
    , 431
    , 394
    , 107
    , 359
    , 349
    , 105
    , 360
    , 395
    , 121
    , 100
    , 377
    , 433
    , 396
    , 362
    , 361
    , 443
    , 390
    , 397
    , 377
    , 395
    , 345
    , 402
    , 401
    , 431
    , 388
    , 404
    , 342
    , 386
    , 357
    , 347
    , 327
    , 384
    , 44
    , 378
    , 350
    , 367
    , 366
    , 439
    , 409
    , 438
    , 403
    , 370
   
    , 310
    , 383
    , 397
    , 406
    , 439
    , 42
    , 433
    , 406
    , 362
    , 353
    , 347
    , 376
    , 373
    , 381
    , 340
    , 410
    , 374
    , 378
    , 390
    , 362
    , 52
    , 367
    , 367
    , 55
    , 376
    , 381
    , 356
    , 382
    , 379
    , 56
    , 422
    , 301
    , 56
    , 370
    , 380
    , 355
    , 400
    , 393
    , 411
    , 311
    , 335
    , 370
    , 374
    , 353
    , 403
    , 321
    , 352
    , 380
    , 400
    , 373
    , 359
    , 363
    , 318
    , 375
    , 384
    , 367
    , 350
    , 368
    , 355
    , 410
    , 398
    , 388
    , 373
    , 340
    , 407
    , 377
    , 422
    , 408
    , 385
    , 352
    , 388
    , 353
    , 388
    , 334
    , 354
    , 394
    , 353],
  Brem:[26
    , 31
    , 27
    , 30
    , 32
    , 28
    , 27
    , 58
    , 29
    , 30
    , 30
    , 29
    , 30
    , 31
    , 31
    , 32
    , 55
    , 27
    , 122
    , 51
    , 29
    , 26
    , 32
    , 28
    , 30
    , 49
    , 33
    , 28
    , 28
    , 25
    , 30
    , 30
    , 31
    , 31
    , 30
    , 32
    , 27
    , 59
    , 14
    , 48
    , 27
    , 27
    , 27
    , 27
    , 32
    , 30
    , 59
    , 30
    , 28
    , 29
    , 30
    , 33
    , 30
    , 31
    , 27
    , 32
    , 47
    , 52
    , 156
    , 14
    , 219
    , 113
    , 257
    , 29
    , 28
    , 31
    , 29
    , 28
    , 141
    , 28
    , 46
    , 173
    , 244
    , 240
    , 251
    , 176
    , 241
    , 35
    , 178
    , 28
    , 142
    , 240
    , 150
    , 234
    , 149
    , 155
    , 165
    , 81
    , 151
    , 234
    , 94
    , 240
    , 249
    , 46
    , 28
    , 240
    , 43
    , 35
    , 30
    , 141

    , 240
    , 118
    , 43
    , 46
    , 94
    , 12
    , 156
    , 93
    , 27
    , 242
    , 14
    , 15
    , 241
    , 243
    , 49
    , 170
    , 234
    , 29
    , 253
    , 30
    , 240
    , 55
    , 257
    , 253
    , 251
    , 242
    , 40
    , 49
    , 165
    , 233
    , 176
    , 241
    , 156
    , 249
    , 240
    , 243
    , 242
    , 52
    , 241
    , 242
    , 244
    , 242
    , 233
    , 240
    , 55
    , 242
    , 233
    , 60
    , 56
    , 27
    , 30
    , 30
    , 28
    , 32
    , 57
    , 55
    , 35
    , 51
    , 60
    , 49
    , 57
    , 30
    , 40
    , 44
    , 28
    , 55
    , 193
    , 37
    , 62
    , 57
    , 27
    , 53
    , 55
    , 29
    , 30
    , 49
    , 30
    , 26
    , 55
    , 30
    , 28
    , 27
    , 27
    , 33
    , 33
    , 31
    , 55
    , 30
    , 26
    , 53
    , 53
    , 60
    , 30
    , 31
    , 30
    , 30
    , 29
    , 60
    , 55
    , 19
   
    , 53
    , 30
    , 30
    , 34
    , 54
    , 9
    , 33
    , 32
    , 37
    , 30
    , 54
    , 60
    , 32
    , 30
    , 50
    , 33
    , 33
    , 30
    , 33
    , 165
    , 30
    , 37
    , 53
    , 40
    , 16
    , 31
    , 47
    , 52
    , 54
    , 30
    , 49
    , 46
    , 55
    , 41
    , 162
    , 14
    , 50
    , 53
    , 162
    , 167
    , 159
    , 30
    , 28
    , 28
    , 59
    , 30
    , 31
    , 173
    , 41
    , 173
    , 166
    , 28
    , 54
    , 32
    , 50
    , 29
    , 52
    , 40
    , 55
    , 32
    , 166
    , 28
    , 29
    , 165
    , 43
    , 29
    , 173
    , 162
    , 31
    , 30
    , 15
    , 35
    , 59
    , 30
    , 30
    , 27
    , 45
    , 33
    , 55
    , 29
    , 15
    , 30
    , 55
    , 27
    , 56
    , 51
    , 28
    , 52
    , 55
    , 30
    , 268
    , 29
    , 50
    , 30
    , 60
    , 31
    , 22
    , 31
    , 55
    , 55
   
    , 29
    , 49
    , 55
    , 30
    , 31
    , 268
    , 30
    , 30
    , 40
    , 33
    , 52
    , 43
    , 32
    , 33
    , 54
    , 55
    , 43
    , 28
    , 55
    , 40
    , 231
    , 60
    , 30
    , 237
    , 31
    , 53
    , 58
    , 30
    , 29
    , 244
    , 52
    , 52
    , 245
    , 27
    , 52
    , 33
    , 21
    , 31
    , 32
    , 55
    , 58
    , 27
    , 28
    , 49
    , 30
    , 60
    , 50
    , 27
    , 30
    , 32
    , 33
    , 30
    , 55
    , 55
    , 30
    , 55
    , 55
    , 51
    , 33
    , 30
    , 29
    , 30
    , 57
    , 85
    , 31
    , 54
    , 59
    , 53
    , 55
    , 113
    , 122
    , 47
    , 32
    , 59
    , 21
    , 30
    , 38],
  Bre2:["Cereals ready-to-eat, QUAKER, CAP'N CRUNCH with CRUNCHBERRIES"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S ALL-BRAN Original"
  , "Cereals ready-to-eat, QUAKER, CAP'N CRUNCH"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S ALL-BRAN BRAN BUDS"
  , "Cereals ready-to-eat, POST, ALPHA-BITS"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S APPLE JACKS"
  , "Cereals ready-to-eat, QUAKER, CAP'N CRUNCH'S PEANUT BUTTER CRUNCH"
  , "Cereals ready-to-eat, POST, GRAPE-NUTS Cereal"
  , "Cereals ready-to-eat, wheat and malt barley flakes"
  , "Cereals ready-to-eat, GENERAL MILLS, GOLDEN GRAHAMS"
  , "Cereals ready-to-eat, POST, COCOA PEBBLES"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S COMPLETE Wheat Flakes"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S FROSTED RICE KRISPIES"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S COCOA KRISPIES"
  , "Cereals ready-to-eat, QUAKER, KING VITAMAN"
  , "Cereals ready-to-eat, QUAKER, QUAKER OAT LIFE, plain"
  , "Cereals ready-to-eat, GENERAL MILLS, WHEATIES Raisin Bran"
  , "Cereals ready-to-eat, QUAKER, QUAKER CRUNCHY BRAN"
  , "Cereals ready-to-eat, granola, homemade"
  , "Cereals ready-to-eat, KELLOGG'S FROSTED MINI-WHEATS, original"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S FROOT LOOPS"
  , "Cereals ready-to-eat, GENERAL MILLS, COOKIE CRISP"
  , "Cereals ready-to-eat, POST, Honeycomb Cereal"
  , "Cereals ready-to-eat, GENERAL MILLS, CHEERIOS"
  , "Cereals ready-to-eat, GENERAL MILLS, KIX"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S CRACKLIN' OAT BRAN"
  , "Cereals ready-to-eat, Ralston Crispy Rice"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Corn Flakes"
  , "Cereals ready-to-eat, GENERAL MILLS, HONEY NUT CHEERIOS"
  , "Cereals ready-to-eat, corn flakes, low sodium"
  , "Cereals ready-to-eat, POST, FRUITY PEBBLES"
  , "Cereals ready-to-eat, bran flakes, single brand"
  , "Cereals ready-to-eat, GENERAL MILLS, Corn CHEX"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S SPECIAL K"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S PRODUCT 19"
  , "Cereals ready-to-eat, GENERAL MILLS, Honey Nut CHEX"
  , "Cereals ready-to-eat, GENERAL MILLS, Rice CHEX"
  , "Cereals ready-to-eat, POST Raisin Bran Cereal"
  , "Cereals ready-to-eat, QUAKER, QUAKER Puffed Rice"
  , "Cereals ready-to-eat, QUAKER, 100% Natural Granola Oats and Honey"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Honey SMACKS"
  , "Cereals ready-to-eat, QUAKER, SWEET CRUNCH/QUISP"
  , "Cereals ready-to-eat, GENERAL MILLS, LUCKY CHARMS"
  , "Cereals ready-to-eat, POST, Golden Crisp"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S CORN POPS"
  , "Cereals ready-to-eat, GENERAL MILLS, Whole Grain TOTAL"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S RAISIN BRAN"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S FROSTED FLAKES"
  , "Cereals ready-to-eat, POST TOASTIES corn flakes"
  , "Cereals ready-to-eat, POST, 100% Bran Cereal"
  , "Cereals ready-to-eat, Ralston TASTEEOS"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S RICE KRISPIES"
  , "Cereals ready-to-eat, WAFFELOS"
  , "Cereals ready-to-eat, MALT-O-MEAL, CORN BURSTS"
  , "Cereals ready-to-eat, GENERAL MILLS, WHEATIES"
  , "Cereals ready-to-eat, GENERAL MILLS, TRIX"
  , "Cereals ready-to-eat, GENERAL MILLS, Wheat CHEX"
  , "Cereals ready-to-eat, POST, Honey Nut Shredded Wheat"
  , "Cereals, corn grits, white, regular and quick, enriched, dry"
  , "Cereals ready-to-eat, QUAKER, KRETSCHMER Honey Crunch Wheat Germ"
  , "Cereals, QUAKER, corn grits, instant, plain, prepared (microwaved or boiling water added), without salt"
  , "Cereals ready-to-eat, wheat germ, toasted, plain"
  , "Cereals, corn grits, white, regular and quick, enriched, cooked with water, without salt"
  , "Cereals, QUAKER, corn grits, instant, plain, dry"
  , "Cereals, QUAKER, corn grits, instant, cheddar cheese flavor, dry"
  , "Cereals ready-to-eat, GENERAL MILLS, French Toast Crunch"
  , "Cereals ready-to-eat, GENERAL MILLS, Multi-Grain Cheerios"
  , "Cereals, QUAKER, corn grits, instant, cheddar cheese flavor, prepared with water"
  , "Cereals, QUAKER, corn grits, instant, country bacon (imitation bacon bits), prepared with water"
  , "Cereals, QUAKER, corn grits, instant, with imitation bacon bits, dry"
  , "Cereals, CREAM OF RICE, dry"
  , "Cereals, CREAM OF WHEAT, regular, 10 minute cooking, dry"
  , "Cereals, CREAM OF RICE, cooked with water, without salt"
  , "Cereals, farina, enriched, assorted brands including CREAM OF WHEAT, quick (1-3 minutes), cooked with water, without salt"
  , "Cereals, CREAM OF WHEAT, regular (10 minute), cooked with water, without salt"
  , "Cereals, farina, enriched, assorted brands including CREAM OF WHEAT, quick (1-3 minutes), dry"
  , "Cereals, CREAM OF WHEAT, instant, prepared with water, without salt"
  , "Cereals, CREAM OF WHEAT, mix'n eat, apple, banana and maple flavored, dry"
  , "Cereals, CREAM OF WHEAT, instant, dry"
  , "Cereals, CREAM OF WHEAT, mix'n eat, plain, dry"
  , "Cereals, CREAM OF WHEAT, mix'n eat, plain, prepared with water"
  , "Cereals, farina, enriched, cooked with water, without salt"
  , "Cereals, CREAM OF WHEAT, mix'n eat, apple, banana and maple flavored, prepared"
  , "Cereals, oats, regular and quick and instant, unenriched, cooked with water (includes boiling and microwaving), without salt"
  , "Cereals, QUAKER, Instant Oatmeal, apples and cinnamon, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, maple and brown sugar, prepared with boiling water"
  , "Cereals, MALT-O-MEAL, plain, dry"
  , "Cereals, oats, regular and quick and instant, not fortified, dry"
  , "Cereals, MALTEX, dry"
  , "Cereals, oats, instant, fortified, plain, prepared with water (boiling water added or microwaved)"
  , "Cereals, MAYPO, dry"
  , "Cereals, oats, instant, fortified, with cinnamon and spice, prepared with water"
  , "Cereals, MALTEX, cooked with water, without salt"
  , "Cereals, oats, instant, fortified, with cinnamon and spice, dry"
  , "Cereals, oats, instant, fortified, plain, dry"
  , "Cereals, MAYPO, cooked with water, without salt"
  , "Cereals, QUAKER, Instant Oatmeal, maple and brown sugar, dry"
  , "Cereals, QUAKER, Instant Oatmeal, apples and cinnamon, dry"
  , "Cereals ready-to-eat, GENERAL MILLS, Cinnamon Grahams"
  , "Cereals, WHEATENA, dry"

  , "Cereals, oats, instant, fortified, with raisins and spice, prepared with water"
  , "Cereals, RALSTON, dry"
  , "Cereals, oats, instant, fortified, with raisins and spice, dry"
  , "Cereals ready-to-eat, wheat, shredded, plain, sugar and salt free"
  , "Cereals, whole wheat hot natural cereal, dry"
  , "Cereals ready-to-eat, wheat, puffed, fortified"
  , "Cereals, corn grits, white, regular and quick, unenriched, dry"
  , "Cereals, ROMAN MEAL, plain, dry"
  , "Cereals ready-to-eat, POST, OREO O's Cereal"
  , "Cereals, whole wheat hot natural cereal, cooked with water, without salt"
  , "Cereals ready-to-eat, rice, puffed, fortified"
  , "Cereals ready-to-eat, QUAKER, QUAKER Puffed Wheat"
  , "Cereals, ROMAN MEAL, plain, cooked with water, without salt"
  , "Cereals, WHEATENA, cooked with water"
  , "Cereals ready-to-eat, POST, Shredded Wheat, spoon-size"
  , "Cereals, corn grits, yellow, regular and quick, enriched, dry"
  , "Cereals, oats, regular and quick and instant, unenriched, cooked with water (includes boiling and microwaving), with salt"
  , "Cereals ready-to-eat, GENERAL MILLS, REESE'S PUFFS"
  , "Cereals, RALSTON, cooked with water, without salt"
  , "Cereals ready-to-eat, MALT-O-MEAL, MARSHMALLOW MATEYS"
  , "Cereals, ROMAN MEAL WITH OATS, cooked with water, without salt"
  , "Cereals ready-to-eat, GENERAL MILLS, OATMEAL CRISP, APPLE CINNAMON"
  , "Cereals, corn grits, white, regular and quick, enriched, cooked with water, with salt"
  , "Cereals, RALSTON, cooked with water, with salt"
  , "Cereals, CREAM OF WHEAT, regular (10 minute), cooked with water, with salt"
  , "Cereals, whole wheat hot natural cereal, cooked with water, with salt"
  , "Cereals, QUAKER, QUAKER MultiGrain Oatmeal, dry"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Low Fat Granola without Raisins"
  , "Cereals, MALT-O-MEAL, chocolate, dry"
  , "Cereals, corn grits, yellow, regular, quick, enriched, cooked with water, with salt"
  , "Cereals, farina, unenriched, dry"
  , "Cereals, CREAM OF WHEAT, instant, prepared with water, with salt, (wheat)"
  , "Cereals, corn grits, yellow, regular and quick, unenriched, dry"
  , "Cereals, MALTEX, cooked with water, with salt"
  , "Cereals, ROMAN MEAL WITH OATS, cooked with water, with salt"
  , "Cereals, WHEATENA, cooked with water, with salt"
  , "Cereals, corn grits, yellow, regular and quick, unenriched, cooked with water, without salt"
  , "Cereals ready-to-eat, POST, Shredded Wheat, bite-size"
  , "Cereals, ROMAN MEAL, plain, cooked with water, with salt"
  , "Cereals, corn grits, yellow, regular, quick, unenriched, cooked with water, with salt"
  , "Cereals, CREAM OF RICE, cooked with water, with salt"
  , "Cereals, corn grits, white, regular and quick, unenriched, cooked with water, without salt"
  , "Cereals, corn grits, yellow, regular and quick, enriched, cooked with water, without salt"
  , "Cereals, MAYPO, cooked with water, with salt"
  , "Cereals ready-to-eat, POST Blueberry Morning"
  , "Cereals, corn grits, white, regular, quick, unenriched, cooked with water, with salt"
  , "Cereals, farina, enriched, cooked with water, with salt"
  , "Cereals ready-to-eat, GENERAL MILLS, OATMEAL CRISP with Almonds"
  , "Cereals ready-to-eat, QUAKER, QUAKER OATMEAL SQUARES"
  , "Cereals ready-to-eat, QUAKER, HONEY GRAHAM OH!S"
  , "Cereals ready-to-eat, MALT-O-MEAL, COCO-ROOS"
  , "Cereals ready-to-eat, chocolate-flavored frosted puffed corn"
  , "Cereals, QUAKER, corn grits, instant, butter flavor, dry"
  , "Cereals ready-to-eat, QUAKER, QUAKER OAT CINNAMON LIFE"
  , "Cereals ready-to-eat, QUAKER, SUN COUNTRY Granola with Almonds"
  , "Cereals ready-to-eat, QUAKER, Low Fat 100% Natural Granola with Raisins"
  , "Cereals, QUAKER, Instant Oatmeal, fruit and cream variety, dry"
  , "Cereals ready-to-eat, QUAKER, QUAKER 100% Natural Cereal with oats, honey, and raisins"
  , "Cereals ready-to-eat, QUAKER, QUAKER CINNAMON OATMEAL SQUARES"
  , "Cereals ready-to-eat, QUAKER, QUAKER toasted Oatmeal Cereal, Honey Nut"
  , "Cereals ready-to-eat, QUAKER, QUAKER Oat Bran Cereal"
  , "Cereals ready-to-eat, GENERAL MILLS, FIBER ONE"
  , "Cereals, QUAKER, Oat Bran, QUAKER/MOTHER'S Oat Bran, dry"
  , "Cereals, QUAKER, farina, Creamy Wheat, enriched, dry"
  , "Cereals, QUAKER, Instant Oatmeal, low sodium, dry"
  , "Cereals ready-to-eat, JUST RIGHT with Crunchy Nuggets"
  , "Cereals, QUAKER, Instant Oatmeal, fruit and cream variety, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, raisins, dates and walnuts, dry"
  , "Cereals ready-to-eat, GENERAL MILLS, Oatmeal Crisp, Raisin"
  , "Cereals ready-to-eat, GENERAL MILLS, HONEY NUT CLUSTERS"
  , "Cereals ready-to-eat, GENERAL MILLS, GENERAL MILLS Berry Burst CHEERIOS, all flavors"
  , "Cereals ready-to-eat, GENERAL MILLS, TOTAL Raisin Bran"
  , "Cereals ready-to-eat, APPLE CINNAMON SQUARES MINI-WHEATS"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S CRISPIX"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Complete Oat Bran Flakes"
  , "Cereals ready-to-eat, GENERAL MILLS, RAISIN NUT BRAN"
  , "Cereals ready-to-eat, GENERAL MILLS, TOTAL Corn Flakes"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S ALL-BRAN WITH EXTRA FIBER"
  , "Cereals ready-to-eat, GENERAL MILLS, BASIC 4"
  , "Cereals ready-to-eat, GENERAL MILLS, APPLE CINNAMON CHEERIOS"
  , "Cereals ready-to-eat, GENERAL MILLS, FROSTED CHEERIOS"
  , "Cereals ready-to-eat, GENERAL MILLS, COUNT CHOCULA"
  , "Cereals ready-to-eat, GENERAL MILLS, COCOA PUFFS"
  , "Cereals ready-to-eat, GENERAL MILLS, FRANKENBERRY"
  , "Cereals ready-to-eat, GENERAL MILLS, BOO BERRY"
  , "Cereals ready-to-eat, GENERAL MILLS, CINNAMON TOAST CRUNCH"
  , "Cereals ready-to-eat, GENERAL MILLS, NATURE VALLEY LOW FAT FRUIT GRANOLA"
  , "Cereals ready-to-eat, GENERAL MILLS, KABOOM"
  , "Cereals ready-to-eat, GENERAL MILLS, BERRY BERRY KIX"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S JUST RIGHT Fruit & Nut"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S, RAISIN BRAN CRUNCH"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Low Fat Granola with Raisins"
  , "Cereals ready-to-eat, MALT-O-MEAL, BERRY COLOSSAL CRUNCH"
  , "Cereals ready-to-eat, QUAKER, QUAKER FRUITANGY OH!S"
  , "Cereals ready-to-eat, oat, corn and wheat squares, presweetened, maple flavored"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S MARSHMALLOW FROOT LOOPS"
  , "Cereals ready-to-eat, POST, GRAPE-NUTS Flakes"
  , "Cereals ready-to-eat, QUAKER, MOTHER'S CINNAMON OAT CRUNCH"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S MUESLIX"
  , "Cereals ready-to-eat, Puffed KASHI"

  , "Cereals ready-to-eat, POST, GREAT GRAINS Crunchy Pecan Cereal"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Shredded Wheat Miniatures"
  , "Cereals ready-to-eat, MALT-O-MEAL, TOASTY O'S"
  , "Cereals ready-to-eat, QUAKER, QUAKER SWEET PUFFS"
  , "Cereals, QUAKER, Instant Oatmeal EXPRESS Cinnamon Roll, Dry"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Puffed Wheat"
  , "Cereals ready-to-eat, QUAKER, MOTHER'S COCOA BUMPERS"
  , "Cereals ready-to-eat, MALT-O-MEAL, TOOTIE FRUITIES"
  , "Cereals, QUAKER, hominy grits, yellow, quick, dry"
  , "Cereals ready-to-eat, QUAKER, QUAKER APPLE ZAPS"
  , "Cereals, QUAKER, Instant Oatmeal EXPRESS, Baked Apple, dry"
  , "Cereals ready-to-eat, Cranberry Macadamia Nut Cereal"
  , "Cereals ready-to-eat, QUAKER, MOTHER'S TOASTED OAT BRAN CEREAL, Brown Sugar Flavor"
  , "Cereals ready-to-eat, MALT-O-MEAL, COLOSSAL CRUNCH"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S SMART START Strong Heart Antioxidants Cereal"
  , "Cereals ready-to-eat, QUAKER, QUAKER COCOA BLASTS"
  , "Cereals ready-to-eat, MALT-O-MEAL, Crispy Rice"
  , "Cereals ready-to-eat, KASHI 7 Whole Grain Honey Puffs"
  , "Cereals ready-to-eat, KASHI HEART TO HEART, Honey Toasted Oat"
  , "Cereals, QUAKER, Instant Oatmeal, Cinnamon Spice, prepared with boiling water"
  , "Cereals ready-to-eat, QUAKER, QUAKER MARSHMALLOW SAFARI"
  , "Cereals, QUAKER, hominy grits, white, quick, dry"
  , "Cereals ready-to-eat, KASHI Good Friends"
  , "Cereals, QUAKER, Quick Oats, Dry"
  , "Cereals ready-to-eat, QUAKER, KRETSCHMER Toasted Wheat Bran"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S SPECIAL K RED BERRIES"
  , "Cereals ready-to-eat, GENERAL MILLS, Multi-Bran CHEX"
  , "Cereals ready-to-eat, KASHI GOLEAN"
  , "Cereals, QUAKER, Instant Oatmeal EXPRESS, Golden Brown Sugar, dry"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S RICE KRISPIES TREATS Cereal"
  , "Cereals ready-to-eat, QUAKER, Oatmeal Cereal, Brown Sugar Bliss"
  , "Cereals, QUAKER, Instant Oatmeal, Cinnamon-Spice, dry"
  , "Cereals ready-to-eat, GENERAL MILLS, HARMONY"
  , "Cereals, QUAKER, hominy grits, white, regular, dry"
  , "Cereals, QUAKER, Instant Oatmeal, Honey Nut, prepared with boiling water"
  , "Cereals ready-to-eat, QUAKER, KRETSCHMER Wheat Germ, Regular"
  , "Cereals, QUAKER, Instant Oatmeal, DINOSAUR EGGS with DINOSAUR BONES, Brown Sugar Cinnamon, dry"
  , "Cereals ready-to-eat, KASHI GOLEAN CRUNCH!"
  , "Cereals, QUAKER, Instant Oatmeal, French Vanilla, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, DINOSAUR EGGS with DINOSAUR BONES, Brown Sugar Cinnamon, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, Baked Apple, prepared with boiling water"
  , "Cereals ready-to-eat, MALT-O-MEAL, Frosted Flakes"
  , "Cereals, QUAKER, Instant Grits Product with Redeye Gravy and Imitation Ham Bits, Dry"
  , "Cereals, QUAKER, Instant Grits Product with Imitation Bacon Bits and Cheddar Flavor, Dry"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S FROSTED MINI-WHEATS, bite size"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S HONEY CRUNCH CORN FLAKES"
  , "Cereals ready-to-eat, HEALTH VALLEY, FIBER 7 Flakes"
  , "Cereals, QUAKER, Instant Oatmeal, EXPRESS Cinnamon Roll, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, Banana Bread, dry"
  , "Cereals, QUAKER, Instant Oatmeal, EXPRESS Baked Apple, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, TREASURE HUNT, prepared with boiling water"
  , "Cereals, QUAKER, Instant Grits Product with American Cheese Flavor, Dry"
  , "Cereals ready-to-eat, KASHI, ORGANIC PROMISE Autumn Wheat"
  , "Cereals ready-to-eat, KASHI ORGANIC PROMISE STRAWBERRY FIELDS"
  , "Cereals ready-to-eat, KASHI, CINNA-RAISIN CRUNCH"
  , "Cereals ready-to-eat, KELLOGG'S, FRUIT HARVEST Strawberry/Blueberry"
  , "Cereals ready-to-eat, KELLOGG'S, FROSTED MINI-WHEATS, Maple & Brown Sugar, Bite Size"
  , "Cereals, QUAKER, Mother's Instant Oatmeal (Non-Fortified), Dry"
  , "Cereals ready-to-eat, UNCLE SAM CEREAL"
  , "Cereals ready-to-eat, KELLOGG'S, Reduced Sugar FROOT LOOPS"
  , "Cereals, QUAKER, Instant Oatmeal, NUTRITION FOR WOMEN, Apple Spice, prepared with boiling water"
  , "Cereals, QUAKER, Instant Grits Product--Ham 'n' Cheese"
  , "Cereals ready-to-eat, KELLOGG'S, SPECIAL K Low Carb Lifestyle Protein Plus"
  , "Cereals, QUAKER, Instant Oatmeal, NUTRITION FOR WOMEN, Golden Brown Sugar, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, Raisin and Spice, dry"
  , "Cereals ready-to-eat, MALT-O-MEAL, Honey BUZZERS"
  , "Cereals, QUAKER, Instant Oatmeal, EXPRESS, Golden Brown Sugar, prepared with boiling water"
  , "Cereals, QUAKER, Instant Oatmeal, Raisin and Spice, prepared"
  , "Cereals ready-to-eat, KELLOGG'S, Reduced Sugar Frosted Flakes Cereal"
  , "Cereals ready-to-eat, Malt-O-Meal Honey Graham Squares"
  , "Cereals ready-to-eat, MALT-O-MEAL, Puffed Wheat Cereal"
  , "Cereals, MALT-O-MEAL, Farina Hot Wheat Cereal, dry"
  , "Cereals ready-to-eat, MALT-O-MEAL, Raisin Bran Cereal"
  , "Cereals ready-to-eat, MALT-O-MEAL, Blueberry Muffin Tops Cereal"
  , "Cereals ready-to-eat, MALT-O-MEAL, Honey Nut TOASTY O'S Cereal"
  , "Cereals ready-to-eat, MALT-O-MEAL, GOLDEN PUFFS"
  , "Cereals ready-to-eat, MALT-O-MEAL, Maple & Brown Sugar Hot Wheat Cereal, dry"
  , "Cereals ready-to-eat, MALT-O-MEAL, Apple ZINGS"
  , "Cereals ready-to-eat, NATURE'S PATH, OPTIMUM"
  , "Cereals ready-to-eat, MALT-O-MEAL, Cocoa DYNO-BITES"
  , "Cereals ready-to-eat, MALT-O-MEAL, Puffed Rice Cereal"
  , "Cereals ready-to-eat, MALT-O-MEAL, CINNAMON TOASTERS"
  , "Cereals ready-to-eat, MALT-O-MEAL, Frosted Mini SPOONERS"
  , "Cereals ready-to-eat, MALT-O-MEAL, Fruity DYNO-BITES"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S ALL-BRAN Yogurt Bites"
  , "Cereals ready-to-eat, POST Selects Cranberry Almond Crunch"
  , "Cereals ready-to-eat, Ralston Corn Flakes"
  , "Cereals ready-to-eat, KELLOGG, Frosted MINI-WHEATS bite size STRAWBERRY DELIGHT"
  , "Cereals ready-to-eat, NATURE'S PATH, OPTIMUM SLIM"
  , "Cereals ready-to-eat, KELLOGG'S, SPECIAL K Vanilla Almond"
  , "Cereals, Malt-O-Meal, chocolate, prepared with water, without salt"
  , "Cereals ready-to-eat, USDA Commodity Corn and Rice (includes all commodity brands)"
  , "Cereals ready-to-eat, KASHI 7 Whole Grain Flakes"
  , "Cereals ready-to-eat, Ralston Corn Biscuits"
  , "Cereals ready-to-eat, KELLOGG, Smart Start Strong Heart, Original"
  , "Cereal wafer straws, KELLOGG, APPLE JACKS Cereal straws"
  , "Rice and Wheat cereal bar"
  , "Cereal wafer straws, KELLOGG, FROOT LOOPS Cereal straws"
  , "Cereals ready-to-eat, KASHI GRANOLA, ORCHARD SPICE CEREAL"
  , "Cereals ready-to-eat, KASHI, HEART TO HEART, Wild Blueberry"

  , "Cereals ready-to-eat, Ralston Enriched Bran flakes"
  , "Cereals ready-to-eat, QUAKER, QUAKER Toasted Oatmeal Cereal"
  , "Cereals ready-to-eat, KASHI GRANOLA, Mountain Medley Cereal"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Cinnamon MINI SWIRLZ"
  , "Cereal wafer straws, KELLOGG, COCOA KRISPIES Cereal straws"
  , "Cereals, Malt-o-Meal, plain, prepared with water, without salt"
  , "Cereals ready-to-eat, GENERAL MILLS Peanut Butter Toast Crunch"
  , "Cereals ready-to-eat, KELLOGG, SMORZ"
  , "Cereals, KASHI GO LEAN Hot Cereal, Hearty Honey & Cinnamon, dry"
  , "Cereals ready-to-eat, KASHI MIGHTY BITES, Honey Crunch Cereal"
  , "Cereals ready-to-eat, KELLOGG's MINI-WHEATS Frosted Strawberry Delight Cereal"
  , "Cereals, KASHI HEART TO HEART, Instant Oatmeal, maple, dry"
  , "Cereals ready-to-eat, QUAKER, QUAKER Honey Graham LIFE Cereal"
  , "Cereals ready-to-eat, USDA Commodity Rice Crisps (includes all commodity brands)"
  , "Cereals ready-to-eat, KASHI ORGANIC PROMISE CINNAMON HARVEST"
  , "Cereals ready-to-eat, KASHI GRANOLA, COCOA BEACH Cereal"
  , "Cereals, KASHI HEART TO HEART, Instant Oatmeal, Apple Cinnamon, dry"
  , "Cereals ready-to-eat, GENERAL MILLS, CHOCOLATE LUCKY CHARMS"
  , "Cereals ready-to-eat, KASHI GRANOLA, Summer Berry Cereal"
  , "Cereals, KASHI, KASHI GO LEAN Hot Cereal, Truly Vanilla, dry"
  , "Cereals, Cream of Wheat, 2 1/2 minute cook time, cooked with water, microwaved, without salt"
  , "Cereals ready-to-eat, KELLOGG, SMART START Strong Heart, Maple Brown Sugar"
  , "Cereals ready-to-eat, GENERAL MILLS, Frosted CHEX"
  , "Cereals, CREAM OF WHEAT, 1 minute cook time, cooked with water, microwaved, without salt"
  , "Cereals ready-to-eat, KELLOGG, EGGO Crunch Cereal, maple flavored"
  , "Cereals ready-to-eat, KASHI GO LEAN CRUNCH!, Honey Almond Flax"
  , "Cereals ready-to-eat, KASHI 7 Whole Grain Nuggets"
  , "Cereals ready-to-eat, KELLOGG, Berry RICE KRISPIES"
  , "Cereals ready-to-eat, Ralston Crispy Hexagons"
  , "Cereals, Cream of Wheat, 2 1/2 minute cook time, cooked with water, stove-top, without salt"
  , "Cereals ready-to-eat, rolled oats, whole wheat, rice, presweetened, maple flavored, with pecans"
  , "Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, Honey Clusters"
  , "Cereals, CREAM OF WHEAT, 1 minute cook time, cooked with water, stove-top, without salt"
  , "Cereals ready-to-eat, GENERAL MILLS, DORA THE EXPLORER"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Special K low fat granola"
  , "Cereals, Cream of Wheat, 2 1/2 minute cook time, dry"
  , "Cereals ready-to-eat, GENERAL MILLS, TRIX, reduced sugar, bowlpak"
  , "Cereals ready-to-eat, KELLOGG'S SPECIAL K Chocolatey Delight"
  , "Cereals ready-to-eat, GENERAL MILLS, Chocolate CHEX"
  , "Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, Raisin Bran Clusters"
  , "Cereals ready-to-eat, GENERAL MILLS, TOTAL, Cranberry Crunch"
  , "Cereals ready-to-eat, GENERAL MILLS, Fruity CHEERIOS"
  , "Cereals ready-to-eat, GENERAL MILLS, CHEERIOS, Banana Nut"
  , "Cereals ready-to-eat, GENERAL MILLS, TOTAL, Blueberry Pomegranate"
  , "Cereals ready-to-eat, GENERAL MILLS Cinnamon CHEX"
  , "Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, Shredded Wheat"
  , "Cereals ready-to-eat, GENERAL MILLS, FIBER ONE, Caramel Delight"
  , "Cereals ready-to-eat, GENERAL MILLS, CHEERIOS, Chocolate"
  , "Cereals ready-to-eat, GENERAL MILLS, CHEERIOS, Yogurt Burst"
  , "Cereals ready-to-eat, KELLOGG, SPECIAL K, Fruit & Yogurt"
  , "Cereals, CREAM OF WHEAT, 1 minute cook time, dry"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Special K Blueberry"
  , "Cereals ready-to-eat, KELLOGG, All-Bran Strawberry Medley"
  , "Cereals ready-to-eat, GENERAL MILLS, WHEATIES, Fuel"
  , "Cereals ready-to-eat, KELLOGG, KELLOGG'S Special K, Cinnamon Pecan"
  , "Cereals ready-to-eat, KASHI, Kashi U"
  , "Cereals ready-to-eat, KASHI ORGANIC PROMISE Island Vanilla Biscuit"
  , "KASHI GOLEAN Crisp Toasted Berry Crumble"
  , "Cereals ready-to-eat, KASHI Heart to Heart Warm Cinnamon"
  , "Cereals, ready-to-eat, KELLOGG, KELLOGG'S CINNABON cereal"
  , "Cereals ready-to-eat, Marshmallow ALPHA-BITS"
  , "Cereals ready-to-eat, frosted oat cereal with marshmallows"
  , "Cereals ready-to-eat, WEETABIX WHOLE WHEAT CEREAL"
  , "Cereals ready-to-eat, MUESLI, dried fruit and nuts"
  , "Cereals ready-to-eat, POST, Honey Bunches of Oats, with almonds"
  , "Cereals ready-to-eat, POST, Great Grains, Raisin, Date & Pecan"
  , "Cereals ready-to-eat, POST Banana Nut Crunch"
  , "Cereals ready-to-eat, whole wheat, rolled oats, presweetened, with pecans"
  , "Cereals ready-to-eat, wheat and bran, presweetened with nuts and fruits"
  , "Cereals, ready-to-eat, ALPEN"
  , "Cereals ready-to-eat, FAMILIA"
  , "Cereals ready-to-eat, OAT BRAN FLAKES, HEALTH VALLEY"
  , "Cereal ready-to-eat, CRISPY BROWN RICE"
  , "Cereals ready-to-eat, POST, Shredded Wheat n' Bran, spoon-size"
  , "Millet, puffed"
  , "Cereals ready-to-eat, POST, HONEY BUNCHES OF OATS, honey roasted"],
  Bre:["家乐氏即食麦片", "即食酸奶麦片", "家乐氏全麸皮芽即食麦片", "家乐氏全麸原味即食麦片，", "桂格即食麦片", "葡萄坚果麦片", "脆果脆片即食麦片", "桂格花生酱麦片", "小麦和麦芽麦片即食麦片", "金格雷厄姆即食麦片，", "家乐氏全麦片", "家乐氏冻米糕", "贵格会即食麦片", "波斯特即食麦片", "桂格原味燕麦", "家乐氏可可脆饼", "即食干果麦片", "麦片葡萄干麸", "家乐氏磨砂迷你小麦片", "桂格脆麸即食麦片", "家乐氏加奶麦片", "通用磨坊即食麦片", "通用磨坊曲奇脆", "CHEERIOS即食麦片", "家乐氏燕麦麸", "蜂窝状麦片", "拉尔斯顿脆麦片", "通用磨坊即食蜜饯麦片", "家乐氏玉米片", "即食玉米片麦片，低钠", "麸皮片", "家乐氏特制麦片", "通用磨坊即食蜜饯切克麦片", "波斯特即食水果麦片", "葡萄干麦麸麦片", "家乐氏草莓水果麦片", "桂格膨化米麦片", "通用磨坊玉米饼", "家乐氏什锦麦片", "桂格100%天然燕麦", "桂格甜脆", "金脆燕麦片", "幸运符即食麦片", "通用磨坊全麦片", "家乐氏糖霜燕麦片", "烤后玉米片", "家乐氏玉米棒", "家乐氏葡萄干麸", "100%麸皮麦片", "家乐氏米饼", "通用磨坊什锦即食麦片", "华夫洛斯即食麦片，", "通用磨坊草莓水果即食麦片", "通用磨坊牛奶麦片", "通用磨坊麦芽餐", "通用磨坊玉米片", "克雷奇默蜂蜜脆麦胚", "通用磨坊蜜饯麦片", "干麦片", "通用磨坊即食玉米粒", "通用磨坊玉米饼", "桂格玉米粒", "桂格干麦片", "通用磨坊香蕉水果即食麦片", "通用磨坊法式吐司脆", "通用磨坊烤小麦胚芽", "桂格培根玉米粒", "桂格玉米干麦片", "桂格切达奶酪风味燕麦片", "桂格奶油干麦片", "通用磨坊奶油干麦片", "桂格酸奶麦片", "法里纳麦片", "家乐氏奶油麦片", "家乐氏奶油麦片", "桂格奶油草莓干麦片", "法里纳奶油麦片", "桂格奶油苹果碎麦片", "通用磨坊奶油即食干麦片", "速溶芒果碎燕麦片", "蓝莓酸奶块麦片", "法里纳麦片", "苹果和肉桂混合麦片", "桂格草莓干麦片", "桂格麦芽粉", "桂格枫糖和红糖燕麦片", "通用磨坊麦芽糖干麦片", "奶油苹果燕麦片", "桂格干果奶油燕麦片", "肉桂干麦片", "家乐氏酸奶即食原味", "桂格速溶燕麦", "桂格麦片加麦芽糖", "蓝莓干麦片", "桂格加枫糖和红糖干麦片", "通用磨坊肉桂即食麦片", "通用磨坊牛奶干麦片", "桂格苹果肉桂干麦片", "水煮无盐麦片","葡萄干和香料速溶麦片", "拉尔斯顿干麦片", "葡萄干干麦片", "全麦热干麦片", "即食麦片，切碎，原味，无糖无盐", "即食麦片，小麦，膨化", "全麦热天然麦片，水煮，无盐", "玉米粒速食，未经加工，干燥", "榛子食麦片", "酸奶干草莓干麦片", "即食草莓麦片，膨化", "桂格膨化小麦麦片", "水煮蓝莓麦片", "麦片，小麦制", "香甜玉米麦片", "麦片加玉米粒", "，通用磨坊里斯泡芙即食麦片", "燕麦、普通、速溶、未经浓缩，含盐", "即食麦片加麦芽粉", "拉尔斯顿麦片，水煮，无盐", "麦片加玉米粒，普通和速食，加水煮熟，含盐", "燕麦罗马餐，水煮，无盐", "全麦天然麦片，用水煮熟，含盐", "麦片，水煮，含盐", "奶油麦片，普通用水煮熟，含盐", "通用磨坊，燕麦片脆加苹果肉桂", "麦芽粉加巧克力", "麦片加玉米粒，普通，速食，浓缩，水煮，含盐", "桂格杂粮燕麦片", "家乐氏低脂无葡萄干麦片", "小麦片，水煮，含盐", "麦片加麦芽糖，水煮，含盐", "法里纳麦片，未浓缩，干麦片", "谷类食品，玉米粒，常规速食，未经加工，干燥", "麦片，燕麦罗马餐，水煮，含盐", "麦片加玉米粒，干果，黄色，普通，速食，加水煮熟，含盐", "麦片，加杏仁，黄色，普通和速食，用水煮熟，无盐", "麦片，罗马餐，原味，水煮，含盐", "即食麦片，纯小麦制", "奶油麦片，即食，用水配制，含盐", "玉米粒和酸奶块，普通，速食", "麦片，加奶油米饭，水煮，含盐", "麦片，水煮，含盐", "麦片，加玉米粒，普通和速食，浓缩，加水煮熟，无盐", "即食麦片加蓝莓", "加玉米粒，白麦片，普通麦片，加水煮熟，含盐", "通用磨坊，燕麦脆杏仁", "法里纳麦片，加水煮熟，含盐", "桂格，桂格燕麦片方块", "即食粗粮燕麦片", "桂格燕麦片", "即食麦片，加巧克力味磨砂膨化玉米", "太阳乡村杏仁麦片", "桂格低脂100%天然格兰诺拉麦片配葡萄干", "即食麦片，麦芽粉加可可豆", "桂格100%纯天然麦片，燕麦、蜂蜜和葡萄干", "桂格即食燕麦片加水果干和奶油", "桂格加玉米粒黄油味", "桂格，桂格烤燕麦麦片加蜜饯", "桂格肉桂燕麦", "桂格燕麦麸", "桂格燕麦麸麦片", "通用磨坊纤维一号麦片", "即食麦片，加松脆的金块", "麦片，桂格即食燕麦片加葡萄干，枣子和核桃，干麦片", "即食麦片，通用磨坊，燕麦片脆加葡萄干", "法里纳，奶油小麦，浓缩，干麦片", "桂格，即食燕麦片，低钠，干麦片", "通用磨坊加蜜饯串", "桂格即食燕麦片加水果和奶油，用沸水煮制", "通用磨坊总葡萄干麸", "即食麦片加苹果肉桂方块", "家乐氏全燕麦麦片", "家乐氏红薯麦片", "通用磨坊葡萄干坚果麸", "通用磨坊浆果干，各种口味", "通用磨坊，玉米片", "家乐氏全麸，含额外纤维", "通用磨坊草莓干果麦片", "通用磨坊苹果肉桂麦片", "通用磨坊肉桂吐司脆", "通用磨坊麦片加伯爵巧克力", "弗兰肯贝里麦片", "通用磨坊加可可酥", "通用磨坊自然谷低脂水果麦片", "通用磨坊加浆果猕猴桃", "通用磨坊加博爱莓", "卡布姆即食麦片", "通用磨坊加糖霜", "家乐氏恰到好处的水果和坚果", "桂格水果味麦片", "麦芽餐加浆果", "家乐氏葡萄干麸脆", "家乐氏低脂麦片配葡萄干", "家乐氏棉花糖弗罗特圈", "燕麦，玉米和小麦方块加枫糖", "即食麦片加方糖", "桂格肉桂燕麦脆片", "波斯特葡萄果片", "家乐氏草莓即食","家乐氏膨化小麦", "大麦片脆山核桃麦片", "麦芽餐烤麦片", "家乐氏小麦丝", "桂格速溶燕麦片肉桂卷", "桂格甜泡芙", "加玉米粒，黄色，速食，干麦片", "桂格麦片加可可酱", "麦芽餐加香椿果", "桂格加苹果酱", "家乐氏苹果麦片", "桂格麦芽餐", "蔓越莓澳洲坚果麦片", "烤燕麦麸麦片红糖味", "速溶燕麦片，加烤苹果", "桂格可可豆", "麦芽粉，脆米饭", "即食麦片，加全麦蜂蜜泡芙", "蜂蜜烤燕麦", "桂格即食燕麦片加肉桂香料", "即食麦片加蓝莓干", "桂格烤麦麸", "桂格玉米粒速食干麦片", "家乐氏特制红色浆果麦片", "桂格棉花糖", "通用磨坊多麸切克斯", "桂格速溶燕麦干麦片", "家乐氏早餐加奶麦片", "桂格速溶燕麦片加金红糖", "燕麦片加鲜果粒", "通用磨坊鲜奶即食麦片", "桂格，即食燕麦片，蜜饯，用开水煮", "桂格麦胚", "桂格玉米粒，白色，干麦片", "桂格，燕麦片加红糖", "桂格速溶燕麦片，加红糖肉桂干麦片", "桂格即食燕麦片加肉桂香料", "桂格即食燕麦片法国香草，用开水煮制", "即食麦片加酸奶块", "桂格速溶燕麦片加红糖肉桂，沸水煮制", "桂格含仿培根和切达风味干麦片", "即食麦芽粉", "家乐氏蜂蜜脆玉米片", "桂格即食燕麦片加烤苹果用开水煮", "桂格含红眼肉汁和仿火腿块的速溶麦片", "健康谷麦片", "家乐氏糖霜迷你小麦", "即食燕麦片加速溶肉桂卷，用沸水煮制", "速溶燕麦片，加香蕉片", "桂格即食燕麦片加特快烤苹果，沸水煮制", "即食麦片加草莓片", "葡萄干麦片", "家乐氏加水果草莓/蓝莓", "桂格加速溶燕麦片（非强化）", "桂格加美国奶酪风味干麦片", "即食麦片有机小麦制", "家乐氏，磨砂迷你小麦加枫糖和红糖，", "桂格即食燕麦片", "家乐氏含还原糖", "山姆大叔麦片", "桂格即食燕麦片，加金红糖，沸水煮制", "麦片，桂格即食燕麦片加苹果香料", "家乐氏红糖麦片", "桂格，即食燕麦片，加葡萄干和香料", "麦片，桂格，加火腿奶酪", "麦芽餐加蜂蜜", "麦片，桂格，即食燕麦片加金红糖，用开水煮", "麦片蜂蜜", "麦片，桂格，即食燕麦片，加葡萄干和香料", "还原糖糖霜麦片", "即食麦芽粉", "蓝莓松饼麦片", "葡萄干麸麦片", "法里纳热麦片，干麦片", "蜂蜜坚果烤麦片", "膨化麦片", "麦芽粉加枫糖和红糖", "自然之路即食麦片", "麦芽粉加苹果锌", "麦芽粉加可可豆", "麦芽餐加糖霜", "即食麦片，麦芽膨化麦片，膨化麦片", "即食麦片，精选蔓越莓杏仁脆片", "即食麦片，麦芽餐，果味麦片", "即食麦片，家乐氏，家乐氏全麸酸奶", "即食麦片，拉尔斯顿玉米片", "即食麦片，麦芽餐加肉桂", "即食麦片，家乐氏，冻小麦片", "即食麦片，家乐氏，加香草杏仁", "自然之路即食麦片", "拉尔斯顿玉米饼干", "即食麦片，家乐氏", "麦片吸管，家乐氏，苹果杰克麦片吸管", "即食麦片，美国农业部商品玉米和大米（包括所有商品品牌）", "即食麦片,全麦片", "麦片、麦芽粉、巧克力、用水配制、无盐", "家乐氏，弗罗特圈麦片", "即食麦片，喀什麦片，果园香料麦片", "米麦条", "即食麦片，喀什，心连心，野生蓝莓","即食麦片,山地混合麦片", "麦芽粉，原味，用水配制，无盐", "即食麦片，桂格，桂格烤燕麦麦片", "麦片吸管，家乐氏，可可脆饼麦片吸管", "即食麦片，家乐氏，家乐氏肉桂麦片", "即食麦片，富含拉尔斯顿的麸皮片", "即食麦片，家乐氏麦片", "麦片加蜂蜜和肉桂", "蜂蜜脆麦片", "通用磨坊花生酱吐司脆", "可可海滩麦片", "心连心，即食燕麦片，枫叶，干麦片", "即食麦片加有机肉桂", "美国农业部商品米薯片", "家乐氏迷你小麦磨砂草莓乐麦片", "夏季浆果麦片", "即食燕麦片，加苹果肉桂，干麦片", "桂格蜂蜜生活麦片", "通用磨坊，巧克力幸运符麦片", "去瘦肉热麦片，加香草，干麦片", "即食麦片，家乐氏，加枫红糖", "麦片，奶油小麦，无盐", "即食麦片，通用磨坊制", "即食麦片，家乐氏，茄子脆麦片", "麦片，奶油小麦，1分钟烹调时间，用水烹调，无盐", "即食麦片，全麦金块", "麦片即食，去瘦脆加蜂蜜杏仁亚麻", "即食麦片，罗斯顿脆六边形", "麦片，奶油小麦，无盐", "家乐氏加浆果米糕", "家乐氏特制低脂麦片", "即食麦片，通用磨坊，纤维一号加蜂蜜串", "即食麦片通用磨坊生产", "麦片，奶油小麦", "麦片，奶油小麦", "即食麦片，燕麦卷，全麦，大米，加糖，含山核桃", "即食麦片，通用磨坊，加巧克力", "即食麦片、通用磨坊、加还原糖", "即食麦片，家乐氏加巧克力", "即食麦片，通用磨坊，纤维一加葡萄干麸串", "即食麦片，通用磨坊，全麦，蓝莓石榴", "即食麦片，通用磨坊，道达尔，蔓越莓脆片", "即食麦片，通用磨坊，水果甜点", "即食麦片，通用磨坊，纤维一号，小麦丝", "即食麦片，通用磨坊，樱桃，香蕉坚果", "即食麦片，通用磨坊，纤维一号，焦糖软糖", "即食麦片，通用磨坊肉桂CHEX", "即食麦片，通用磨坊，干酪，巧克力", "即食麦片，家乐氏，特制K，水果和酸奶", "即食麦片，通用磨坊，奶酪，酸奶", "即食麦片，通用磨坊，小麦，燃料", "即食麦片，家乐氏，全麸草莓混合", "即食麦片，家乐氏，家乐氏特制K蓝莓", "麦片，奶油小麦，1分钟烹饪时间，干麦片", "即食麦片，家乐氏，家乐氏特制K，肉桂山核桃", "喀什高粱酥烤浆果屑", "即食麦片，喀什，喀什U", "即食麦片，喀什有机承诺岛香草饼干", "即食麦片，喀什暖肉桂", "麦片，即食，家乐氏，家乐氏朱砂麦片", "即食麦片，棉花糖", "即食麦片、麦片、干果和坚果", "即食麦片，波斯特麦片，大麦片，葡萄干，枣子和山核桃", "即食麦片，维他麦全麦麦片", "即食麦片，糖霜燕麦麦片配棉花糖", "即食麦片，波斯特，蜂蜜燕麦束，杏仁", "即食麦片，全麦，燕麦卷，预先加糖，含山核桃", "即食麦片，香蕉坚果脆后", "即食麦片，小麦和麸皮，加坚果和水果", "麦片，即食，阿尔卑斯山", "小米，膨化", "即食麦片，燕麦麸片，健康谷", "即食麦片，脆糙米", "即食麦片，波斯特，蜂蜜燕麦束，蜂蜜烤", "即食麦片，家庭版", "即食麦片，碎麦麸"],
  Cercal:[389
    , 380
    , 123
    , 374
    , 362
    , 130
    , 365
    , 112
    , 111
    , 360
    , 336
    , 131
    , 358
    , 357
    , 405
    , 117
    , 130
    , 130
    , 122
    , 357
    , 316
    , 349
    , 289
    , 340
    , 360
    , 338
    , 338
    , 364
    , 288
    , 101
    , 360
    , 97
    , 354
    , 361
    , 366
    , 362
    , 327
    , 339
    , 126
    , 198
    , 363
    , 151
    , 329
    , 339
    , 331
    , 216
    , 370
    , 368
    , 340
    , 325
    , 130
    , 342
    , 358
    , 357
    , 521
    , 128
    , 158
    , 384
    , 130
    , 371
    , 164
    , 367
    , 158
    , 124
    , 138
    , 348
    , 132
    , 336
    , 382
    , 124
    , 131
    , 99
    , 371
    , 356
    , 375
    , 527
    , 364
    , 337
    , 361
    , 127
    , 372
    , 109
    , 375
    , 130
    , 124
    , 120
    , 164
    , 348
    , 146
    , 367
    , 345
    , 361
    , 338
    , 138
    , 101
    , 374
    , 164
    , 364
    , 365
    , 370

    , 362
    , 348
    , 361
    , 72
    , 157
    , 334
    , 365
    , 355
    , 364
    , 138
    , 123
    , 130
    , 130
    , 130
    , 364
    , 373
    , 374
    , 158
    , 130
    , 364
    , 158
    , 130
    , 138
    , 358
    , 365
    , 360
    , 370
    , 370
    , 371
    , 360
    , 374
    , 384
    , 157
    , 361
    , 371
    , 164],
  Cerm:[156
    , 95
    , 158
    , 185
    , 190
    , 158
    , 185
    , 195
    , 195
    , 195
    , 192
    , 57
    , 200
    , 105
    , 111
    , 165
    , 186
    , 186
    , 202
    , 160
    , 118
    , 102
    , 128
    , 120
    , 115
    , 169
    , 130
    , 125
    , 128
    , 164
    , 167
    , 174
    , 125
    , 137
    , 158
    , 137
    , 192
    , 192
    , 140
    , 108
    , 158
    , 132
    , 192
    , 192
    , 168
    , 58
    , 185
    , 163
    , 168
    , 128
    , 57
    , 192
    , 152
    , 102
    , 45
    , 134
    , 140
    , 38
    , 57
    , 105
    , 115
    , 84
    , 140
    , 57
    , 160
    , 105
    , 160
    , 57
    , 38
    , 140
    , 176
    , 114
    , 57
    , 57
    , 93
    , 45
    , 57
    , 186
    , 162
    , 194
    , 57
    , 176
    , 57
    , 140
    , 140
    , 185
    , 140
    , 57
    , 172
    , 193
    , 148
    , 137
    , 174
    , 160
    , 252
    , 93
    , 115
    , 6.9
    , 166
    , 157
 
    , 122
    , 170
    , 117
    , 160
    , 140
    , 122
    , 114
    , 138
    , 125
    , 160
    , 158
    , 158
    , 158
    , 205
    , 125
    , 119
    , 57
    , 140
    , 158
    , 125
    , 140
    , 186
    , 160
    , 200
    , 185
    , 167
    , 157
    , 157
    , 105
    , 195
    , 185
    , 38
    , 140
    , 121
    , 57
    , 140],
  Cer2:["Oats"
 , "Rice, white, long-grain, precooked or instant, enriched, dry"
  , "Rice, white, long-grain, parboiled, enriched, cooked"
  , "Rice, white, long-grain, parboiled, enriched, dry"
  , "Rice, brown, medium-grain, raw"
  , "Rice, white, long-grain, regular, cooked"
  , "Rice, white, long-grain, regular, raw, enriched"
  , "Rice, brown, medium-grain, cooked"
  , "Rice, brown, long-grain, cooked"
  , "Rice, white, medium-grain, raw, enriched"
  , "Triticale"
  , "Pasta, fresh-refrigerated, plain, cooked"
  , "Rice, white, short-grain, raw"
  , "Pasta, corn, dry"
  , "Wheat flour, white, tortilla mix, enriched"
  , "Rice, white, long-grain, precooked or instant, enriched, prepared"
  , "Rice, white, medium-grain, cooked"
  , "Rice, white, short-grain, cooked"
  , "Rice, white, with pasta, cooked"
  , "Wild rice, raw"
  , "Rice bran, crude"
  , "Rye flour, medium"
  , "Pasta, fresh-refrigerated, spinach, as purchased"
  , "Wheat flour, whole-grain"
  , "Wheat germ, crude"
  , "Rye"
  , "Triticale flour, whole-grain"
  , "Wheat flour, white, all-purpose, enriched, bleached"
  , "Pasta, fresh-refrigerated, plain, as purchased"
  , "Wild rice, cooked"
  , "Semolina, enriched"
  , "Rice, white, glutinous, cooked"
  , "Wheat flour, white, all-purpose, self-rising, enriched"
  , "Wheat flour, white, bread, enriched"
  , "Rice flour, white"
  , "Wheat flour, white, cake, enriched"
  , "Wheat, hard red winter"
  , "Sorghum"
  , "Pasta, corn, cooked"
  , "Wheat, sprouted"
  , "Rice flour, brown"
  , "Rice, white, steamed, Chinese restaurant"
  , "Wheat, hard red spring"
  , "Wheat, durum"
  , "Wheat, soft red winter"
  , "Wheat bran, crude"
  , "Rice, white, glutinous, raw"
  , "Rice, white, with pasta, dry"
  , "Wheat, soft white"
  , "Rye flour, dark"
  , "Pasta, fresh-refrigerated, spinach, cooked"
  , "Wheat, hard white"
  , "Tapioca, pearl, dry"
  , "Rye flour, light"
  , "Noodles, flat, crunchy, Chinese restaurant"
  , "Macaroni, vegetable, cooked, enriched"
  , "Macaroni, cooked, enriched"
  , "Noodles, egg, dry, enriched"
  , "Pasta, homemade, made with egg, cooked"
  , "Macaroni, dry, enriched"
  , "Macaroni, protein-fortified, cooked, enriched, (n x 5.70)"
  , "Macaroni, vegetable, dry, enriched"
  , "Spaghetti, cooked, enriched, without added salt"
  , "Pasta, homemade, made without egg, cooked"
  , "Noodles, egg, cooked, enriched"
  , "Macaroni, whole-wheat, dry"
  , "Noodles, egg, spinach, cooked, enriched"
  , "Noodles, japanese, soba, dry"
  , "Noodles, egg, spinach, dry, enriched"
  , "Macaroni, whole-wheat, cooked"
  , "Noodles, japanese, somen, cooked"
  , "Noodles, japanese, soba, cooked"
  , "Spaghetti, dry, enriched"
  , "Noodles, japanese, somen, dry"
  , "Macaroni, protein-fortified, dry, enriched, (n x 5.70)"
  , "Noodles, chinese, chow mein"
  , "Rice noodles, dry"
  , "Kamut, uncooked"
  , "Barley malt flour"
  , "Spelt, cooked"
  , "Spaghetti, spinach, dry"
  , "Rice noodles, cooked"
  , "Spaghetti, protein-fortified, dry, enriched (n x 5.70)"
  , "Spaghetti, spinach, cooked"
  , "Spaghetti, whole-wheat, cooked"
  , "Quinoa, cooked"
  , "Spaghetti, protein-fortified, cooked, enriched (N x 5.70)"
  , "Spaghetti, whole-wheat, dry"
  , "Kamut, cooked"
  , "Teff, uncooked"
  , "Barley flour or meal"
  , "Wheat flours, bread, unenriched"
  , "Spelt, uncooked"
  , "Noodles, egg, cooked, enriched, with added salt"
  , "Teff, cooked"
  , "Macaroni, protein-fortified, dry, enriched, (n x 6.25)"
  , "Macaroni, protein-fortified, cooked, enriched, (n x 6.25)"
  , "Corn flour, whole-grain, blue (harina de maiz morado)"
  , "Corn, white"
  , "Cornmeal, degermed, enriched, white"
  , "Cornmeal, whole-grain, white"
  , "Cornmeal, self-rising, bolted, with wheat flour added, enriched, white"
  , "Corn flour, whole-grain, white"
  , "Hominy, canned, yellow"
  , "Spaghetti, cooked, enriched, with added salt"
  , "Cornmeal, self-rising, bolted, plain, enriched, white"
  , "Corn flour, masa, enriched, yellow"
  , "Cornmeal, self-rising, degermed, enriched, white"
  , "Wheat flour, white, all-purpose, unenriched"
  , "Noodles, egg, cooked, unenriched, without added salt"
  , "Rice, white, long-grain, parboiled, unenriched, cooked"
  , "Rice, white, long-grain, regular, cooked, enriched, with salt"
  , "Rice, white, long-grain, regular, cooked, unenriched, with salt"
  , "Rice, white, short-grain, cooked, unenriched"
  , "Wheat flour, white, all-purpose, enriched, unbleached"
  , "Millet flour"
  , "Spaghetti, protein-fortified, dry, enriched (n x 6.25)"
  , "Spaghetti, cooked, unenriched, without added salt"
  , "Rice, white, long-grain, regular, cooked, unenriched, without salt"
  , "Wheat flour, white, all-purpose, enriched, calcium-fortified"
  , "Macaroni, cooked, unenriched"
  , "Rice, white, medium-grain, cooked, unenriched"
  , "Noodles, egg, cooked, unenriched, with added salt"
  , "Rice, white, short-grain, raw, unenriched"
  , "Rice, white, long-grain, regular, raw, unenriched"
  , "Semolina, unenriched"
  , "Cornmeal, degermed, unenriched, white"
  , "Cornmeal, degermed, unenriched, yellow"
  , "Macaroni, dry, unenriched"
  , "Rice, white, medium-grain, raw, unenriched"
  , "Rice, white, long-grain, parboiled, unenriched, dry"
  , "Noodles, egg, dry, unenriched"
  , "Spaghetti, cooked, unenriched, with added salt"
  , "Sorghum flour"
  , "Spaghetti, dry, unenriched"
  , "Spaghetti, protein-fortified, cooked, enriched (n x 6.25)"],
  Cer:["小米粥", "米饭，白米饭，长粒，早熟或即食，营养丰富，干燥", "米饭、白米饭、长粒米饭、半熟米饭、浓缩米饭、干米饭", "大米、糙米、中粒米、生的", "米饭、白米饭、长粒米饭、半熟米饭、浓缩米饭、熟米饭", "米饭、白米饭、长粒米饭、普通米饭、熟的", "米饭、糙米、长粒米、熟的", "大米、白米饭、长粒米饭、普通米饭、生米饭、浓缩米饭", "米饭、糙米、中粒、熟的", "大米、白米饭、中粒米、生的、浓缩的", "大米、白米饭、短粮、生的", "面粉、白面粉、玉米饼混合物、浓缩", "小黑麦", "意大利面、新鲜冷藏、原味、熟的", "意大利面、玉米面、干的", "米饭，白米饭，长粒，预煮或即食，浓缩，即食", "米饭、白米饭、意大利面、熟的", "米饭、白米饭、短粒米饭、熟的", "米饭、白米饭、中粒米、熟的", "野生大米、生的", "黑麦粉，中等", "黑麦", "意大利面、新鲜冷藏、菠菜", "粗麦胚", "全麦面粉", "粗米糠", "全麦小黑麦粉", "小麦粉，白色，通用，浓缩", "意大利面，新鲜冷藏，原味，如购买", "野生稻、熟的", "面粉、白面粉、面包、浓缩", "粗面粉，浓缩", "面粉、白面粉、蛋糕、浓缩", "小麦粉，白色，通用，自涨，浓缩", "米饭、白米饭、糯米饭、熟的", "白米粉", "小麦，红色的冬天", "意大利面、玉米、熟的", "高粱", "小麦，发芽", "小麦粉", "粗麦麸", "冬小麦", "米粉，棕色", "小麦、硬粒小麦", "米饭、白米饭、清蒸", "米饭，白米饭，配意大利面，干的", "大米、白米、糯米、生的", "小麦，软白色", "黑麦粉，深色", "面条", "意大利面、新鲜冷藏、菠菜、熟的", "小麦，硬白", "淡黑麦粉", "通心粉、蔬菜、熟的、浓缩", "通心粉、熟的、浓缩", "面条、鸡蛋、干面条、浓缩面条", "木薯、珍珠、干木薯", "意大利面、自制、鸡蛋制作、熟的", "浓缩干通心粉", "通心粉、全麦、干的", "意大利面、熟的、浓缩、无盐", "蛋白强化通心粉，即食，浓缩", "面条、鸡蛋、熟的、浓缩的", "意大利面，自制，无蛋制作，即食", "通心面、蔬菜、干的、浓缩的", "面条，日本面，苏巴面，干的", "通心粉、全麦、熟的", "面条、鸡蛋、菠菜、熟的、浓缩", "面条、鸡蛋、菠菜、干的、浓缩的", "面条，日式，面条，熟的", "面条，中式，炒面", "面条，日本面，苏巴面，即食", "蛋白强化干浓缩通心粉", "意大利面，干的，浓缩", "大麦麦芽粉", "面条，日本面，干面条", "拼音，熟的", "米粉，干的", "卡穆特，生的", "意大利面、全麦、熟的", "米粉，熟的", "藜麦，熟的", "强化蛋白质意大利面，干，浓缩", "意大利面、菠菜、干的", "意大利面、菠菜、熟的", "意大利面，蛋白质强化，即食，强化", "黑米面", "卡穆特，熟的", "意大利面、全麦、干的", "面条、鸡蛋、熟的、浓缩、含盐", "拼写，未煮熟", "聚四氟乙烯，熟的", "小麦粉、面包、未经浓缩的", "大麦粉", "蛋白强化干浓缩通心粉", "玉米粉，全麦", "玉米，白色", "玉米粉，脱发酵，浓缩，白色", "蛋白强化通心粉，即食，浓缩","玉米粉、全麦、白色", "香肠、罐装、黄色", "玉米粉，普通，浓缩，白色", "意大利面、熟的、浓缩、添加盐", "玉米粉、全麦、白色", "玉米粉，添加小麦粉，浓缩，白色", "面条、鸡蛋、熟的、不加盐的", "玉米粉，浓缩，黄色", "小麦粉，白色，多用途，未经浓缩", "玉米粉，自升，去发酵，浓缩，白色", "米饭、白米饭、长粒米饭、普通米饭、熟的、富含盐的", "小麦粉，白色，通用，浓缩，未漂白", "米饭、白米饭、长粒米饭、普通米饭、熟的、未加糙米饭、含盐", "米饭、白米饭、短粒米饭、熟的、未加糙的", "小米粉", "意大利面，熟的，未加糖，不加盐", "意大利面，蛋白质强化，干，强化", "米饭、白米饭、长粒米饭、半熟米饭、生的、熟的", "小麦粉，白色，通用，强化，钙强化", "米饭、白米饭、长粒米饭、普通米饭、熟的、未加糖、无盐", "粗面粉，未经浓缩", "大米、白米饭、长粒米饭、普通米饭、生米饭、未经加工的米饭", "面条、鸡蛋、熟的、未调味、添加盐", "通心粉、熟的、未加香料的", "米饭、白米饭、中粒米、熟的、未加糙的", "大米、白米饭、短粒米、生的、未经加工的", "玉米粉、脱发酵、未发酵、白色", "通心粉，干的，未加香料", "大米、白米饭、中粒米、生的、未经加工的", "玉米粉，去发酵，未发酵，黄色", "意大利面，蛋白质强化，即食，强化", "面条、鸡蛋、干的、未加营养的", "意大利面，即食，未加香料，加盐", "高粱粉", "意大利面，干的，未加香料", "米饭、白米饭、长粒米饭、半熟米饭、生米饭、干米饭"],
  Daical:[376, 178, 43, 403, 369, 130, 42, 51, 56, 496, 276, 3.27, 56, 290, 96, 362, 155, 334, 4.22, 136, 78, 48, 148, 40, 387, 34, 303, 321, 354, 185, 91, 95, 41, 50, 196, 215, 63, 85, 37, 61, 387, 108, 64, 97, 5.2, 55, 173, 3.72, 328, 398, 102, 274, 152, 185, 358, 222, 545, 134, 268, 105, 108],
  Daim:[28.35, 235, 245, 132, 28.35, 242, 244, 245, 245, 128, 33, 28.35, 246, 140, 227, 120, 136, 28.35, 28.35, 15, 256, 246, 21, 245, 120, 245, 28, 306, 28.35, 144, 32, 245, 246, 244, 46, 35, 244, 245, 245, 244, 28.35, 245, 244, 244, 150, 227, 132, 132, 28.35, 132, 227, 132, 31, 70, 68, 28, 94, 252, 28.35, 227, 125],
  Dai2:["Cheese, caraway", "Sour dressing, non-butterfat, cultured, filled cream-type", "Milk, lowfat, fluid, 1% milkfat, with added nonfat milk solids, vitamin A and vitamin D", "Cheese, cheddar", "Cheese, roquefort", "Cream, fluid, half and half", "Milk, lowfat, fluid, 1% milkfat, with added vitamin A and vitamin D", "Milk, reduced fat, fluid, 2% milkfat, with added nonfat milk solids and vitamin A and vitamin D", "Yogurt, plain, skim milk, 13 grams protein per 8 ounce", "Milk, dry, whole, with added vitamin D", "KRAFT CHEEZ WHIZ Pasteurized Process Cheese Sauce", "Cheese, mozzarella, part skim milk", "Milk, reduced fat, fluid, 2% milkfat, protein fortified, with added vitamin A and vitamin D", "Cheese spread, pasteurized process, american, without di sodium phosphate", "KRAFT BREYERS Lowfat Strawberry Yogurt (1% Milkfat)", "Milk, dry, nonfat, regular, without added vitamin A and vitamin D", "Egg, whole, cooked, hard-boiled", "Cheese, pasteurized process, swiss, without di sodium phosphate", "Cheese, edam", "Cream substitute, liquid, with lauric acid oil and sodium caseinate", "Milk, canned, evaporated, nonfat, with added vitamin A and vitamin D", "Milk, lowfat, fluid, 1% milkfat, protein fortified, with added vitamin A and vitamin D", "KRAFT FREE Singles American Nonfat Pasteurized Process Cheese Product", "Milk, buttermilk, fluid, cultured, lowfat", "Milk, buttermilk, dried", "Milk, nonfat, fluid, with added vitamin A and vitamin D (fat free or skim)", "KRAFT VELVEETA Pasteurized Process Cheese Spread", "Milk, canned, condensed, sweetened", "Milk, dry, nonfat, calcium reduced", "Egg, goose, whole, fresh, raw", "KRAFT BREAKSTONE'S FREE Fat Free Sour Cream", "Yogurt, fruit variety, nonfat, fortified with vitamin D", "Milk, nonfat, fluid, protein fortified, with added vitamin A and vitamin D (fat free and skim)", "Milk, reduced fat, fluid, 2% milkfat, with added vitamin A and vitamin D", "Egg, whole, cooked, fried", "KRAFT CHEEZ WHIZ LIGHT Pasteurized Process Cheese Product", "Milk, filled, fluid, with blend of hydrogenated vegetable oils", "Yogurt, vanilla, low fat, 11 grams protein per 8 ounce", "Milk, nonfat, fluid, with added nonfat milk solids, vitamin A and vitamin D (fat free or skim)", "Milk, low sodium, fluid", "Cheese, romano", "Milk, sheep, fluid", "Milk, producer, fluid, 3.7% milkfat", "Milk, indian buffalo, fluid", "Cheese, feta", "KRAFT BREYERS LIGHT Nonfat Strawberry Yogurt (with Aspartame and Fructose Sweeteners)", "Cheese, low fat, cheddar or colby", "Cheese, mozzarella, part skim milk, low moisture", "Cheese food, pasteurized process, american, with di sodium phosphate", "Cheese, low-sodium, cheddar or colby", "KRAFT BREYERS Smooth & Creamy Lowfat Strawberry Yogurt (1% Milkfat)", "Cheese, provolone, reduced fat", "KRAFT BREAKSTONE'S Reduced Fat Sour Cream", "Egg, duck, whole, fresh, raw", "Milk, dry, nonfat, instant, with added vitamin A and vitamin D", "KRAFT VELVEETA LIGHT Reduced Fat Pasteurized Process Cheese Product", "Cream substitute, powdered", "Milk, canned, evaporated, with added vitamin D and without added vitamin A", "Cheese, goat, soft type", "Yogurt, fruit, lowfat, with low calorie sweetener, fortified with vitamin D", "KRAFT BREYERS LIGHT N' LIVELY Lowfat Strawberry Yogurt (1% Milkfat)"],
  Dai:["奶油", "奶酪，切达干酪", "牛奶、低脂、液态、1%乳脂、添加脱脂乳固体、维生素A和维生素D", "奶酪，香菜", "奶酪，罗克福特生产", "酸味酱，非乳脂，培养，奶油填充型", "酸奶，原味，脱脂牛奶，每8盎司13克蛋白质", "牛奶，减脂，液体，2%乳脂，添加脱脂乳固体和维生素A和维生素D", "牛奶、低脂、液态、1%乳脂、添加维生素A和维生素D", "牛奶、干牛奶、全脂、添加维生素D", "卡夫布雷耶斯低脂草莓酸奶（1%乳脂）", "奶酪酱，巴氏杀菌工艺，美国，不含磷酸二钠", "牛奶、干的、脱脂、普通、不添加维生素A和维生素D", "牛奶、减脂、液体、2%乳脂、蛋白质强化、添加维生素A和维生素D", "卡夫芝士威士巴氏杀菌奶酪酱", "奶酪，巴氏杀菌工艺，瑞士，不含磷酸二钠", "奶酪、马苏里拉干酪、部分脱脂牛奶", "奶酪，伊丹", "鸡蛋、全蛋、熟的、煮熟", "乳膏替代品，液体，含月桂酸油和酪蛋白酸钠", "牛奶，酪乳，干的", "牛奶、罐装、蒸发、脱脂、添加维生素A和维生素D", "牛奶、低脂、液态、1%乳脂、蛋白质强化、添加维生素A和维生素D", "牛奶，酪乳，液体，培养，低脂", "牛奶、脱脂、液体、添加维生素A和维生素D（脱脂或脱脂）", "卡夫美国脱脂巴氏杀菌奶酪产品", "卡夫维维达巴氏杀菌工艺奶酪酱", "鸡蛋、全蛋、新鲜、生的", "牛奶、罐装、浓缩、加糖", "牛奶、脱脂牛奶、降钙牛奶", "牛奶、脱脂、液体、蛋白质强化、添加维生素A和维生素D（脱脂）", "鸡蛋、全蛋、熟的、油炸", "卡夫芝士轻薄巴氏杀菌奶酪产品", "液态奶，含氢化植物油混合物", "卡夫无脂酸奶油", "酸奶，水果酸奶，脱脂，添加维生素D", "牛奶，减脂，液体，2%乳脂，添加维生素A和维生素D", "酸奶、香草、低脂、每8盎司11克蛋白质", "牛奶、低钠、液体", "牛奶、脱脂、液体、添加脱脂乳固体、维生素A和维生素D（脱脂或脱脂）", "奶酪，罗曼诺", "卡夫布雷耶斯淡脱脂草莓酸奶（含阿斯巴甜和果糖甜味剂）", "奶酪，乳酪", "牛奶，生产者，液体，3.7%乳脂", "牛奶、绵羊、液体", "奶酪、马苏里拉干酪、部分脱脂牛奶、低水分", "牛奶、印度水牛、液体", "奶酪、低钠、切达干酪或科尔比干酪", "奶酪食品，巴氏杀菌法，美国，含磷酸二钠", "奶酪、低脂、切达干酪或科尔比干酪", "奶酪、普罗沃龙、低脂", "卡夫VELVEETA轻质低脂巴氏杀菌奶酪制品", "卡夫布雷耶斯光滑奶油低脂草莓酸奶（1%乳脂）", "牛奶、干的、脱脂、速溶、添加维生素A和维生素D", "卡夫碎石减脂酸奶油", "奶酪，山羊，软质", "鸡蛋、全蛋、新鲜、生的", "奶油替代品，粉状", "牛奶、罐装、、添加维生素D和不添加维生素A", "酸奶、水果、低脂、低热量甜味剂、添加维生素D", "卡夫布雷耶斯活泼低脂草莓酸奶（1%牛奶）"],
  Fascal:[274
    , 300
    , 388
    , 312
    , 305
    , 286
    , 277
    , 338
    , 290
    , 327
    , 301
    , 342
    , 264
    , 320
    , 212
    , 356
    , 230
    , 312
    , 371
    , 221
    , 397
    , 224
    , 327
    , 446
    , 405
    , 423
    , 166
    , 340
    , 101
    , 196
    , 180
    , 175
    , 291
    , 303
    , 16
    , 232
    , 266
    , 392
    , 265
    , 45
    , 47
    , 48
    , 206
    , 277
    , 268
    , 163
    , 91
    , 202
    , 82
    , 203
    , 220
    , 242
    , 197
    , 244
    , 212
    , 208
    , 312
    , 285
    , 238
    , 233
    , 223
    , 270
    , 178
    , 155
    , 305
    , 306
    , 282
    , 303
    , 111
    , 217
    , 286
    , 138
    , 141
    , 196
    , 202
    , 305
    , 298
    , 168
    , 223
    , 308
    , 193
    , 543
    , 148
    , 135
    , 251
    , 206
    , 273
    , 283
    , 243
    , 241
    , 239
    , 268
    , 295
    , 295
    , 233
    , 258
    , 286
    , 311
    , 273
    , 260

    , 277
    , 235
    , 310
    , 254
    , 247
    , 267
    , 263
    , 106
    , 190
    , 200
    , 228
    , 329
    , 269
    , 332
    , 160
    , 119
    , 151
    , 122
    , 153
    , 249
    , 225
    , 114
    , 314
    , 168
    , 130
    , 256
    , 83
    , 252
    , 245
    , 297
    , 275
    , 263
    , 257
    , 213
    , 244
    , 258
    , 243
    , 316
    , 221
    , 179
    , 241
    , 256
    , 214
    , 334
    , 266
    , 252
    , 233
    , 275
    , 286
    , 250
    , 331
    , 303
    , 204
    , 202
    , 243
    , 246
    , 243
    , 183
    , 265
    , 216
    , 236
    , 257
    , 271
    , 170
    , 225
    , 260
    , 298
    , 264
    , 244
    , 287
    , 263
    , 179
    , 189
    , 274
    , 296
    , 265
    , 295
    , 275
    , 288
    , 280
    , 315
    , 219
    , 298
    , 167
    , 286
    , 270
    , 280
    , 289
    , 276
    , 240
    , 273
    , 272
    , 280
    , 284
    , 366
    , 304
    , 271
    , 244
    , 272
    , 142

    , 309
    , 170
    , 165
    , 291
    , 248
    , 291
    , 318
    , 468
    , 190
    , 351
    , 344
    , 367
    , 228
    , 193
    , 480
    , 262
    , 398
    , 303
    , 405
    , 272
    , 283
    , 323
    , 186
    , 312
    , 447
    , 158
    , 188
    , 165
    , 640
    , 313
    , 262
    , 177
    , 48
    , 162
    , 86
    , 285
    , 240
    , 232
    , 226
    , 201
    , 313
    , 265
    , 192
    , 262
    , 234
    , 319
    , 196
    , 215
    , 333
    , 274
    , 304
    , 376
    , 294
    , 285
    , 311
    , 256
    , 272
    , 61
    , 376
    , 274
    , 20
    , 90
    , 110
    , 226
    , 81
    , 369
    , 243
    , 111
    , 235
    , 259
    , 403
    , 169
    , 349
    , 322
    , 183
    , 269
    , 253
    , 253
    , 105
    , 285
    , 289
    , 250
    , 244
    , 71
    , 104
    , 44
    , 252
    , 176
    , 118
    , 295
    , 153
    , 271
    , 228
    , 356
    , 272
    , 204
    , 282
    , 253
    , 283
    , 146
 
    , 170
    , 261
    , 408
    , 161
    , 218
    , 179
    , 170
    , 283
    , 175
    , 353
    , 274
    , 144
    , 221
    , 351
    , 156
    , 84
    , 229
    , 302
    , 190
    , 344
    , 182
    , 220
    , 172
    , 152
    , 182
    , 228
    , 257
    , 279
    , 267
    , 319
    , 252
    , 293
    , 279
    , 247
    , 265
    , 256
    , 283
    , 255
    , 255
    , 296
    , 260
    , 268
    , 276
    , 271
    , 132
    , 239
    , 236
    , 156
    , 163
    , 260
    , 221
    , 265
    , 293
    , 309
    , 158
    , 274
    , 286
    , 313
    , 337
    , 268],
  Fasm:[136
    , 63
    , 91
    , 152
    , 150
    , 165
    , 148
    , 108
    , 127
    , 160
    , 145
    , 113
    , 135
    , 129
    , 94
    , 94
    , 192
    , 162
    , 111
    , 139
    , 88
    , 232
    , 72
    , 67
    , 60
    , 55
    , 90
    , 65
    , 253
    , 155
    , 158
    , 153
    , 148
    , 163
    , 207
    , 91
    , 60
    , 115
    , 139
    , 236
    , 217
    , 218
    , 217
    , 164
    , 144
    , 203
    , 417
    , 204
    , 326
    , 186
    , 231
    , 183
    , 336
    , 174
    , 201
    , 304
    , 155
    , 228
    , 220
    , 154
    , 190
    , 127
    , 193
    , 144
    , 166
    , 113
    , 211
    , 100
    , 261
    , 263
    , 254
    , 261
    , 198
    , 163
    , 180
    , 201
    , 204
    , 192
    , 255
    , 149
    , 163
    , 109
    , 225
    , 167
    , 166
    , 233
    , 258
    , 182
    , 143
    , 146
    , 226
    , 215
    , 86
    , 120
    , 146
    , 114
    , 183
    , 137
    , 158
    , 114
  
    , 228
    , 218
    , 249
    , 110
    , 98
    , 259
    , 175
    , 146
    , 216
    , 228
    , 256
    , 78
    , 176
    , 83
    , 296
    , 339
    , 299
    , 395
    , 191
    , 139
    , 204
    , 95
    , 169
    , 25
    , 302
    , 171
    , 80
    , 105
    , 219
    , 96
    , 142
    , 119
    , 219
    , 218
    , 171
    , 199
    , 117
    , 71
    , 236
    , 225
    , 310
    , 129
    , 230
    , 75
    , 399
    , 374
    , 291
    , 121
    , 133
    , 316
    , 74
    , 69
    , 198
    , 99
    , 127
    , 195
    , 115
    , 248
    , 89
    , 272
    , 78
    , 106
    , 96
    , 533
    , 127
    , 117
    , 85
    , 103
    , 151
    , 101
    , 102
    , 248
    , 248
    , 121
    , 76
    , 104
    , 87
    , 123
    , 127
    , 100
    , 39
    , 99
    , 96
    , 43
    , 204
    , 120
    , 96
    , 62
    , 108
    , 153
    , 90
    , 168
    , 95
    , 106
    , 99
    , 63
    , 100
    , 136
    , 106
    , 43
   
    , 48
    , 28
    , 28
    , 199
    , 123
    , 64
    , 135
    , 43
    , 28
    , 14
    , 76
    , 162
    , 149
    , 102
    , 56
    , 56
    , 105
    , 131
    , 43
    , 168
    , 199
    , 77
    , 179
    , 135
    , 57
    , 178
    , 182
    , 337
    , 7
    , 21
    , 113
    , 348
    , 68
    , 90
    , 47
    , 269
    , 138
    , 247
    , 232
    , 233
    , 56
    , 173
    , 218
    , 280
    , 200
    , 59
    , 62
    , 139
    , 115
    , 165
    , 142
    , 117
    , 264
    , 420
    , 163
    , 171
    , 221
    , 223
    , 131
    , 173
    , 87
    , 142
    , 342
    , 247
    , 321
    , 77
    , 124
    , 89
    , 266
    , 205
    , 25
    , 337
    , 21
    , 151
    , 229
    , 199
    , 191
    , 355
    , 149
    , 57
    , 62
    , 254
    , 240
    , 311
    , 314
    , 213
    , 374
    , 97
    , 264
    , 219
    , 140
    , 54
    , 230
    , 52
    , 280
    , 242
    , 217
    , 53
    , 110
    , 145
    
    , 41
    , 219
    , 59
    , 190
    , 44
    , 91
    , 44
    , 134
    , 40
    , 57
    , 47
    , 191
    , 269
    , 6.4
    , 129
    , 149
    , 32
    , 101
    , 73
    , 90
    , 348
    , 268
    , 40
    , 136
    , 84
    , 65
    , 271
    , 164
    , 75
    , 63
    , 199
    , 136
    , 179
    , 161
    , 207
    , 183
    , 145
    , 227
    , 155
    , 146
    , 834
    , 727
    , 713
    , 1020
    , 113
    , 75
    , 44
    , 266
    , 267
    , 152
    , 201
    , 192
    , 76
    , 152
    , 265
    , 81
    , 65
    , 118
    , 68
    , 212],
 Fas2:["Fast foods, biscuit, with egg"
 , "Fast foods, english muffin, with butter"
 , "Fast foods, danish pastry, cheese"
 , "Fast foods, croissant, with egg, cheese, and ham"
 , "Fast foods, biscuit, with egg and bacon"
 , "Fast foods, english muffin, with egg, cheese, and sausage"
 , "Fast foods, biscuit with egg and steak"
 , "Fast foods, english muffin, with cheese and sausage"
 , "Fast foods, croissant, with egg and cheese"
 , "Fast foods, croissant, with egg, cheese, and sausage"
 , "Fast foods, biscuit, with egg, cheese, and bacon"
 , "Fast foods, biscuit, with ham"
 , "Fast foods, french toast with butter"
 , "Fast foods, croissant, with egg, cheese, and bacon"
 , "Fast foods, egg, scrambled"
 , "Fast foods, danish pastry, fruit"
 , "Fast foods, biscuit, with egg and ham"
 , "Fast Foods, biscuit, with egg and sausage"
 , "Fast foods, biscuit, with sausage"
 , "Fast foods, english muffin, with egg, cheese, and canadian bacon"
 , "Fast foods, danish pastry, cinnamon"
 , "Fast foods, pancakes with butter and syrup"
 , "Fast foods, potatoes, hashed brown"
 , "Fast foods, cookies, animal crackers"
 , "Fast foods, brownie"
 , "Fast foods, cookies, chocolate chip"
 , "Fast foods, vanilla, light, soft-serve ice cream, with cone"
 , "Fast foods, french toast sticks"
 , "Fast foods, chili con carne"
 , "Fast foods, sundae, caramel"
 , "Fast foods, sundae, hot fudge"
 , "Fast foods, sundae, strawberry"
 , "Fast foods, chicken, breaded and fried, dark meat (drumstick or thigh)"
 , "Fast foods, chicken, breaded and fried, light meat (breast or wing)"
 , "Fast foods, salad, vegetable, tossed, without dressing"
 , "Entrees, fish fillet, battered or breaded, and fried"
 , "Entrees, crab cake"
 , "Fast foods, clams, breaded and fried"
 , "Fast foods, oysters, battered or breaded, and fried"
 , "Fast foods, salad, vegetable, tossed, without dressing, with shrimp"
 , "Fast foods, salad, vegetable, tossed, without dressing, with cheese and egg"
 , "Fast foods, salad, vegetable, tossed, without dressing, with chicken"
 , "Fast foods, burrito, with beans"
 , "Fast foods, shrimp, breaded and fried"
 , "Fast foods, scallops, breaded and fried"
 , "Fast foods, burrito, with beans, cheese, and beef"
 , "Fast foods, salad, vegetable, tossed, without dressing, with pasta and seafood"
 , "Fast foods, burrito, with beans and chili peppers"
 , "Fast foods, salad, vegetables tossed, without dressing, with turkey, ham and cheese"
 , "Fast foods, burrito, with beans and cheese"
 , "Fast foods, burrito, with beans and meat"
 , "Fast foods, chimichanga, with beef and cheese"
 , "Fast foods, burrito, with beans, cheese, and chili peppers"
 , "Fast foods, chimichanga, with beef"
 , "Fast foods, burrito, with beef and chili peppers"
 , "Fast foods, burrito, with beef, cheese, and chili peppers"
 , "Fast foods, burrito, with fruit (apple or cherry)"
 , "Fast foods, cheeseburger; double, regular, patty and bun; with condiments and vegetables"
 , "Fast foods, burrito, with beef"
 , "Fast foods, cheeseburger; single, regular patty, with condiments and vegetables"
 , "Fast foods, chimichanga, with beef and red chili peppers"
 , "Fast foods, cheeseburger; single, regular patty, with condiments"
 , "Fast foods, enchirito, with cheese, beef, and beans"
 , "Fast foods, tostada, with beans and cheese"
 , "Fast foods, cheeseburger; single, large patty; plain"
 , "Fast foods, nachos, with cheese"
 , "Fast foods, cheeseburger; single, large patty; with condiments and bacon"
 , "Fast foods, cheeseburger; single, regular patty; plain"
 , "Fast foods, taco salad with chili con carne"
 , "Fast foods, taco"
 , "Fast foods, cheeseburger; single, large patty; with condiments, vegetables and ham"
 , "Tostada with guacamole"
 , "Fast foods, taco salad"
 , "Fast foods, enchilada, with cheese"
 , "Fast foods, chimichanga, with beef, cheese, and red chili peppers"
 , "Fast foods, cheeseburger, regular, double patty and bun, plain"
 , "Fast foods, nachos, with cheese and jalapeno peppers"
 , "Fast foods, enchilada, with cheese and beef"
 , "Fast foods, nachos, with cheese, beans, ground beef, and peppers"
 , "Fast foods, cheeseburger; double, regular patty; plain"
 , "Fast foods, tostada, with beef and cheese"
 , "Fast foods, nachos, with cinnamon and sugar"
 , "Fast foods, tostada, with beans, beef, and cheese"
 , "Fast foods, frijoles with cheese"
 , "Fast foods, cheeseburger; double, regular patty, with condiments and vegetables"
 , "Fast foods, cheeseburger; single, large patty; with condiments and vegetables"
 , "Fast foods, cheeseburger; double, large patty, with condiments and vegetables"
 , "Fast foods, chicken fillet sandwich, plain"
 , "Fast foods, ham, egg, and cheese sandwich"
 , "Fast foods, ham and cheese sandwich"
 , "Fast foods, hamburger; double, large patty; with condiments and vegetables"
 , "Fast foods, hamburger; double, regular patty; with condiments"
 , "Fast foods, hamburger; single, regular patty; plain"
 , "Fast foods, hamburger; double, regular, patty; plain"
 , "Fast foods, egg and cheese sandwich"
 , "Fast foods, hamburger; single, regular patty; with condiments"
 , "Fast foods, fish sandwich, with tartar sauce and cheese"
 , "Fast foods, hamburger; single, large patty; plain"
 , "Fast foods, fish sandwich, with tartar sauce"
 , "Fast foods, hotdog, with chili"

 , "Fast foods, chicken fillet sandwich, with cheese"
 , "Fast foods, hamburger; single, large patty; with condiments and vegetables"
 , "Fast foods, cheeseburger; triple, regular patty; plain"
 , "Fast foods, hamburger; single, regular patty; with condiments and vegetables"
 , "Fast foods, hotdog, plain"
 , "Fast foods, hamburger, large, triple patty, with condiments"
 , "Fast foods, hotdog, with corn flour coating (corndog)"
 , "Fast foods, corn on the cob with butter"
 , "Fast foods, submarine sandwich, with roast beef"
 , "Fast foods, submarine sandwich, with cold cuts"
 , "Fast foods, submarine sandwich, with tuna salad"
 , "Fast foods, hush puppies"
 , "Sandwiches and burgers, roast beef sandwich with cheese"
 , "Fast foods, onion rings, breaded and fried"
 , "Fast foods, potato, baked and topped with cheese sauce"
 , "Fast foods, potato, baked and topped with cheese sauce and broccoli"
 , "Fast foods, potato, baked and topped with cheese sauce and bacon"
 , "Fast foods, potato, baked and topped with cheese sauce and chili"
 , "Fast foods, coleslaw"
 , "Fast foods, roast beef sandwich, plain"
 , "Sandwiches and burgers, steak sandwich"
 , "Side dishes, potato salad"
 , "Fast foods, potato, french fried in vegetable oil"
 , "BURGER KING, Vanilla Shake"
 , "Fast foods, potato, baked and topped with sour cream and chives"
 , "Fast foods, hamburger, large, single patty, with condiments"
 , "Fast foods, potato, mashed"
 , "McDONALD'S, Hamburger"
 , "Fast Foods, crispy chicken filet sandwich, with lettuce, tomato and mayonnaise"
 , "Fast foods, chicken, breaded and fried, boneless pieces, plain"
 , "McDONALD'S, FILET-O-FISH"
 , "McDONALD'S, Cheeseburger"
 , "McDONALD'S, BIG MAC"
 , "WENDY'S, CLASSIC SINGLE Hamburger, no cheese"
 , "McDONALD'S, QUARTER POUNDER"
 , "McDONALD'S, QUARTER POUNDER with Cheese"
 , "WENDY'S, Jr. Hamburger, without cheese"
 , "McDONALD'S, French Fries"
 , "WENDY'S, CLASSIC SINGLE Hamburger, with cheese"
 , "WENDY'S, Ultimate Chicken Grill Sandwich"
 , "WENDY'S, CLASSIC DOUBLE, with cheese"
 , "WENDY'S, Jr. Hamburger, with cheese"
 , "WENDY'S, Homestyle Chicken Fillet Sandwich"
 , "WENDY'S, Chicken Nuggets"
 , "BURGER KING, DOUBLE WHOPPER, with cheese"
 , "BURGER KING, DOUBLE WHOPPER, no cheese"
 , "BURGER KING, WHOPPER, no cheese"
 , "BURGER KING, Hamburger"
 , "BURGER KING, Cheeseburger"
 , "BURGER KING, WHOPPER, with cheese"
 , "BURGER KING, French Fries"
 , "PIZZA HUT 12 Cheese Pizza, THIN 'N CRISPY Crust"
 , "TACO BELL, Bean Burrito"
 , "TACO BELL, Soft Taco with chicken"
 , "PIZZA HUT 12 Super Supreme Pizza, Regular Crust"
 , "TACO BELL, Nachos Supreme"
 , "LITTLE CAESARS 14 Original Round Meat and Vegetable Pizza, Regular Crust"
 , "TACO BELL, BURRITO SUPREME with steak"
 , "LITTLE CAESARS 14 Original Round Cheese Pizza, Regular Crust"
 , "BURGER KING, Chicken WHOPPER Sandwich"
 , "TACO BELL, Original Taco with beef"
 , "DOMINO'S 14 Cheese Pizza, Classic Hand-Tossed Crust"
 , "PIZZA HUT 12 Cheese Pizza, Regular Crust"
 , "TACO BELL, Taco Salad"
 , "TACO BELL, Soft Taco with steak"
 , "PAPA JOHN'S 14 Cheese Pizza, Original Crust"
 , "PIZZA HUT 14 Pepperoni Pizza, Thick Crust"
 , "Fast Food, Pizza Chain, 14 Pizza, cheese topping, regular crust"
 , "DOMINO'S 14 EXTRAVAGANZZA FEAST Pizza, Classic Hand-Tossed Crust"
 , "PIZZA HUT 14 Pepperoni Pizza, Regular Crust"
 , "LITTLE CAESARS 14 Cheese Pizza, Large Deep Dish Crust"
 , "TACO BELL, BURRITO SUPREME with chicken"
 , "TACO BELL, BURRITO SUPREME with beef"
 , "DOMINO'S 14 Cheese Pizza, Ultimate Deep Dish Crust"
 , "PIZZA HUT 14 Cheese Pizza, THIN 'N CRISPY Crust"
 , "LITTLE CAESARS 14 Pepperoni Pizza, Large Deep Dish Crust"
 , "PAPA JOHN'S 14 Cheese Pizza, Thin Crust"
 , "PAPA JOHN'S 14 Pepperoni Pizza, Original Crust"
 , "DOMINO'S 14 Pepperoni Pizza, Ultimate Deep Dish Crust"
 , "PIZZA HUT 12 Cheese Pizza, Thick Crust"
 , "DOMINO'S 14 Cheese Pizza, Crunchy Thin Crust"
 , "TACO BELL, Soft Taco with beef"
 , "PIZZA HUT 12 Pepperoni Pizza, Thick Crust"
 , "McDONALD'S, Tangy Honey Mustard Sauce"
 , "BURGER KING, Original Chicken Sandwich"
 , "DOMINO'S 14 Pepperoni Pizza, Classic Hand-Tossed Crust"
 , "PIZZA HUT 12 Pepperoni Pizza, Regular Crust"
 , "BURGER KING, CHICKEN TENDERS"
 , "Fast Food, Pizza Chain, 14 pizza, pepperoni topping, regular crust"
 , "PAPA JOHN'S 14 The Works Pizza, Original Crust"
 , "LITTLE CAESARS 14 Original Round Pepperoni Pizza, Regular Crust"
 , "Fast foods, griddle cake sandwich, egg, cheese, and bacon"
 , "PIZZA HUT 14 Cheese Pizza, Thick Crust"
 , "Fast Food, Pizza Chain, 14 Pizza, pepperoni topping, thick crust"
 , "TACO BELL, Nachos"
 , "Fast Food, Pizza Chain, 14 Pizza, cheese topping, thin crust"
 , "PIZZA HUT 14 Cheese Pizza, Regular Crust"
 , "Fast Food, Pizza Chain, 14 pizza, meat and vegetable topping, regular crust"
 , "Fast Food, Pizza Chain, 14 Pizza, cheese topping, thick crust"
 , "McDONALD'S, Spicy Buffalo Sauce"

 , "LITTLE CAESARS 14 Cheese Pizza, Thin Crust"
 , "McDONALD'S, Sweet 'N Sour Sauce"
 , "McDONALD'S, Barbeque Sauce"
 , "Fast foods, griddle cake sandwich, egg, cheese, and sausage"
 , "PIZZA HUT 14 Super Supreme Pizza, Regular Crust"
 , "McDONALD'S, Chicken McNUGGETS"
 , "Fast foods, griddle cake sandwich, sausage"
 , "McDONALD'S, Creamy Ranch Sauce"
 , "McDONALD'S, Hot Mustard Sauce"
 , "McDONALD'S, Honey"
 , "McDONALD'S, Biscuit, regular size"
 , "McDONALD'S, Deluxe Warm Cinnamon Roll"
 , "McDONALD'S, Hotcakes (plain)"
 , "McDONALD'S, Scrambled Eggs"
 , "McDONALD'S, McDONALDLAND Chocolate Chip Cookies"
 , "McDONALD'S, Hash Browns"
 , "McDONALD'S, Warm Cinnamon Roll"
 , "McDONALD'S, Chicken SELECTS Premium Breast Strips"
 , "McDONALD'S, Sausage Patty"
 , "McDONALD'S, Bacon, Egg & Cheese McGRIDDLES"
 , "McDONALD'S, Sausage, Egg & Cheese McGRIDDLES"
 , "McDONALD'S, Baked Apple Pie"
 , "McDONALD'S, Hot Fudge Sundae"
 , "McDONALD'S, Sausage McGRIDDLES"
 , "McDONALD'S, McDONALDLAND Cookies"
 , "McDONALD'S, Strawberry Sundae"
 , "McDONALD'S, Hot Caramel Sundae"
 , "McDONALD'S, McFLURRY with OREO cookies"
 , "McDONALD'S, Peanuts (for Sundaes)"
 , "McDONALD'S, Low Fat Caramel Sauce"
 , "McDONALD'S, Sausage Burrito"
 , "McDONALD'S, McFLURRY with M&M'S CANDIES"
 , "McDONALD'S, Apple Dippers"
 , "McDONALD'S, Vanilla Reduced Fat Ice Cream Cone"
 , "McDONALD'S, NEWMAN'S OWN Low Fat Balsamic Vinaigrette"
 , "McDONALD'S, BIG BREAKFAST"
 , "McDONALD'S, McCHICKEN Sandwich (without mayonnaise)"
 , "McDONALD'S, BIG 'N TASTY with Cheese"
 , "McDONALD'S, BIG 'N TASTY"
 , "McDONALD'S, BIG 'N TASTY with Cheese (without mayonnaise)"
 , "McDONALD'S, NEWMAN'S OWN Ranch Dressing"
 , "McDONALD'S, Double Cheeseburger"
 , "McDONALD'S, BIG 'N TASTY (without mayonnaise)"
 , "McDONALD'S, DOUBLE QUARTER POUNDER with Cheese"
 , "McDONALD'S, BIG MAC (without Big Mac Sauce)"
 , "McDONALD'S, NEWMAN'S OWN Creamy Caesar Dressing"
 , "McDONALD'S, NEWMAN'S OWN Cobb Dressing"
 , "McDONALD'S, Egg McMUFFIN"
 , "McDONALD'S, Sausage McMUFFIN"
 , "McDONALD'S, Sausage McMuffin with Egg"
 , "McDONALD'S, Bacon Egg & Cheese Biscuit"
 , "McDONALD'S, Sausage Biscuit"
 , "McDONALD'S, Hotcakes and Sausage"
 , "McDONALD'S, Deluxe Breakfast, with syrup and margarine"
 , "McDONALD'S, Sausage Biscuit with Egg"
 , "Fast foods, hamburger; single, large patty; with condiments"
 , "McDONALD'S, Hotcakes (with 2 pats margarine & syrup)"
 , "McDONALD'S, Bacon Ranch Salad without chicken"
 , "BURGER KING, CROISSAN'WICH with Sausage and Cheese"
 , "Fast foods, cheeseburger; double, regular patty; with condiments"
 , "McDONALD'S, Side Salad"
 , "McDONALD'S, Fruit 'n Yogurt Parfait (without granola)"
 , "McDONALD'S Bacon Ranch Salad with Crispy Chicken"
 , "Fast foods, hamburger; single, large patty; with condiments, vegetables and mayonnaise"
 , "McDONALD'S, Bacon Ranch Salad with Grilled Chicken"
 , "BURGER KING, Hash Brown Rounds"
 , "McDONALD'S, FILET-O-FISH (without tartar sauce)"
 , "McDONALD'S, Apple Dippers with Low Fat Caramel Sauce"
 , "Fast foods, cheeseburger;single, large patty; with condiments, vegetables and mayonnaise"
 , "Fast foods, hamburger; single, regular patty; double decker bun with condiments and special sauce"
 , "Fast foods, miniature cinnamon rolls"
 , "Light Ice Cream, soft serve, blended with cookie pieces"
 , "BURGER KING, French Toast Sticks"
 , "BURGER KING, CROISSAN'WICH with Sausage, Egg and Cheese"
 , "McDONALD'S, Premium Grilled Chicken Classic Sandwich"
 , "Fast foods, cheeseburger; single, large patty; with condiments"
 , "Fast foods, bagel, with ham, egg, and cheese"
 , "Fast Foods, cheeseburger; double, large patty; with condiments, vegetables and mayonnaise"
 , "McDONALD'S, Fruit 'n Yogurt Parfait"
 , "McDONALD'S, English Muffin"
 , "Fast foods, chicken tenders"
 , "McDONALD'S, Premium Crispy Chicken Club Sandwich"
 , "McDONALD'S, Premium Crispy Chicken Ranch BLT Sandwich"
 , "McDONALD'S, Caesar Salad with Grilled Chicken"
 , "McDONALD'S, Caesar Salad with Crispy Chicken"
 , "McDONALD'S, Caesar Salad without chicken"
 , "Fast foods, hamburger; double, large patty; with condiments, vegetables and mayonnaise"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Thigh, meat only, skin and breading removed"
 , "McDONALD'S, Fruit & Walnut Salad"
 , "Fast foods, bagel, with egg, sausage patty, cheese, and condiments"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Breast, meat only, skin and breading removed"
 , "POPEYES, Mild Chicken Strips, analyzed 2006"
 , "McDONALD'S, Premium Crispy Chicken Classic Sandwich"
 , "KENTUCKY FRIED CHICKEN, Biscuit, analyzed prior to January 2007"
 , "Fast foods, cheeseburger; double, large patty; with condiments"
 , "McDONALD'S, Premium Grilled Chicken Ranch BLT Sandwich"
 , "Fast foods, bagel, with breakfast steak, egg, cheese, and condiments"
 , "POPEYES, Spicy Chicken Strips, analyzed 2006"
 , "BURGER KING, CROISSAN'WICH with Egg and Cheese"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Breast, meat only, skin and breading removed"
 
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Drumstick, meat only, skin and breading removed"
 , "Fast foods, cheeseburger; double, regular patty; double decker bun with condiments and special sauce"
 , "POPEYES, Biscuit"
 , "POPEYES, Coleslaw"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Wing, meat only, skin and breading removed"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Thigh, meat only, skin and breading removed"
 , "POPEYES, Fried Chicken, Mild, Drumstick, meat only, skin and breading removed"
 , "KENTUCKY FRIED CHICKEN, Potato Wedges, analyzed prior to January 2007"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Drumstick, meat only, skin and breading removed"
 , "POPEYES, Fried Chicken, Mild, Wing, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Crispy Chicken Strips"
 , "KENTUCKY FRIED CHICKEN, Coleslaw"
 , "McDONALD'S, Premium Grilled Chicken Club Sandwich"
 , "KENTUCKY FRIED CHICKEN, Popcorn Chicken"
 , "POPEYES, Fried Chicken, Mild, Breast, meat only, skin and breading removed"
 , "Yogurt parfait, lowfat, with fruit and granola"
 , "POPEYES, Fried Chicken, Mild, Wing, meat only, skin and breading removed"
 , "POPEYES, Batter Fries, analyzed prior to December 2006"
 , "POPEYES, Fried Chicken, Mild, Thigh, meat only, skin and breading removed"
 , "McDONALD'S, Biscuit, large size"
 , "Light Ice Cream, soft serve, blended with milk chocolate candies"
 , "Fast foods, grilled chicken, bacon and tomato club sandwich, with cheese, lettuce, and mayonnaise"
 , "Fast Foods, Fried Chicken, Drumstick, meat only, skin and breading removed"
 , "Fast Foods, Fried Chicken, Breast, meat only, skin and breading removed"
 , "Fast Foods, Fried Chicken, Thigh, meat only, skin and breading removed"
 , "Fast Foods, Fried Chicken, Wing, meat only, skin and breading removed"
 , "Fast foods, crispy chicken, bacon, and tomato club sandwich, with cheese, lettuce, and mayonnaise"
 , "DIGIORNO Pizza, cheese topping, cheese stuffed crust, frozen, baked"
 , "Fast Foods, Fried Chicken, Drumstick, meat and skin with breading"
 , "Fast Foods, Fried Chicken, Wing, meat and skin and breading"
 , "Fast Foods, Fried Chicken, Breast, meat and skin with breading"
 , "Fast Foods, Fried Chicken, Thigh, meat and skin and breading"
 , "DIGIORNO Pizza, pepperoni topping, cheese stuffed crust, frozen, baked"
 , "DIGIORNO Pizza, cheese topping, thin crispy crust, frozen, baked"
 , "DIGIORNO Pizza, pepperoni topping, rising crust, frozen, baked"
 , "DIGIORNO Pizza, cheese topping, rising crust, frozen, baked"
 , "DIGIORNO Pizza, pepperoni topping, thin crispy crust, frozen, baked"
 , "DIGIORNO Pizza, supreme topping, rising crust, frozen, baked"
 , "DIGIORNO Pizza, supreme topping, thin crispy crust, frozen, baked"
 , "Pizza, pepperoni topping, regular crust, frozen, cooked"
 , "Pizza, cheese topping, rising crust, frozen, cooked"
 , "Pizza, cheese topping, regular crust, frozen, cooked"
 , "Pizza, meat and vegetable topping, regular crust, frozen, cooked"
 , "Pizza, meat and vegetable topping, rising crust, frozen, cooked"
 , "WENDY'S, Frosty Dairy Dessert"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Drumstick, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Wing, meat only, skin and breading removed"
 , "McDONALD'S, Vanilla TRIPLE THICK Shake"
 , "McDONALD'S, Chocolate TRIPLE THICK Shake"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Thigh, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Breast, meat and skin with breading"
 , "POPEYES, Fried Chicken, Mild, Breast, meat and skin with breading"
 , "POPEYES, Fried Chicken, Mild, Drumstick, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Thigh, meat and skin with breading"
 , "McDONALD'S, Strawberry TRIPLE THICK Shake"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Drumstick, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, ORIGINAL RECIPE, Wing, meat and skin with breading"
 , "POPEYES, Fried Chicken, Mild, Thigh, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Wing, meat and skin with breading"
 , "KENTUCKY FRIED CHICKEN, Fried Chicken, EXTRA CRISPY, Breast, meat and skin with breading"],
 Fas:["快餐、英式松饼加黄油", "快餐、饼干、加鸡蛋", "快餐、英式松饼、加鸡蛋、奶酪和香肠", "快餐、饼、加鸡蛋和培根", "快餐、鸡蛋和牛排", "快餐、丹麦糕点、加奶酪", "快餐、牛角面包、鸡蛋、奶酪和火腿", "快餐、英式松饼、配奶酪和香肠", "快餐、羊角面包、配鸡蛋和奶酪", "快餐、羊角面包、鸡蛋、配奶酪和香肠", "快餐、羊角面包、配鸡蛋、奶酪和培根", "快餐、丹麦糕点、配水果", "快餐、鸡蛋、配菜花", "快餐、饼干、配火腿", "快餐，黄油法式吐司", "快餐、饼干、配鸡蛋和火腿", "快餐、饼干、配鸡蛋和香肠", "快餐、饼干、配鸡蛋、奶酪和培根", "快餐、饼干、香肠", "快餐、英式松饼、鸡蛋、奶酪和加拿大培根", "快餐、饼干、巧克力片", "快餐、丹麦糕点、配肉桂", "快餐，布朗尼", "快餐、饼干、动物饼干", "快餐，黄油和糖浆煎饼", "快餐、炸土豆", "快餐、香草、清淡、软冰淇淋、带圆锥形", "快餐，辣酱", "快餐，法式烤面包棒", "快餐、圣代、焦糖", "快餐、圣代、草莓", "快餐、鸡肉、面包和油炸（鸡腿或大腿）", "快餐、鸡肉、面包和油炸胸肉或翅", "快餐、圣代、热软糖", "快餐、沙拉、蔬菜、拌制、不加调味品", "主菜、鱼片、面糊或面包、油炸", "快餐、牡蛎、面糊或面包、油炸", "快餐、沙拉、蔬菜、拌制、不加调味料、带虾", "主菜，蟹肉蛋糕", "快餐、蛤蜊、面包和油炸食品", "快餐、墨西哥煎饼、豆角", "快餐、色拉、蔬菜、不加调味品、加奶酪和鸡蛋", "快餐、沙拉、蔬菜、拌制、不加调料、鸡肉", "快餐、虾、面包和油炸", "快餐、墨西哥煎饼、豆子、奶酪和牛肉", "快餐、扇贝、面包和油炸", "快餐、色拉、蔬菜、不加调味品、拌入意大利面和海鲜", "快餐、墨西哥煎饼、豆角和辣椒", "快餐、墨西哥煎饼、豆子和奶酪", "快餐、色拉、蔬菜、无调料、火鸡、火腿和奶酪", "快餐、墨西哥煎饼、豆类和肉类", "快餐，牛肉配奶酪", "快餐、墨西哥煎饼、豆子、奶酪和辣椒", "快餐、墨西哥煎饼、牛肉、奶酪和辣椒", "快餐、墨西哥煎饼、牛肉和辣椒", "快餐，煎牛肉", "快餐、墨西哥煎饼、水果（苹果或樱桃）", "快餐，芝士汉堡；双人，普通，肉饼和面包；配调味品和蔬菜", "快餐，芝士汉堡；带调味品和蔬菜的单一常规肉饼", "快餐、墨西哥煎饼、牛肉", "快餐，芝士汉堡；单份，普通肉饼，含调味品", "快餐，，牛肉配红辣椒", "快餐、玉米片、奶酪", "快餐，托斯塔达，加豆子和奶酪", "快餐、芝士、牛肉和豆类", "快餐，芝士汉堡；单一，普通肉饼；原味", "快餐，芝士汉堡；单份，大馅饼；配调味品和培根", "快餐，芝士汉堡；单份，大馅饼；原味", "快餐、墨西哥玉米卷色拉和辣酱", "快餐，玉米卷", "快餐，芝士汉堡；单份大馅饼；配调味品、蔬菜和火腿", "快餐、芝士汉堡、普通、双层肉饼和面包、原味", "快餐、玉米片、奶酪和墨西哥胡椒", "快餐，玉米卷沙拉", "快餐、墨西哥干酪、奶酪", "快餐，牛肉、配奶酪和红辣椒", "鳄梨酱托斯塔", "快餐、墨西哥干酪、奶酪和牛肉", "快餐、玉米片、奶酪、豆子、碎牛肉和胡椒", "快餐，芝士汉堡；双份，普通肉饼；原味", "快餐，托斯塔达，配豆子，牛肉和奶酪", "快餐、玉米片、肉桂和糖", "快餐，芝士汉堡；双份，常规肉饼，含调味品和蔬菜", "快餐，芝士汉堡；单份，大馅饼；带调味品和蔬菜", "快餐，芝士汉堡；双人大馅饼，带调味品和蔬菜", "快餐，托斯塔达，配牛肉和奶酪", "快餐，奶酪炸薯条", "快餐，鸡柳三明治，原味", "快餐、火腿、鸡蛋和奶酪三明治", "快餐、火腿奶酪三明治", "快餐，汉堡包；双份，普通肉饼；带调味品", "快餐，汉堡包；双层大馅饼；带调味品和蔬菜", "快餐，汉堡包；单份，普通肉饼；原味", "快餐，汉堡包；单一的，普通的肉饼；有调味品", "快餐，汉堡包；双份，普通，肉饼；原味", "快餐、鸡蛋和奶酪三明治", "快餐、鱼肉三明治、鞑靼酱", "快餐、鱼肉三明治、鞑靼酱和奶酪", "快餐，汉堡包；单份，大馅饼；原味", "快餐、热狗、辣椒","快餐，汉堡包；单一的，普通的肉饼；有调味品和蔬菜", "快餐，芝士汉堡；三份，普通肉饼；原味", "快餐、汉堡包、大号、三层肉饼、含调味品", "快餐、热狗、原味", "快餐，玉米棒加黄油", "快餐、鸡柳三明治、奶酪", "快餐、海底三明治、烤牛肉", "快餐，汉堡包；单一的大馅饼；有调味品和蔬菜", "快餐、热狗、带玉米粉涂层", "快餐，海底三明治，冷切", "快餐、土豆、烤制、加奶酪酱", "快餐、洋葱圈、面包和油炸", "快餐、海底三明治、金枪鱼沙拉", "三明治和汉堡，烤牛肉奶酪三明治", "快餐，原味热狗", "快餐、土豆、烤制、加奶酪酱和西兰花", "快餐，凉拌卷心菜", "快餐、土豆、烤制、加奶酪酱和培根", "快餐，烤牛肉三明治，原味", "快餐、土豆、烤制、加奶酪酱和辣椒", "三明治和汉堡，牛排三明治", "汉堡王，香草奶昔", "快餐、土豆、烘焙、加酸奶油和韭菜", "快餐、汉堡包、大号、单块肉饼、含调味品", "快餐、土豆、油炸法式", "配菜，土豆沙拉", "麦当劳、汉堡包", "快餐、脆皮鸡柳三明治、生菜、西红柿和蛋黄酱", "快餐、土豆、土豆泥", "快餐、鸡肉、面包和油炸、无骨片、原味", "麦当劳，四分之一磅", "麦当劳，四分之一磅奶酪", "麦当劳，芝士汉堡", "温迪的，经典的单汉堡，没有奶酪", "麦当劳，巨无霸", "麦当劳、薯条", "温迪，终极烤鸡三明治", "小温迪汉堡，不加奶酪", "麦当劳，菲力鱼", "温迪，经典的单汉堡，加奶酪", "温迪，家常鸡肉三明治", "汉堡王，双份汉堡，不加奶酪", "小温迪汉堡加奶酪", "温迪，经典双人，加奶酪", "汉堡王，双份汉堡，加奶酪", "温迪的，鸡块", "汉堡王、华勃、奶酪", "汉堡王，芝士汉堡", "汉堡王，汉堡包", "汉堡王，华勃，奶酪", "必胜客12号超级比萨饼，普通面包皮", "玉米卷钟，鸡肉软玉米卷", "墨西哥玉米卷", "必胜客12芝士披萨，薄脆的外壳", "汉堡王，炸薯条", "墨西哥玉米卷", "小凯撒14原味圆形芝士披萨，普通面包皮", "小凯撒14原味圆形肉蔬菜披萨，普通皮", "塔可钟，墨西哥煎饼配牛排", "汉堡王鸡肉三明治", "玉米卷钟，软玉米卷配牛排", "必胜客12芝士披萨，普通硬皮", "玉米卷钟，原味牛肉玉米卷", "塔可钟，塔可沙拉", "约翰爸爸的14芝士披萨，原汁原味", "快餐，奶酪面", "多米诺14芝士披萨，经典的手抛面包皮", "必胜客14号意大利香肠披萨，厚皮", "必胜客14号意大利香肠披萨，普通硬皮", "多米诺14大餐披萨，经典手工抛饼皮", "小凯撒14意大利香肠披萨，大盘深皮", "多米诺14芝士披萨，终极深盘面包皮", "必胜客14芝士披萨，薄脆的外壳", "小凯撒14芝士披萨，大盘深皮", "墨西哥玉米卷，牛肉卷饼", "墨西哥玉米卷，鸡肉玉米卷", "约翰爸爸的14芝士披萨薄皮", "必胜客12芝士披萨，厚皮", "约翰爸爸的14个意大利香肠披萨，原汁原味", "多米诺的14个意大利香肠披萨，终极深盘面包皮", "汉堡王，原汁原味鸡肉三明治", "多米诺14芝士披萨，松脆薄皮", "麦当劳，甜蜂蜜芥末酱", "必胜客12意大利香肠披萨，厚皮", "玉米卷钟，牛肉软玉米卷", "多米诺的14个意大利香肠披萨，经典的手抛面包皮", "汉堡王，鸡肉卷", "快餐，披萨连锁店，14个披萨，意大利香肠面，普通面包皮", "必胜客12号意大利香肠披萨，普通面包皮", "约翰爸爸的14号作品披萨，原汁原味", "快餐、煎饼三明治、鸡蛋、奶酪和培根", "墨西哥玉米卷", "必胜客14芝士披萨，厚皮", "快餐，披萨连锁店，14个披萨，奶酪面，薄皮", "快餐，披萨连锁店，14个披萨，意大利香肠面，厚皮", "小凯撒14原味圆形意大利香肠披萨，普通外皮", "必胜客14芝士披萨，普通硬皮", "快餐，披萨连锁店，14个披萨，奶酪面，厚皮", "麦当劳，辣味水牛酱", "快餐、14个披萨、肉类和蔬菜配料、普通面包皮","小凯撒14芝士披萨薄皮", "麦当劳、麦乐鸡", "麦当劳，糖醋汁", "必胜客14号超级比萨饼，普通面包皮", "快餐、煎饼三明治、鸡蛋、奶酪和香肠", "麦当劳，奶油牧场酱", "快餐、煎饼三明治、香肠", "麦当劳，烧烤酱", "麦当劳，鸡肉堡", "麦当劳，辣芥末酱", "麦当劳、饼干、普通尺寸", "麦当劳，热蛋糕（原味）", "麦当劳、麦当劳和巧克力饼干", "麦当劳，土豆饼", "麦当劳，豪华温肉桂卷", "麦当劳，炒鸡蛋", "麦当劳、培根、鸡蛋和奶酪", "麦当劳，温肉桂卷", "麦当劳，鸡肉精选优质胸脯", "麦当劳，香肠馅饼", "麦当劳、麦当劳和饼干", "麦当劳，香肠", "麦当劳、香肠、鸡蛋和奶酪麦格里德", "麦当劳，草莓圣代", "麦当劳，热焦糖圣代", "麦当劳，烤苹果派", "麦当劳，热软糖圣代", "麦当劳，麦弗利配奥利奥饼干", "麦当劳，花生（圣代）", "麦当劳，低脂焦糖酱", "麦当劳，麦弗瑞和M&M糖果", "麦当劳，苹果酱", "麦当劳、香草减肥冰淇淋筒", "麦当劳，香肠煎饼", "麦当劳，帕尼尼堡", "麦当劳，大号奶酪", "麦当劳，低脂香醋", "麦当劳，麦奇肯三明治（不含蛋黄酱）", "麦当劳，蟹黄包", "麦当劳，美味加奶酪（不加蛋黄酱）", "麦当劳，双层芝士汉堡", "麦当劳，奶油凯撒酱", "麦当劳，巨无霸（不加巨无霸酱）", "麦当劳，美味可口（不含蛋黄酱）", "麦当劳，双份四分之一磅奶酪", "麦当劳，鲜虾堡", "麦当劳，柯布酱", "麦当劳香辣鸡腿堡", "麦当劳，香肠加鸡蛋", "麦当劳，香肠", "麦当劳，豪华早餐，含糖浆和人造黄油", "麦当劳，香肠饼干", "麦当劳，鸡蛋香肠饼干", "麦当劳、培根鸡蛋奶酪饼干", "麦当劳，培根农场沙拉，不含鸡肉", "麦当劳、热蛋糕和香肠", "麦当劳、热蛋糕（含两片人造黄油和糖浆）", "快餐，汉堡包；单份，大馅饼；带调味品", "汉堡王，牛角面包配香肠和奶酪", "快餐，芝士汉堡；双份，普通肉饼；含调味品", "汉堡王，炸棕色的圆面包", "麦当劳，水果酸奶冻糕（不含麦片）", "快餐，汉堡包；大馅饼；配调味品、蔬菜和蛋黄酱", "麦当劳、培根农场沙拉配烤鸡", "麦当劳，沙拉", "麦当劳、苹果蘸低脂焦糖酱", "麦当劳、菲力鱼（不含鞑靼酱）", "快餐，芝士汉堡；大馅饼；配调味品、蔬菜和蛋黄酱", "麦当劳培根农场沙拉配脆皮鸡肉", "快餐，汉堡包；单层，普通肉饼；双层面包，带调味品和特殊调味汁", "快餐，小肉桂卷", "快餐，芝士汉堡；单份，大馅饼；含调味品", "麦当劳，优质烤鸡经典三明治", "汉堡王、牛角面包配香肠、鸡蛋和奶酪", "轻冰淇淋，软服务，混合曲奇块", "汉堡王，法式烤面包棒", "快餐，芝士汉堡；双人大馅饼；配调味品、蔬菜和蛋黄酱", "麦当劳，水果酸奶冻糕", "快餐、百吉饼、火腿、鸡蛋和奶酪", "麦当劳，英式松饼", "麦当劳、凯撒烤鸡沙拉", "麦当劳，优质脆皮鸡肉俱乐部三明治", "麦当劳，优质脆皮鸡牧场BLT三明治", "快餐、鸡丁", "麦当劳、凯撒酥鸡肉沙拉", "快餐，汉堡包；双层大馅饼；配调味品、蔬菜和蛋黄酱", "肯德基炸鸡，炸鸡，原配方，大腿，仅肉，去皮", "麦当劳水果核桃沙拉", "麦当劳、凯撒沙拉（不含鸡肉）", "快餐、百吉饼、鸡蛋、香肠馅饼、奶酪和调味品", "肯德基炸鸡，炸鸡，特脆，胸脯，仅肉，去皮和面包", "爆米花，淡鸡块", "肯德基炸鸡", "麦当劳，优质烤鸡肉农场三明治", "麦当劳，优质脆皮鸡肉经典三明治", "快餐，芝士汉堡；双份，大馅饼；带调味品", "大力水手，麻辣鸡条", "汉堡王，牛角面包配鸡蛋和奶酪", "肯德基炸鸡，炸鸡，原配方，胸脯，仅肉，去皮和面包", "快餐、百吉饼、早餐牛排、鸡蛋、奶酪和调味品","大力水手，凉拌卷心菜", "肯德基炸鸡，炸鸡，原配方，翅，仅肉，去皮和面包", "快餐，芝士汉堡；双层，普通肉饼；双层面包配调味品和特殊调味汁", "大力水手，饼干", "肯德基炸鸡，炸鸡，特脆，大腿，仅肉，去皮和面包", "肯德基炸鸡，炸鸡，特脆，鸡腿，仅肉，去皮和面包", "大力水手、炸鸡、淡味、翅、带面包的肉和皮", "肯德基炸鸡，土豆条", "大力水手、炸鸡、淡味、鸡腿、仅肉、去皮和去面包", "肯德基炸鸡，炸鸡，原配方，鸡腿，仅肉，去皮和面包", "酸奶冻糕、低脂、水果和麦片", "肯德基炸鸡爆米花", "肯德基炸鸡脆皮鸡条", "肯德基炸鸡、凉拌卷心菜", "大力水手、炸鸡、淡味、胸脯、仅肉、去皮和去面包", "大力水手、炸鸡、淡味、大腿、仅肉、去皮和面包", "大力水手，炸面糊", "大力水手、炸鸡、淡味、翅、仅肉、去皮和面包", "麦当劳、饼干、大号", "麦当劳，高级烤鸡俱乐部三明治", "快餐、炸鸡、大腿、仅肉、去皮和面包", "轻冰淇淋，软冰淇淋，配牛奶巧克力糖果", "快餐、烤鸡、培根和番茄三明治、奶酪、生菜和蛋黄酱", "快餐、炸鸡、鸡腿、仅肉、去皮和去面包", "快餐、炸鸡、胸脯、仅肉、去皮和面包", "快餐、脆皮鸡肉、培根和番茄三明治、奶酪、生菜和蛋黄酱", "快餐、炸鸡、翅、仅肉、去皮和去面包", "披萨、奶酪配料、奶酪馅饼皮、冷冻、烘焙", "快餐、炸鸡、鸡腿、带面包的肉和皮", "快餐、炸鸡、翅、肉、皮、面包", "迪吉奥诺披萨，意大利香肠面，奶酪馅饼皮，冷冻，烘焙", "快餐、炸鸡、大腿、肉、皮和面包", "迪吉奥诺披萨，意大利香肠面，上等面包皮，冷冻，烘焙", "迪吉奥诺披萨，奶酪面，薄脆的外壳，冷冻，烘焙", "快餐、炸鸡、胸脯、带面包的肉和皮", "迪吉奥诺披萨，意大利香肠面，薄脆的皮，冷冻，烘焙", "DIGIORNO披萨、奶酪面、上等硬皮、冷冻、烘焙", "迪吉奥诺披萨，顶级，薄脆的外皮，冷冻，烘焙", "比萨饼、意大利香肠面、普通皮、冷冻、熟的", "迪吉奥诺披萨，顶级，上等面包皮，冷冻，烘焙", "比萨饼、肉和蔬菜馅料、生面包皮、冷冻、熟的", "比萨饼、奶酪面、上等硬皮、冷冻、熟的", "比萨饼、肉和蔬菜馅料、普通皮、冷冻、熟的", "肯德基炸鸡，炸鸡，原配方，鸡腿，带面包的肉和皮", "温迪的，奶油奶甜点", "比萨饼、奶酪面、普通面包皮、冷冻、熟的", "肯德基炸鸡，炸鸡，特脆，翅，仅肉，去皮和面包", "麦当劳，香草三倍浓奶昔", "麦当劳，巧克力三倍浓奶昔", "肯德基炸鸡，炸鸡，原配方，大腿，带面包的肉和皮", "麦当劳，草莓三倍浓奶昔", "大力水手、炸鸡、淡味、鸡腿、带面包的肉和皮", "肯德基炸鸡，炸鸡，特脆，鸡腿，带面包的肉和皮", "大力水手、炸鸡、淡味、胸脯、带面包的肉和皮", "肯德基炸鸡，炸鸡，原配方，胸脯，带面包的肉和皮", "肯德基炸鸡，炸鸡，特脆，大腿，带面包的肉和皮", "肯德基炸鸡，炸鸡，原配方，翅，肉和带面包的皮", "大力水手、炸鸡、淡味、大腿、带面包的肉和皮", "肯德基炸鸡，炸鸡，特脆，胸脯，带面包的肉和皮", "肯德基炸鸡，炸鸡，特脆，翅，肉和带面包的皮"],
 Fincal:[97, 114, 95, 124, 127, 90, 264, 162, 146, 98, 131, 229, 177, 82, 105, 84, 74, 104, 105, 92, 69, 87, 221, 148, 76, 101, 189, 124, 187, 97, 95, 144, 155, 90, 79, 105, 76, 105, 172, 90, 184, 82, 228, 99, 79, 36, 305, 252, 132, 133, 119, 114, 130, 122, 190, 158, 87, 105, 172, 130, 119, 164, 123, 158, 206, 144, 79, 187, 163, 72, 160, 79, 105, 208, 59, 115, 141, 110, 143, 139, 178, 168],
 Finm:[159, 79, 159, 150, 218, 116, 16, 170, 32, 79, 85, 87, 28.35, 231, 180, 42, 193, 79, 312, 259, 116, 122, 87, 85, 85, 85, 85, 85, 205, 85, 85, 85, 60, 150, 176, 85, 85, 85, 85, 85, 85, 85, 85, 28.35, 85, 58, 136, 144, 154, 186, 124, 37, 85, 159, 62, 50, 85, 85, 154, 127, 159, 85, 119, 85, 178, 143, 85, 146, 25, 85, 159, 85, 143, 198, 85, 85, 79, 85, 163, 178, 143, 71],
Fin2:["Fish, bass, striped, raw", "Fish, bass, fresh water, mixed species, raw", "Fish, catfish, channel, wild, raw", "Fish, bluefish, raw", "Fish, carp, raw", "Fish, burbot, raw", "Fish, caviar, black and red, granular", "Fish, carp, cooked, dry heat", "Fish, butterfish, raw", "Fish, cisco, raw", "Fish, anchovy, european, raw", "Fish, catfish, channel, cooked, breaded and fried", "Fish, cisco, smoked", "Fish, cod, Atlantic, raw", "Fish, cod, Atlantic, cooked, dry heat", "Fish, gefiltefish, commercial, sweet recipe", "Fish, haddock, raw", "Fish, croaker, Atlantic, raw", "Fish, cod, Atlantic, canned, solids and liquid", "Fish, grouper, mixed species, raw", "Fish, cod, Pacific, raw", "Fish, cusk, raw", "Fish, croaker, Atlantic, cooked, breaded and fried", "Fish, milkfish, raw", "Fish, monkfish, raw", "Crustaceans, shrimp, mixed species, imitation, made from surimi", "Mollusks, abalone, mixed species, cooked, fried", "Fish, smelt, rainbow, cooked, dry heat", "Fish, tuna salad", "Fish, smelt, rainbow, raw", "Crustaceans, crab, alaska king, imitation, made from surimi", "Fish, tuna, fresh, bluefin, raw", "Crustaceans, crab, blue, crab cakes", "Fish, haddock, cooked, dry heat", "Fish, pout, ocean, raw", "Mollusks, abalone, mixed species, raw", "Fish, roughy, orange, raw", "Fish, sturgeon, mixed species, raw", "Mollusks, mussel, blue, cooked, moist heat", "Crustaceans, crab, queen, raw", "Fish, tuna, fresh, bluefin, cooked, dry heat", "Crustaceans, crayfish, mixed species, wild, cooked, moist heat", "Fish, shark, mixed species, cooked, batter-dipped and fried", "Fish, surimi", "Mollusks, cuttlefish, mixed species, raw", "Jellyfish, dried, salted", "Fish, mackerel, salted", "Fish, shad, american, cooked, dry heat", "Fish, tuna, skipjack, fresh, cooked, dry heat", "Fish, seatrout, mixed species, cooked, dry heat", "Fish, sucker, white, cooked, dry heat", "Fish, sunfish, pumpkin seed, cooked, dry heat", "Fish, tuna, yellowfin, fresh, cooked, dry heat", "Fish, turbot, european, cooked, dry heat", "Fish, trout, mixed species, cooked, dry heat", "Fish, spot, cooked, dry heat", "Crustaceans, crayfish, mixed species, farmed, cooked, moist heat", "Fish, roughy, orange, cooked, dry heat", "Fish, whitefish, mixed species, cooked, dry heat", "Mollusks, conch, baked or broiled", "Fish, catfish, channel, farmed, raw", "Mollusks, octopus, common, cooked, moist heat", "Fish, wolffish, Atlantic, cooked, dry heat", "Mollusks, cuttlefish, mixed species, cooked, moist heat", "Fish, salmon, Atlantic, farmed, cooked, dry heat", "Fish, catfish, channel, farmed, cooked, dry heat", "Mollusks, oyster, eastern, farmed, cooked, dry heat", "Fish, yellowtail, mixed species, cooked, dry heat", "Mollusks, oyster, Pacific, cooked, moist heat", "Crustaceans, crayfish, mixed species, farmed, raw", "Fish, salmon, coho, farmed, raw", "Mollusks, oyster, eastern, wild, cooked, dry heat", "Fish, catfish, channel, wild, cooked, dry heat", "Fish, salmon, Atlantic, farmed, raw", "Mollusks, oyster, eastern, farmed, raw", "Crustaceans, crab, queen, cooked, moist heat", "Fish, trout, rainbow, farmed, raw", "Crustaceans, crab, dungeness, cooked, moist heat", "Crustaceans, spiny lobster, mixed species, cooked, moist heat", "Fish, salmon, coho, wild, cooked, dry heat", "Fish, salmon, coho, farmed, cooked, dry heat", "Fish, trout, rainbow, farmed, cooked, dry heat"],
Fin:["鱼，鲈鱼，条纹，生", "鱼，鳕鱼，生", "鱼，蓝鱼，生的", "鱼、鲈鱼、淡水、混合鱼种、生的", "鱼，鲶鱼，海峡，野生，生", "鱼、鲤鱼、生的", "鱼，鱼子酱，黑色和红色，颗粒状", "鱼，黄油鱼，生的", "鱼、鲤鱼、熟的、干热", "鱼，思科，生", "鱼，鳕鱼，大西洋产，生", "鱼，熏鱼", "鱼，凤尾鱼，欧洲产，生", "鱼、鲶鱼、海峡鱼、熟的、有面包屑的和油炸的", "鱼，黑线鳕，生", "鱼，黄鱼，大西洋产，生", "鱼，鳕鱼，大西洋产，即食，干热", "鱼，蛤蟆鱼，商业，甜味食谱", "鱼、鳕鱼、大西洋鳕鱼、罐装、固体和液体", "鱼，石斑鱼，混合类，生", "鱼、黄鱼、大西洋鱼、熟的、带面包和油炸", "鱼、菟丝子、生的", "甲壳类，虾，混合类，仿制品，由鱼糜制成", "软体动物，鲍鱼，混合类，即食，油炸", "鱼，乳鱼，生", "鱼，鳕鱼，太平洋产，生", "鱼，金枪鱼", "鱼，蒙克鱼，生", "鱼，彩虹鱼，即食，干热", "鱼，鱼腥味，彩虹，生", "鱼，金枪鱼，新鲜，蓝鳍金枪鱼，生", "鱼，黑线鳕，即食，干热", "甲壳类动物，螃蟹，阿拉斯加国王，仿制品，由鱼糜制成", "软体动物，鲍鱼，混合种，生", "甲壳类动物，螃蟹，蓝色，螃蟹蛋糕", "鱼，撅嘴，海洋，生", "鱼，粗饲料，橙，生", "软体动物、贻贝、蓝色、熟的、湿热", "鱼，鲟鱼，混合类，生", "甲壳类动物、螃蟹、皇后、生的", "甲壳类，小龙虾，混合类，野生，即食，湿热", "鱼、鲨鱼、混合鱼种、熟的、蘸面糊和油炸", "海蜇，干的，咸的", "鱼，鱼糜", "鱼，金枪鱼，新鲜，蓝鳍金枪鱼，即食，干热", "软体动物，乌贼，混合种，生", "鱼，鲱鱼，美式，即食，干热", "鱼，金枪鱼，鲣鱼，新鲜，即食，干热", "鱼，鳟鱼，混合类，即食，干热", "鱼，鲭鱼，咸", "鱼，大菱鲆，欧洲产，即食，干热", "鱼，鳟鱼，混合类，即食，干热", "鱼，吸盘，白色，即食，干热", "鱼，太阳鱼，南瓜籽，即食，干热", "鱼，斑点，即食，干热", "鱼，金枪鱼，黄鳍，新鲜，即食，干热", "鱼，粗粮，桔子，即食，干热", "鱼，白鱼，混合类，即食，干热", "软体动物、海螺、烘焙或烘焙", "甲壳类，小龙虾，混合类，养殖，即食，湿热", "软体动物、章鱼、普通、熟的、湿热", "鱼，狼鱼，大西洋产，即食，干热", "鱼，鲶鱼，海峡，养殖，即食，干热", "鱼，鲑鱼，大西洋，养殖，即食，干热", "软体动物，墨鱼，混合类，即食，湿热", "鱼，鲶鱼，海峡，养殖，生", "鱼，黄尾，混合类，即食，干热", "软体动物，牡蛎，东部，养殖，即食，干热", "甲壳类，小龙虾，混合类，养殖，生", "软体动物，牡蛎，太平洋产，即食，湿热", "鱼，鲶鱼，海峡，野生，即食，干热", "软体动物，牡蛎，东部，养殖，生", "软体动物，牡蛎，野生，即食，干热", "鱼，鲑鱼，鳕鱼，养殖，生", "鱼，鲑鱼，大西洋，养殖，生", "甲壳类动物、螃蟹、熟的、湿热", "鱼，鳟鱼，彩虹鱼，养殖，生", "甲壳类，螃蟹，大号，即食，湿热", "鱼，鲑鱼，鳕鱼，野生，即食，干热", "甲壳类，带刺龙虾，混合类，即食，湿热", "鱼，鲑鱼，鳕鱼，养殖，即食，干热", "鱼，鳟鱼，养殖，即食，干热"],
Frucal:[23
  , 67
  , 67
  , 48
  , 56
  , 53
  , 52
  , 32
  , 74
  , 243
  , 346
  , 57
  , 83
  , 49
  , 48
  , 46
  , 38
  , 85
  , 47
  , 346
  , 120
  , 83
  , 43
  , 56
  , 42
  , 113
  , 22
  , 89
  , 83
  , 27
  , 92
  , 167
  , 166
  , 96
  , 68
  , 47
  , 48
  , 126
  , 50
  , 98
  , 57
  , 88
  , 48
  , 64
  , 241
  , 63
  , 88
  , 320
  , 81
  , 62
  , 51
  , 91
  , 103
  , 51
  , 160
  , 36
  , 31
  , 50
  , 75
  , 114
  , 75
  , 46
  , 308
  , 46
  , 67
  , 89
  , 102
  , 54
  , 46
  , 178
  , 63
  , 56
  , 76
  , 83
  , 63
  , 151
  , 283
  , 282
  , 73
  , 74
  , 53
  , 107
  , 32
  , 249
  , 88
  , 69
  , 107
  , 73
  , 57
  , 46
  , 45
  , 58
  , 30
  , 88
  , 50
  , 88
  , 44
  , 73
  , 73
  , 37

  , 37
  , 42
  , 32
  , 30
  , 32
  , 33
  , 37
  , 60
  , 36
  , 46
  , 146
  , 38
  , 36
  , 40
  , 39
  , 68
  , 69
  , 69
  , 53
  , 60
  , 179
  , 60
  , 67
  , 41
  , 57
  , 51
  , 76
  , 95
  , 34
  , 22
  , 71
  , 60
  , 55
  , 28
  , 72
  , 33
  , 21
  , 47
  , 66
  , 81
  , 22
  , 60
  , 21
  , 25
  , 28
  , 46
  , 277
  , 36
  , 61
  , 98
  , 47
  , 29
  , 43
  , 51
  , 73
  , 63
  , 49
  , 44
  , 49
  , 243
  , 115
  , 145
  , 60
  , 30
  , 49
  , 45
  , 47
  , 159
  , 47
  , 47
  , 47
  , 45
  , 43
  , 50
  , 46
  , 43
  , 51
  , 161
  , 206
  , 97
  , 57
  , 60
  , 39
  , 61
  , 43
  , 97
  , 37
  , 53
  , 103
  , 54
  , 57
  , 42
  , 58
  , 325
  , 75
  , 77
  , 239
  , 50
  , 47
  , 44

  , 94
  , 74
  , 96
  , 24
  , 29
  , 133
  , 54
  , 97
  , 74
  , 127
  , 50
  , 140
  , 70
  , 262
  , 60
  , 21
  , 274
  , 127
  , 71
  , 66
  , 60
  , 179
  , 240
  , 32
  , 58
  , 83
  , 41
  , 105
  , 78
  , 89
  , 35
  , 239
  , 53
  , 52
  , 116
  , 78
  , 32
  , 122
  , 86
  , 91
  , 82
  , 101
  , 96
  , 124
  , 49
  , 299
  , 116
  , 21
  , 92
  , 103
  , 339
  , 46
  , 83
  , 83
  , 113
  , 86
  , 124
  , 88
  , 165
  , 41
  , 38
  , 42
  , 33
  , 57
  , 70
  , 55
  , 52
  , 38
  , 63
  , 51
  , 107
  , 296
  , 94
  , 76
  , 302
  , 30
  , 60
  , 39
  , 42
  , 89
  , 46
  , 56
  , 74
  , 53
  , 107
  , 83
  , 51
  , 257
  , 72
  , 166
  , 83
  , 54
  , 45
  , 57
  , 47
  , 111
  , 60
  , 147
  , 92
  , 69

  , 57
  , 277
  , 59
  , 47
  , 51
  , 60
  , 54
  , 50
  , 52
  , 309
  , 44
  , 95
  , 25
  , 236
  , 73
  , 50
  , 46],
Frum:[242
  , 204
  , 204
  , 110
  , 170
  , 171
  , 125
  , 98
  , 193
  , 86
  , 60
  , 255
  , 280
  , 247
  , 244
  , 248
  , 250
  , 250
  , 206
  , 100
  , 230
  , 258
  , 144
  , 251
  , 244
  , 270
  , 227
  , 225
  , 258
  , 243
  , 256
  , 230
  , 211
  , 246
  , 246
  , 239
  , 155
  , 249
  , 132
  , 242
  , 148
  , 256
  , 173
  , 151
  , 130
  , 253
  , 256
  , 119
  , 230
  , 150
  , 155
  , 256
  , 220
  , 140
  , 150
  , 244
  , 132
  , 155
  , 252
  , 261
  , 235
  , 155
  , 40
  , 248
  , 252
  , 259
  , 261
  , 250
  , 110
  , 275
  , 138
  , 112
  , 110
  , 253
  , 112
  , 277
  , 144
  , 147
  , 145
  , 64
  , 248
  , 259
  , 237
  , 149
  , 259
  , 252
  , 261
  , 248
  , 242
  , 237
  , 123
  , 252
  , 245
  , 260
  , 249
  , 259
  , 150
  , 252
  , 255
  , 230

  , 230
  , 230
  , 230
  , 230
  , 230
  , 230
  , 249
  , 254
  , 244
  , 250
  , 207
  , 247
  , 238
  , 245
  , 247
  , 165
  , 244
  , 151
  , 140
  , 253
  , 216
  , 253
  , 92
  , 247
  , 6
  , 250
  , 256
  , 165
  , 177
  , 244
  , 19
  , 3.2
  , 147
  , 170
  , 255
  , 173
  , 244
  , 149
  , 190
  , 8.3
  , 244
  , 135
  , 246
  , 242
  , 140
  , 185
  , 2.5
  , 177
  , 180
  , 250
  , 6
  , 212
  , 140
  , 846
  , 196
  , 170
  , 165
  , 143
  , 180
  , 293
  , 8.4
  , 2.7
  , 165
  , 67
  , 249
  , 248
  , 249
  , 284
  , 180
  , 249
  , 249
  , 249
  , 247
  , 249
  , 241
  , 145
  , 247
  , 214
  , 39
  , 236
  , 250
  , 247
  , 154
  , 252
  , 247
  , 6
  , 249
  , 195
  , 270
  , 251
  , 251
  , 247
  , 148
  , 116
  , 242
  , 258
  , 160
  , 248
  , 247
  , 250

  , 250
  , 262
  , 262
  , 244
  , 244
  , 242
  , 249
  , 266
  , 266
  , 255
  , 165
  , 280
  , 168
  , 180
  , 250
  , 122
  , 34
  , 25
  , 256
  , 225
  , 249
  , 216
  , 174
  , 246
  , 252
  , 260
  , 149
  , 234
  , 255
  , 258
  , 221
  , 120
  , 250
  , 252
  , 240
  , 254
  , 152
  , 148
  , 245
  , 256
  , 150
  , 261
  , 255
  , 248
  , 57
  , 165
  , 200
  , 137
  , 254
  , 250
  , 132
  , 165
  , 241
  , 282
  , 280
  , 257
  , 175
  , 244
  , 5
  , 249
  , 190
  , 122
  , 173
  , 92
  , 214
  , 243
  , 123
  , 189
  , 252
  , 250
  , 248
  , 165
  , 250
  , 255
  , 165
  , 154
  , 181
  , 247
  , 244
  , 183
  , 248
  , 251
  , 201
  , 250
  , 319
  , 179
  , 165
  , 36
  , 222
  , 211
  , 219
  , 249
  , 165
  , 251
  , 74
  , 114
  , 250
  , 243
  , 178
  , 114

  , 251
  , 24
  , 251
  , 239
  , 251
  , 186
  , 249
  , 250
  , 250
  , 118
  , 233
  , 11.1
  , 120
  , 169
  , 112
  , 234
  , 253],
Fru2:["Acerola juice, raw"
, "Apples, canned, sweetened, sliced, drained, heated"
, "Apples, canned, sweetened, sliced, drained, unheated"
, "Apples, raw, without skin"
, "Apples, raw, without skin, cooked, microwave"
, "Apples, raw, without skin, cooked, boiled"
, "Apples, raw, with skin"
, "Acerola, (west indian cherry), raw"
, "Apples, dehydrated (low moisture), sulfured, stewed"
, "Apples, dried, sulfured, uncooked"
, "Apples, dehydrated (low moisture), sulfured, uncooked"
, "Apples, dried, sulfured, stewed, without added sugar"
, "Apples, dried, sulfured, stewed, with added sugar"
, "Apricots, canned, extra light syrup pack, with skin, solids and liquids"
, "Apricots, canned, juice pack, with skin, solids and liquids"
, "Apple juice, canned or bottled, unsweetened, without added ascorbic acid"
, "Blackberry juice, canned"
, "Apricots, dried, sulfured, stewed, without added sugar"
, "Apples, frozen, unsweetened, heated"
, "Bananas, dehydrated, or banana powder"
, "Avocados, raw, Florida"
, "Apricots, canned, heavy syrup pack, without skin, solids and liquids"
, "Blackberries, raw"
, "Apricot nectar, canned, without added ascorbic acid"
, "Applesauce, canned, unsweetened, without added ascorbic acid (includes USDA commodity)"
, "Apricots, dried, sulfured, stewed, with added sugar"
, "Apricots, canned, water pack, without skin, solids and liquids"
, "Bananas, raw"
, "Apricots, canned, heavy syrup pack, with skin, solids and liquids"
, "Apricots, canned, water pack, with skin, solids and liquids"
, "Blackberries, canned, heavy syrup, solids and liquids"
, "Avocados, raw, California"
, "Apple juice, frozen concentrate, unsweetened, undiluted, without added ascorbic acid"
, "Apricots, canned, extra heavy syrup pack, without skin, solids and liquids"
, "Applesauce, canned, sweetened, without salt (includes USDA commodity)"
, "Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water without added ascorbic acid"
, "Apricots, raw"
, "Apricots, dehydrated (low-moisture), sulfured, stewed"
, "Boysenberries, frozen, unsweetened"
, "Apricots, frozen, sweetened"
, "Blueberries, raw"
, "Boysenberries, canned, heavy syrup"
, "Apples, frozen, unsweetened, unheated"
, "Blackberries, frozen, unsweetened"
, "Apricots, dried, sulfured, uncooked"
, "Apricots, canned, light syrup pack, with skin, solids and liquids"
, "Blueberries, canned, heavy syrup, solids and liquids"
, "Apricots, dehydrated (low-moisture), sulfured, uncooked"
, "Blueberries, frozen, sweetened"
, "Carissa, (natal-plum), raw"
, "Blueberries, frozen, unsweetened"
, "Cherries, sour, red, canned, heavy syrup pack, solids and liquids"
, "Breadfruit, raw"
, "Blueberries, wild, frozen"
, "Avocados, raw, all commercial varieties"
, "Cherries, sour, red, canned, water pack, solids and liquids (includes USDA commodity red tart cherries, canned)"
, "Carambola, (starfruit), raw"
, "Cherries, sour, red, raw"
, "Cherries, sour, red, canned, light syrup pack, solids and liquids"
, "Cherries, sour, red, canned, extra heavy syrup pack, solids and liquids"
, "Cherimoya, raw"
, "Cherries, sour, red, frozen, unsweetened"
, "Cranberries, dried, sweetened"
, "Cherries, sweet, canned, water pack, solids and liquids"
, "Cherries, sweet, canned, light syrup pack, solids and liquids"
, "Cherries, sweet, frozen, sweetened"
, "Cherries, sweet, canned, extra heavy syrup pack, solids and liquids"
, "Cherries, sweet, canned, juice pack, solids and liquids"
, "Cranberries, raw"
, "Cranberry-orange relish, canned"
, "Cherries, sweet, raw"
, "Currants, red and white, raw"
, "Crabapples, raw"
, "Cherries, sweet, canned, pitted, heavy syrup pack, solids and liquids"
, "Currants, european black, raw"
, "Cranberry sauce, canned, sweetened"
, "Currants, zante, dried"
, "Dates, deglet noor"
, "Elderberries, raw"
, "Figs, raw"
, "Figs, canned, water pack, solids and liquids"
, "Figs, dried, stewed"
, "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, water pack, solids and liquids"
, "Figs, dried, uncooked"
, "Figs, canned, heavy syrup pack, solids and liquids"
, "Figs, canned, light syrup pack, solids and liquids"
, "Figs, canned, extra heavy syrup pack, solids and liquids"
, "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, heavy syrup, solids and liquids"
, "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, light syrup, solids and liquids"
, "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, juice pack, solids and liquids"
, "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, extra light syrup, solids and liquids"
, "Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, light syrup, solids and liquids"
, "Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, water pack, solids and liquids"
, "Fruit cocktail, (peach and pineapple and pear and grape and cherry), canned, extra heavy syrup, solids and liquids"
, "Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, juice pack, solids and liquids"
, "Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, extra heavy syrup, solids and liquids"
, "Gooseberries, raw"
, "Gooseberries, canned, light syrup pack, solids and liquids"
, "Fruit salad, (peach and pear and apricot and pineapple and cherry), canned, heavy syrup, solids and liquids"
, "Grapefruit, raw, pink and red, California and Arizona"

, "Grapefruit, raw, white, California"
, "Grapefruit, raw, pink and red, all areas"
, "Grapefruit, raw, pink and red and white, all areas"
, "Grapefruit, raw, pink and red, Florida"
, "Grapefruit, raw, white, Florida"
, "Grapefruit, raw, white, all areas"
, "Grapefruit, sections, canned, juice pack, solids and liquids"
, "Grapefruit, sections, canned, light syrup pack, solids and liquids"
, "Grapefruit, sections, canned, water pack, solids and liquids"
, "Grapefruit juice, white, canned, sweetened"
, "Grapefruit juice, white, frozen concentrate, unsweetened, undiluted"
, "Grapefruit juice, white, canned, unsweetened"
, "Guava sauce, cooked"
, "Grapes, canned, thompson seedless, water pack, solids and liquids"
, "Grapefruit juice, white, raw"
, "Guavas, common, raw"
, "Guavas, strawberry, raw"
, "Grapes, red or green (European type, such as Thompson seedless), raw"
, "Groundcherries, (cape-gooseberries or poha), raw"
, "Grape juice, canned or bottled, unsweetened, without added ascorbic acid"
, "Grape juice cocktail, frozen concentrate, undiluted, with added ascorbic acid"
, "Grape juice, canned or bottled, unsweetened, with added ascorbic acid"
, "Grapes, american type (slip skin), raw"
, "Grapefruit juice, white, frozen concentrate, unsweetened, diluted with 3 volume water"
, "Grapes, muscadine, raw"
, "Grape juice cocktail, frozen concentrate, diluted with 3 volume water, with added ascorbic acid"
, "Grapes, canned, thompson seedless, heavy syrup pack, solids and liquids"
, "Jackfruit, raw"
, "Melons, cantaloupe, raw"
, "Lemon juice, frozen, unsweetened, single strength"
, "Kumquats, raw"
, "Longans, raw"
, "Loganberries, frozen"
, "Melons, casaba, raw"
, "Fruit, mixed, (peach and pear and pineapple), canned, heavy syrup, solids and liquids"
, "Melon balls, frozen"
, "Lemon juice, canned or bottled"
, "Loquats, raw"
, "Litchis, raw"
, "Olives, ripe, canned (jumbo-super colossal)"
, "Lemon juice, raw"
, "Java-plum, (jambolan), raw"
, "Lime juice, canned or bottled, unsweetened"
, "Lime juice, raw"
, "Oheloberries, raw"
, "Oranges, raw, Florida"
, "Litchis, dried"
, "Melons, honeydew, raw"
, "Kiwifruit, green, raw"
, "Fruit, mixed, (peach and cherry-sweet and -sour and raspberry and grape and boysenberry), frozen, sweetened"
, "Lemon peel, raw"
, "Lemons, raw, without peel"
, "Mulberries, raw"
, "Mammy-apple, (mamey), raw"
, "Mangosteen, canned, syrup pack"
, "Oranges, raw, with peel"
, "Oranges, raw, navels"
, "Nectarines, raw"
, "Oranges, raw, California, valencias"
, "Fruit, mixed, (prune and apricot and pear), dried"
, "Olives, ripe, canned (small-extra large)"
, "Olives, pickled, canned or bottled, green"
, "Mangos, raw"
, "Limes, raw"
, "Orange juice, chilled, includes from concentrate"
, "Orange juice, raw"
, "Orange juice, chilled, includes from concentrate, fortified with calcium"
, "Orange juice, frozen concentrate, unsweetened, undiluted"
, "Oranges, raw, all commercial varieties"
, "Orange juice, chilled, includes from concentrate, fortified with calcium and vitamin D"
, "Orange juice, canned, unsweetened"
, "Orange juice, frozen concentrate, unsweetened, diluted with 3 volume water"
, "Tangerine juice, raw"
, "Tangerine juice, canned, sweetened"
, "Tangerine juice, frozen concentrate, sweetened, diluted with 3 volume water"
, "Papayas, raw"
, "Passion-fruit juice, purple, raw"
, "Tangerine juice, frozen concentrate, sweetened, undiluted"
, "Papaya, canned, heavy syrup, drained"
, "Passion-fruit, (granadilla), purple, raw"
, "Papaya nectar, canned"
, "Passion-fruit juice, yellow, raw"
, "Peaches, raw"
, "Tangerines, (mandarin oranges), canned, light syrup pack"
, "Orange-grapefruit juice, canned, unsweetened"
, "Orange peel, raw"
, "Tangerines, (mandarin oranges), canned, juice pack"
, "Tangerines, (mandarin oranges), raw"
, "Peaches, dried, sulfured, stewed, with added sugar"
, "Peaches, canned, light syrup pack, solids and liquids"
, "Pears, canned, light syrup pack, solids and liquids"
, "Peaches, canned, extra light syrup, solids and liquids"
, "Pears, raw"
, "Peaches, dehydrated (low-moisture), sulfured, uncooked"
, "Peaches, spiced, canned, heavy syrup pack, solids and liquids"
, "Peaches, dried, sulfured, stewed, without added sugar"
, "Peaches, dried, sulfured, uncooked"
, "Pears, canned, juice pack, solids and liquids"
, "Pears, canned, extra light syrup pack, solids and liquids"
, "Peaches, canned, juice pack, solids and liquids"

, "Peaches, frozen, sliced, sweetened"
, "Peaches, canned, heavy syrup pack, solids and liquids"
, "Peaches, canned, extra heavy syrup pack, solids and liquids"
, "Peaches, canned, water pack, solids and liquids"
, "Pears, canned, water pack, solids and liquids"
, "Peaches, dehydrated (low-moisture), sulfured, stewed"
, "Peach nectar, canned, without added ascorbic acid"
, "Pears, canned, extra heavy syrup pack, solids and liquids"
, "Pears, canned, heavy syrup pack, solids and liquids"
, "Pears, dried, sulfured, stewed, without added sugar"
, "Pineapple, raw, all varieties"
, "Pears, dried, sulfured, stewed, with added sugar"
, "Persimmons, japanese, raw"
, "Pears, dried, sulfured, uncooked"
, "Pear nectar, canned, without added ascorbic acid"
, "Rhubarb, raw"
, "Persimmons, japanese, dried"
, "Persimmons, native, raw"
, "Prune juice, canned"
, "Soursop, raw"
, "Pineapple, canned, juice pack, solids and liquids"
, "Pineapple juice, frozen concentrate, unsweetened, undiluted"
, "Plums, dried (prunes), uncooked"
, "Pineapple, canned, water pack, solids and liquids"
, "Plums, canned, purple, juice pack, solids and liquids"
, "Pineapple, canned, extra heavy syrup pack, solids and liquids"
, "Prickly pears, raw"
, "Prunes, canned, heavy syrup pack, solids and liquids"
, "Strawberries, frozen, sweetened, whole"
, "Plums, canned, purple, heavy syrup pack, solids and liquids"
, "Strawberries, frozen, unsweetened"
, "Tamarinds, raw"
, "Pineapple juice, canned, unsweetened, without added ascorbic acid"
, "Pineapple, canned, light syrup pack, solids and liquids"
, "Rhubarb, frozen, cooked, with sugar"
, "Pineapple, canned, heavy syrup pack, solids and liquids"
, "Strawberries, raw"
, "Plantains, raw"
, "Pineapple, frozen, chunks, sweetened"
, "Raspberries, canned, red, heavy syrup pack, solids and liquids"
, "Rambutan, canned, syrup pack"
, "Plums, canned, purple, extra heavy syrup pack, solids and liquids"
, "Strawberries, frozen, sweetened, sliced"
, "Plums, dried (prunes), stewed, with added sugar"
, "Roselle, raw"
, "Raisins, seedless"
, "Plantains, cooked"
, "Rhubarb, frozen, uncooked"
, "Strawberries, canned, heavy syrup pack, solids and liquids"
, "Raspberries, frozen, red, sweetened"
, "Prunes, dehydrated (low-moisture), uncooked"
, "Plums, raw"
, "Sapodilla, raw"
, "Pomegranates, raw"
, "Prunes, dehydrated (low-moisture), stewed"
, "Fruit salad, (pineapple and papaya and banana and guava), tropical, canned, heavy syrup, solids and liquids"
, "Sapote, mamey, raw"
, "Blueberries, canned, light syrup, drained"
, "Maraschino cherries, canned, drained"
, "Plums, canned, purple, water pack, solids and liquids"
, "Pummelo, raw"
, "Pears, asian, raw"
, "Pitanga, (surinam-cherry), raw"
, "Quinces, raw"
, "Fruit cocktail, canned, heavy syrup, drained"
, "Feijoa, raw"
, "Raspberries, raw"
, "Tangerines, (mandarin oranges), canned, juice pack, drained"
, "Plums, canned, purple, light syrup pack, solids and liquids"
, "Pineapple juice, frozen concentrate, unsweetened, diluted with 3 volume water"
, "Plums, dried (prunes), stewed, without added sugar"
, "Raisins, seeded"
, "Sugar-apples, (sweetsop), raw"
, "Applesauce, canned, sweetened, with salt"
, "Raisins, golden seedless"
, "Watermelon, raw"
, "Pineapple, canned, juice pack, drained"
, "Grapefruit juice, pink, raw"
, "Applesauce, canned, unsweetened, with added ascorbic acid"
, "Plums, canned, heavy syrup, drained"
, "Apple juice, canned or bottled, unsweetened, with added ascorbic acid"
, "Apricot nectar, canned, with added ascorbic acid"
, "Pears, canned, heavy syrup, drained"
, "Pineapple juice, canned, unsweetened, with added ascorbic acid"
, "Blueberries, wild, canned, heavy syrup, drained"
, "Cherries, sweet, canned, pitted, heavy syrup, drained"
, "Pineapple, raw, extra sweet variety"
, "Prune puree"
, "Peaches, canned, heavy syrup, drained"
, "Apple juice, frozen concentrate, unsweetened, undiluted, with added ascorbic acid"
, "Apricots, canned, heavy syrup, drained"
, "Peach nectar, canned, with added ascorbic acid"
, "Pineapple, raw, traditional varieties"
, "Guava nectar, canned"
, "Clementines, raw"
, "Rowal, raw"
, "Pear nectar, canned, with added ascorbic acid"
, "Durian, raw or frozen"
, "Jackfruit, canned, syrup pack"
, "Abiyuch, raw"

, "Tamarind nectar, canned"
, "Dates, medjool"
, "Guanabana nectar, canned"
, "Apple juice, frozen concentrate, unsweetened, diluted with 3 volume water, with added ascorbic acid"
, "Mango nectar, canned"
, "Kiwifruit, gold, raw"
, "Pomegranate juice, bottled"
, "Juice, apple and grape blend, with added ascorbic acid"
, "Juice, apple, grape and pear blend, with added ascorbic acid and calcium"
, "Plantains, green, fried"
, "Horned melon (Kiwano)"
, "Nance, canned, syrup, drained"
, "Naranjilla (lulo) pulp, frozen, unsweetened"
, "Plantains, yellow, fried, Latino restaurant"
, "Nance, frozen, unsweetened"
, "Orange-strawberry-banana juice"
, "Cranberry juice, unsweetened"],
Fru:["苹果、罐装、加糖、切片、去水、未加热", "苹果、生的、无皮、熟的", "酸橙汁、生的", "苹果、生的、带皮的", "苹果、生的、无皮的", "苹果、生的、无皮、熟的、煮熟", "苹果、罐装、加糖、切片、去水、加热", "苹果、干燥、生的", "苹果、脱水（低水分）、炖煮", "西印度樱桃，生", "杏子、罐装、超轻糖浆包、带皮、固体和液体", "苹果、苹果干、炖熟、添加糖", "苹果、脱水（低水分）、生的", "苹果、干燥、炖熟、不加糖", "杏子、罐装、果汁包、带皮、固体和液体", "黑莓汁，罐装", "苹果汁，罐装或瓶装，未加糖，不添加抗坏血酸", "杏子、干的、炖熟、不加血糖", "苹果、冷冻、未加糖、加热", "香蕉、脱水或香蕉粉", "鳄梨、生的、佛罗里达", "黑莓，生的", "杏子、干的、炖熟、添加糖", "苹果酱，罐装，未加糖，不添加抗坏酸（包括美国农业部商品）", "杏子、罐装、浓缩糖浆包、带皮、固体和液体", "杏蜜，罐装，不添加抗坏血酸", "杏子、罐装、水包、无皮、固体和液体", "杏子、罐装、浓缩糖浆包、无皮、固体和液体", "香蕉，生的", "杏子、罐装、水包、带皮、固体和液体", "黑莓、罐装、重糖浆、固体和液体", "苹果酱、罐装、加糖、无盐（包括美国农业部商品）", "苹果汁，冷冻浓缩汁，未加糖，用3体积水稀释，不添加抗坏血酸", "鳄梨、生的、加利福尼亚", "苹果汁，冷冻浓缩汁，未加糖，未稀释，不添加抗坏血酸", "杏子、罐装、超浓糖浆包、无皮、固体和液体", "杏子、冷冻、加糖", "波森莓，冷冻，未加糖", "杏子、脱水（低水分）、炖煮", "杏子、生的", "苹果、冷冻、未加糖、未加热", "黑莓、冷冻、未加糖", "波森莓、罐装、浓糖浆", "蓝莓、生的", "杏子、干的、生的", "杏子、罐装、淡糖浆包、带皮、固体和液体", "蓝莓、罐装、重糖浆、固体和液体", "蓝莓、冷冻、加糖", "纳塔尔李子，生的", "杏子、脱水（低水分）、生的", "蓝莓、野生、冷冻", "蓝莓、冷冻、未加糖", "樱桃、酸樱桃、红樱桃、罐装、水包装、固体和液体（包括美国农业部商品红酸樱桃、罐装）", "樱桃、酸的、红色、罐装、重糖浆包、固体和液体", "生面包果", "鳄梨、生的、所有商业品种", "樱桃、酸樱桃、红樱桃、罐装、淡糖浆包、固体和液体", "樱桃、酸的、红色、罐装、超浓糖浆包、固体和液体", "杨桃、（星果）、生的", "樱桃、酸樱桃、红樱桃、生樱桃", "樱桃、生的", "樱桃、酸的、红色、冷冻、未加糖", "樱桃、甜樱桃、罐装、水包、固体和液体", "樱桃，甜的，冷冻的，甜的", "小红莓、干的、甜的", "樱桃、甜樱桃、罐装、淡糖浆包、固体和液体", "樱桃、甜樱桃、罐装、超浓糖浆包、固体和液体", "蔓越莓、生的", "樱桃、甜樱桃、罐装、果汁包、固体和液体", "红莓橙调味汁，罐装", "樱桃、甜的、生的", "樱桃、甜樱桃、罐装、去核、浓缩糖浆包、固体和液体", "葡萄干、欧洲黑、生的", "红醋栗、红白、生的", "生海棠", "黑醋栗、桑特、干的", "蔓越莓酱、罐装、加糖", "日期，德格·诺尔", "无花果、生的", "接骨木、生的", "无花果、罐装、淡糖浆包、固体和液体", "无花果、罐装、水包、固体和液体", "无花果、罐装、浓缩糖浆包、固体和液体", "水果鸡尾酒（桃子、菠萝、梨、葡萄和樱桃）、罐装、水包、固体和液体", "无花果、干的、生的", "无花果、干的、炖的", "水果鸡尾酒（桃子、菠萝、梨、葡萄和樱桃）、罐装、淡糖浆、固体和液体", "水果鸡尾酒（桃子、菠萝、梨、葡萄和樱桃）、罐装、浓糖浆、固体和液体", "无花果、罐装、超浓糖浆包、固体和液体", "水果鸡尾酒（桃、菠萝、梨、葡萄和樱桃）、罐装、果汁包、固体和液体", "水果沙拉（桃、梨、杏、菠萝和樱桃）、罐装、果汁包、固体和液体", "水果沙拉（桃、梨、杏、菠萝和樱桃）、罐装、水包、固体和液体", "水果鸡尾酒（桃子、菠萝、梨、葡萄和樱桃）、罐装、超轻糖浆、固体和液体", "水果鸡尾酒（桃子、菠萝、梨、葡萄和樱桃）、罐装、超浓糖浆、固体和液体", "猕猴桃、生的", "水果沙拉（桃、梨、杏、菠萝和樱桃）、罐装、淡糖浆、固体和液体", "水果沙拉（桃、梨、杏、菠萝和樱桃）、罐装、超浓糖浆、固体和液体", "醋栗、罐装、淡糖浆包、固体和液体", "水果沙拉（桃、梨、杏、菠萝和樱桃）、罐装、浓糖浆、固体和液体", "葡萄柚、生的、粉色和红色、加利福尼亚和亚利桑那", "柚子、生的、白的、佛罗里达", "葡萄柚、生的、白的、加利福尼亚", "葡萄柚、生的、粉色和红色、所有区域", "葡萄柚、生的、白色、所有区域", "葡萄柚、生的、粉色和红色和白色，所有区域", "柚子、生的、粉色和红色、佛罗里达", "葡萄柚、切片、罐装、果汁包、固体和液体", "葡萄柚、切片、罐装、水包、固体和液体", "葡萄柚、切片、罐装、淡糖浆包、固体和液体", "葡萄柚汁、白葡萄柚汁、罐装、加糖", "葡萄柚汁、白汁、生的", "葡萄柚汁，白色，冷冻浓缩汁，未加糖，未稀释", "葡萄、罐装", "葡萄柚汁、白汁、罐装、未加糖", "番石榴酱、熟的", "番石榴、普通、生的", "番石榴、草莓、生的", "葡萄，红色或绿色，生的", "毛樱桃，生的", "葡萄汁，罐装或瓶装，未加糖，不添加抗坏血酸", "葡萄，美式（滑皮），生", "葡萄、麝香碱、生的", "葡萄汁鸡尾酒，冷冻浓缩液，用3体积水稀释，添加抗坏血酸", "葡萄柚汁，白色，冷冻浓缩汁，未加糖，用3体积水稀释", "葡萄汁鸡尾酒，冷冻浓缩，未稀释，添加抗坏血酸", "葡萄汁，罐装或瓶装，未加糖，添加抗坏血酸", "菠萝蜜、生的", "葡萄、罐装、浓缩糖浆包、固体和液体", "柠檬汁，冷冻，未加糖，单味", "甜瓜、哈密瓜、生的", "金橘、生的", "洛根莓，冷冻", "水果、混合、（桃、梨和菠萝）、罐装、浓糖浆、固体和液体", "瓜球，冷冻", "龙眼、生的", "柠檬汁、罐装或瓶装", "甜瓜、卡萨巴、生的", "荔枝、生的", "枇杷、生的", "橄榄、熟橄榄、罐装（特大号）", "柠檬汁、生的", "欧海洛莓、生的", "酸橙汁、罐装或瓶装、未加糖", "生酸橙汁", "橙子、生的、佛罗里达", "李子，生", "甜瓜、蜜露、生的", "猕猴桃、绿色、生的", "荔枝干", "水果，混合，（桃子、樱桃、糖醋栗、覆盆子、葡萄和博森莓），冷冻，加糖", "柠檬、生的、无皮的", "橙子、生的、带皮的", "芒果、罐装、糖浆包", "桑椹、生的", "柠檬皮，生的", "苹果奶妈，（奶妈），生的", "橙子、生的、脐橙", "橙子、生的、加利福尼亚、巴伦西亚", "油桃、生的", "水果、混合、（李子、杏子和梨）、干的", "酸橙、生的", "橙汁，冷冻，包括浓缩汁", "橄榄、腌制、罐装或瓶装、绿色", "橙汁、生的", "芒果、生的", "橄榄、熟橄榄、罐装（小而特大）", "橙汁，冷冻，包括浓缩汁，添加钙和维生素D", "橙子、生的、所有商业品种", "橙汁、冷冻浓缩汁、未加糖、未稀释", "橙汁，冷冻，含浓缩汁，钙强化", "橘子汁、罐装、加糖", "橘子汁、冷冻浓缩汁、加糖、用3体积水稀释", "木瓜、生的", "橙汁、冷冻浓缩汁、未加糖、用3体积水稀释", "橙汁、罐装、未加糖", "生橘子汁", "橘子汁、冷冻浓缩汁、加糖、未稀释", "百香果汁、紫色、生的", "木瓜、罐装、浓糖浆、去水", "西番莲（石榴），紫色，生", "橘子、（柑桔）、罐装、淡糖浆包", "百香果汁、黄色、生的", "橙皮，生的", "木瓜花蜜，罐装", "橙子柚子汁、罐装、未加糖", "桃子、生的", "橘子、（柑桔）、生的", "桃子、罐装、淡糖浆包、固体和液体", "橘子（柑桔）、罐装、果汁包", "桃子、干的、硫化、炖熟、添加糖", "生梨", "桃子、干的、硫化、炖熟、不加糖", "梨、罐装、淡糖浆包、固体和液体", "桃子、香料、罐装、浓缩糖浆包、固体和液体", "桃子、罐装、超轻糖浆、固体和液体", "梨、罐装、果汁包、固体和液体", "桃子、脱水（低水分）、硫化、生的", "梨、罐装、超轻糖浆包、固体和液体", "桃子、干的、生的", "桃子、罐装、果汁包、固体和液体", "桃子、脱水（低水分）、硫化、炖煮", "桃子、罐装、水包、固体和液体", "桃子、冷冻、切片、加糖", "梨、罐装、水包、固体和液体", "桃子、罐装、浓缩糖浆包、固体和液体", "桃子、罐装、超浓糖浆包、固体和液体", "梨、干的、硫化、炖熟、不加糖", "梨、罐装、超浓糖浆包、固体和液体", "桃蜜，罐装，不添加抗坏血酸", "梨、罐装、浓缩糖浆包、固体和液体", "柿子、日式、生的", "梨、干的、硫化的、炖熟、添加糖", "梨蜜，罐装，不添加抗坏血酸", "生大黄", "菠萝、生的、所有品种", "梨、干的、生的", "柿子、日本柿子、干柿子", "柿子、本地的、生的", "梅子汁，罐装", "汤，生的", "李子、罐装、紫色、果汁包、固体和液体", "菠萝汁、冷冻浓缩汁、未加糖、未稀释", "菠萝、罐装、果汁包、固体和液体", "菠萝、罐装、超浓糖浆包、固体和液体", "李子、干（李子）、生的", "生刺梨", "菠萝、罐装、水包、固体和液体", "李子、罐装、浓缩糖浆包、固体和液体", "草莓、冷冻、加糖、全草莓", "罗望子、生的", "大黄、冷冻、熟的、含糖", "李子、罐装、紫色、浓缩糖浆包、固体和液体", "草莓、冷冻、未加糖", "菠萝汁，罐装，未加糖，不添加抗坏血酸", "菠萝、罐装、淡糖浆包、固体和液体", "菠萝、罐装、浓缩糖浆包、固体和液体", "芭蕉，生的", "菠萝、冷冻、大块、加糖", "草莓、生的", "覆盆子、罐装、红色、浓糖浆包、固体和液体", "草莓、冷冻、加糖、切片", "葡萄干，无籽", "李子、干李子、炖熟、添加糖", "李子、罐装、紫色、超浓糖浆包、固体和液体", "车前子，熟的", "玫瑰茄，生的", "覆盆子、冷冻、红色、加糖", "草莓、罐装、浓缩糖浆包、固体和液体", "红毛丹、罐装、糖浆包", "大黄、冷冻、生的", "李子、脱水（低水分）、生的", "水果沙拉（菠萝、木瓜、香蕉和番石榴）、热带、罐装、浓糖浆、固体和液体", "石榴、生的", "梅子、脱水（低水分）、炖熟", "无患子，生的", "李子、生的", "蓝莓、罐装、淡糖浆、去水", "萨波特，玛米，生的", "李子、罐装、紫色、水包、固体和液体", "马拉希诺樱桃、罐装、去水", "菲约，生的", "柚子、生的", "水果鸡尾酒、罐装、浓糖浆、去水", "梨、亚洲梨、生的", "皮坦加（苏里南樱桃）、生的", "木瓜、生的", "覆盆子、生的", "菠萝汁、冷冻浓缩汁、未加糖、用3体积水稀释", "李子、罐装、紫色、淡糖浆包、固体和液体", "橘子（柑桔）、罐装、果汁包、去水", "葡萄干，金色无籽", "西瓜、生的", "糖苹果、（甜苹果）、生的", "葡萄干，种子", "李子、干（李子）、炖熟、不加糖", "葡萄柚汁、粉色、生的", "苹果酱、罐装、加糖、含盐", "李子、罐装、浓糖浆、去水", "苹果酱，罐装，未加糖，添加抗坏血酸", "菠萝、罐装、果汁包、去水", "樱桃、甜樱桃、罐装、去核、浓糖浆、去水", "苹果汁，罐装或瓶装，未加糖，添加抗坏血酸", "杏蜜，罐装，添加抗坏血酸", "蓝莓、野生、罐装、重糖浆、去水", "菠萝汁，罐装，未加糖，添加抗坏血酸", "梨、罐装、浓糖浆、去水", "菠萝、生的、特甜的", "苹果汁，冷冻浓缩汁，未加糖，未稀释，添加抗坏血酸", "梅子泥", "桃子、罐装、浓糖浆、去水", "番石榴花蜜，罐装", "菠萝、生的、传统品种", "罗瓦尔，生的", "桃蜜，罐装，添加抗坏血酸", "杏子、罐装、浓糖浆、去水", "榴莲，生的或冻的", "菠萝蜜、罐装、糖浆包", "冷杉，生的", "无花果，生的", "梨蜜，罐装，添加抗坏血酸",
"百香果汁", "罗望子花蜜，罐装", "苹果汁，冷冻浓缩汁，未加糖，用3体积水稀释，添加抗坏血酸", "瓜纳巴纳花蜜，罐装", "芒果花蜜，罐装", "果汁、苹果和葡萄混合汁，添加抗坏血酸", "果汁、苹果、葡萄和梨的混合物，添加抗坏血酸和钙", "芭蕉、绿色、油炸", "猕猴桃、黄金、生的", "石榴汁，瓶装", "Nance、罐装、糖浆、去水", "橙汁草莓香蕉汁", "角瓜（基瓦诺）", "奎东茄果肉，冷冻，未加糖", "人参果，冷冻，未加糖", "芭蕉、黄色、油炸、", "蔓越莓汁，不加糖"

],
Lamcal:[134
  , 201
  , 586
  , 206
  , 243
  , 187
  , 128
  , 204
  , 216
  , 294
  , 258
  , 361
  , 230
  , 359
  , 292
  , 143
  , 309
  , 225
  , 191
  , 260
  , 345
  , 316
  , 264
  , 235
  , 281
  , 283
  , 279
  , 276
  , 210
  , 344
  , 278
  , 310
  , 278
  , 346
  , 144
  , 132
  , 279
  , 204
  , 202
  , 232
  , 180
  , 267
  , 192
  , 200
  , 277
  , 211
  , 586
  , 209
  , 128
  , 340
  , 151
  , 134
  , 315
  , 196
  , 640
  , 130
  , 281
  , 196
  , 206
  , 246
  , 223
  , 258
  , 305
  , 186
  , 288
  , 216
  , 238
  , 272
  , 285
  , 186
  , 199
  , 216
  , 303
  , 203
  , 123
  , 184
  , 183
  , 211
  , 135
  , 357
  , 231
  , 163
  , 218
  , 175
  , 181
  , 177
  , 116
  , 251
  , 183
  , 160
  , 217
  , 170
  , 199
  , 198
  , 236
  , 284
  , 228
  , 105
  , 228
  , 132

  , 201
  , 226
  , 150
  , 164
  , 186
  , 171
  , 252
  , 188
  , 225
  , 202
  , 204
  , 168
  , 131
  , 143
  , 150
  , 188
  , 160
  , 212
  , 158
  , 167
  , 197
  , 234
  , 175
  , 213
  , 134
  , 185
  , 273
  , 145
  , 221
  , 136
  , 206
  , 173
  , 156
  , 256
  , 129
  , 243
  , 275
  , 202
  , 186
  , 137
  , 163
  , 234
  , 238
  , 104
  , 261
  , 201
  , 242
  , 185
  , 217
  , 209
  , 243
  , 271
  , 338
  , 341
  , 251
  , 244
  , 244
  , 269
  , 258
  , 268
  , 267
  , 234
  , 269
  , 282
  , 229
  , 297
  , 191
  , 256
  , 223
  , 244
  , 342
  , 290
  , 248
  , 270
  , 296
  , 284
  , 340
  , 279
  , 270
  , 311
  , 317
  , 218
  , 201
  , 337
  , 109
  , 273
  , 266
  , 232
  , 342
  , 201
  , 267
  , 177
  , 339
  , 142
  , 113
  , 215
  , 123
  , 236
  , 116
  , 648

  , 639
  , 215
  , 256
  , 195
  , 195
  , 311
  , 277
  , 254
  , 231
  , 138
  , 201
  , 165
  , 190
  , 235
  , 296
  , 135
  , 203
  , 281
  , 182
  , 183
  , 146
  , 231
  , 289
  , 223
  , 132
  , 215
  , 155
  , 137
  , 133
  , 210
  , 243
  , 244
  , 164
  , 291
  , 188
  , 160
  , 262
  , 233
  , 174
  , 177
  , 193
  , 238
  , 171
  , 193
  , 191
  , 152
  , 167
  , 156
  , 162
  , 187
  , 150
  , 149],
Lamm:[28.35
  , 28.35
  , 286
  , 187
  , 148
  , 128
  , 28.35
  , 201
  , 85
  , 242
  , 265
  , 229
  , 28.35
  , 255
  , 262
  , 28.35
  , 269
  , 269
  , 218
  , 28.35
  , 209
  , 85
  , 28.35
  , 147
  , 85
  , 174
  , 85
  , 269
  , 202
  , 218
  , 252
  , 28.35
  , 248
  , 85
  , 28.35
  , 28.35
  , 286
  , 217
  , 193
  , 159
  , 238
  , 28.35
  , 224
  , 85
  , 28.35
  , 207
  , 286
  , 210
  , 28.35
  , 241
  , 28.35
  , 28.35
  , 85
  , 192
  , 28.35
  , 28.35
  , 258
  , 152
  , 164
  , 258
  , 272
  , 168
  , 222
  , 138
  , 168
  , 295
  , 295
  , 28.35
  , 157
  , 327
  , 85
  , 28.35
  , 28.35
  , 267
  , 28.35
  , 258
  , 283
  , 304
  , 28.35
  , 206
  , 209
  , 28.35
  , 163
  , 208
  , 218
  , 215
  , 28.35
  , 177
  , 289
  , 358
  , 229
  , 251
  , 182
  , 174
  , 85
  , 85
  , 240
  , 28.35
  , 191
  , 28.35

  , 85
  , 85
  , 351
  , 272
  , 244
  , 236
  , 205
  , 263
  , 186
  , 269
  , 183
  , 251
  , 340
  , 340
  , 340
  , 340
  , 340
  , 313
  , 340
  , 340
  , 313
  , 313
  , 340
  , 330
  , 340
  , 191
  , 240
  , 347
  , 399
  , 339
  , 299
  , 313
  , 295
  , 240
  , 345
  , 28.35
  , 255
  , 255
  , 198
  , 255
  , 184
  , 231
  , 322
  , 300
  , 28.35
  , 28.35
  , 260
  , 28.35
  , 267
  , 28.35
  , 148
  , 250
  , 213
  , 248
  , 28.35
  , 28.35
  , 28.35
  , 263
  , 168
  , 242
  , 284
  , 253
  , 85
  , 291
  , 28.35
  , 85
  , 194
  , 270
  , 28.35
  , 28.35
  , 28.35
  , 265
  , 274
  , 256
  , 85
  , 260
  , 222
  , 28.35
  , 242
  , 28.35
  , 233
  , 237
  , 236
  , 85
  , 28.35
  , 28.35
  , 283
  , 28.35
  , 233
  , 28.35
  , 250
  , 223
  , 207
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 211
  , 28.35
  , 28.35
  
  , 248
  , 85
  , 28.35
  , 28.35
  , 28.35
  , 85
  , 286
  , 28.35
  , 277
  , 28.35
  , 28.35
  , 180
  , 251
  , 85
  , 262
  , 28.35
  , 28.35
  , 306
  , 246
  , 85
  , 28.35
  , 233
  , 28.35
  , 85
  , 28.35
  , 259
  , 28.35
  , 28.35
  , 28.35
  , 241
  , 28.35
  , 284
  , 28.35
  , 273
  , 85
  , 28.35
  , 28.35
  , 222
  , 180
  , 179
  , 774
  , 87
  , 194
  , 95
  , 293
  , 102
  , 114
  , 176
  , 92
  , 93
  , 54
  , 202],
Lam2:["Lamb, domestic, composite of trimmed retail cuts, separable lean only, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, composite of trimmed retail cuts, separable fat, trimmed to 1/4 fat, choice, cooked"
, "Lamb, domestic, composite of trimmed retail cuts, separable lean only, trimmed to 1/4 fat, choice, cooked"
, "Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, foreshank, separable lean only, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, leg, whole (shank and sirloin), separable lean only, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, leg, sirloin half, separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, loin, separable lean only, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/4 fat, choice, cooked"
, "Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, rib, separable lean and fat, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, rib, separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, loin, separable lean only, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, loin, separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, leg, whole (shank and sirloin), separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, loin, separable lean and fat, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, rib, separable lean only, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, loin, separable lean and fat, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4 fat, choice, cooked, braised"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, loin, separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, rib, separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, leg, shank half, separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, domestic, shoulder, arm, separable lean only, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, raw"
, "Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4 fat, choice, cooked, broiled"
, "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable fat, cooked"
, "Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean only, raw"
, "Lamb, New Zealand, imported, frozen, rib, separable lean and fat, cooked, roasted"
, "Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4 fat, choice, raw"
, "Lamb, domestic, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4 fat, raw"
, "Lamb, New Zealand, imported, frozen, loin, separable lean and fat, cooked, broiled"
, "Veal, composite of trimmed retail cuts, separable lean only, cooked"
, "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable fat, raw"
, "Lamb, New Zealand, imported, frozen, loin, separable lean only, raw"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/4 fat, choice, cooked, roasted"
, "Lamb, New Zealand, imported, frozen, rib, separable lean only, cooked, roasted"
, "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean only, cooked"
, "Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, cooked, roasted"
, "Lamb, domestic, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4 fat, cooked, braised"
, "Lamb, New Zealand, imported, frozen, foreshank, separable lean and fat, cooked, braised"
, "Lamb, New Zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, cooked"
, "Lamb, New Zealand, imported, frozen, foreshank, separable lean only, cooked, braised"
, "Lamb, domestic, shoulder, blade, separable lean only, trimmed to 1/4 fat, choice, cooked, braised"
, "Veal, leg (top round), separable lean only, cooked, pan-fried, breaded"
, "Veal, leg (top round), separable lean and fat, cooked, pan-fried, breaded"
, "Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, raw"
, "Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean only, cooked, braised"
, "Lamb, domestic, cubed for stew or kabob (leg and shoulder), separable lean only, trimmed to 1/4 fat, cooked, broiled"
, "Lamb, New Zealand, imported, frozen, loin, separable lean only, cooked, broiled"
, "Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, raw"
, "Lamb, New Zealand, imported, frozen, loin, separable lean and fat, raw"
, "Veal, leg (top round), separable lean only, cooked, braised"
, "Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean only, raw"
, "Veal, shoulder, whole (arm and blade), separable lean and fat, cooked, roasted"
, "Veal, shoulder, arm, separable lean and fat, cooked, roasted"
, "Veal, leg (top round), separable lean and fat, cooked, pan-fried, not breaded"
, "Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean only, raw"
, "Lamb, New Zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, cooked, braised"
, "Veal, composite of trimmed retail cuts, separable lean and fat, cooked"
, "Veal, loin, separable lean and fat, raw"
, "Veal, rib, separable lean only, cooked, braised"
, "Veal, loin, separable lean only, cooked, roasted"
, "Lamb, New Zealand, imported, frozen, leg, whole (shank and sirloin), separable lean only, cooked, roasted"
, "Veal, rib, separable lean only, cooked, roasted"
, "Veal, loin, separable lean only, raw"
, "Veal, rib, separable lean and fat, cooked, braised"
, "Veal, leg (top round), separable lean only, cooked, pan-fried, not breaded"
, "Veal, leg (top round), separable lean and fat, cooked, roasted"
, "Veal, loin, separable lean and fat, cooked, roasted"
, "Veal, shoulder, whole (arm and blade), separable lean only, cooked, roasted"
, "Veal, shoulder, whole (arm and blade), separable lean only, cooked, braised"
, "Veal, shoulder, blade, separable lean only, cooked, braised"
, "Veal, shoulder, arm, separable lean and fat, cooked, braised"
, "Veal, loin, separable lean and fat, cooked, braised"
, "Veal, rib, separable lean and fat, cooked, roasted"
, "Veal, shoulder, arm, separable lean only, raw"
, "Veal, shoulder, whole (arm and blade), separable lean and fat, cooked, braised"
, "Veal, shoulder, arm, separable lean and fat, raw"

, "Veal, shoulder, arm, separable lean only, cooked, braised"
, "Veal, loin, separable lean only, cooked, braised"
, "Veal, leg (top round), separable lean only, cooked, roasted"
, "Veal, shoulder, arm, separable lean only, cooked, roasted"
, "Veal, shoulder, blade, separable lean and fat, cooked, roasted"
, "Veal, shoulder, blade, separable lean only, cooked, roasted"
, "Veal, sirloin, separable lean and fat, cooked, braised"
, "Veal, cubed for stew (leg and shoulder), separable lean only, cooked, braised"
, "Veal, shoulder, blade, separable lean and fat, cooked, braised"
, "Veal, sirloin, separable lean and fat, cooked, roasted"
, "Veal, sirloin, separable lean only, cooked, braised"
, "Veal, sirloin, separable lean only, cooked, roasted"
, "Game meat, buffalo, water, cooked, roasted"
, "Game meat, bison, separable lean only, cooked, roasted"
, "Game meat, antelope, cooked, roasted"
, "Game meat, beefalo, composite of cuts, cooked, roasted"
, "Game meat, boar, wild, cooked, roasted"
, "Game meat, beaver, cooked, roasted"
, "Game meat, deer, cooked, roasted"
, "Game meat, caribou, cooked, roasted"
, "Game meat, rabbit, domesticated, composite of cuts, cooked, roasted"
, "Game meat, muskrat, cooked, roasted"
, "Game meat, horse, cooked, roasted"
, "Veal, variety meats and by-products, brain, cooked, pan-fried"
, "Game meat, moose, cooked, roasted"
, "Lamb, variety meats and by-products, heart, cooked, braised"
, "Lamb, variety meats and by-products, brain, cooked, pan-fried"
, "Lamb, variety meats and by-products, brain, cooked, braised"
, "Game meat, opossum, cooked, roasted"
, "Veal, variety meats and by-products, brain, cooked, braised"
, "Game meat, rabbit, domesticated, composite of cuts, cooked, stewed"
, "Game meat, squirrel, cooked, roasted"
, "Lamb, variety meats and by-products, spleen, cooked, braised"
, "Veal, variety meats and by-products, pancreas, cooked, braised"
, "Veal, variety meats and by-products, spleen, cooked, braised"
, "Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, variety meats and by-products, tongue, cooked, braised"
, "Veal, variety meats and by-products, tongue, cooked, braised"
, "Veal, variety meats and by-products, heart, cooked, braised"
, "Lamb, variety meats and by-products, kidneys, cooked, braised"
, "Veal, variety meats and by-products, kidneys, cooked, braised"
, "Lamb, variety meats and by-products, pancreas, cooked, braised"
, "Lamb, variety meats and by-products, liver, cooked, pan-fried"
, "Veal, variety meats and by-products, lungs, cooked, braised"
, "Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, leg, shank half, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Lamb, domestic, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, foreshank, separable lean and fat, trimmed to 1/8 fat, cooked, braised"
, "Lamb, domestic, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, choice, cooked"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
, "Lamb, domestic, rib, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Lamb, new zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Lamb, new zealand, imported, frozen, foreshank, separable lean and fat, trimmed to 1/8 fat, cooked, braised"
, "Lamb, domestic, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8 fat, choice, roasted"
, "Lamb, new zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8 fat, cooked, broiled"
, "Veal, breast, plate half, boneless, separable lean and fat, cooked, braised"
, "Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, domestic, loin, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
, "Veal, shank (fore and hind), separable lean and fat, cooked, braised"
, "Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, cooked"
, "Lamb, new zealand, imported, frozen, foreshank, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, rib, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, domestic, loin, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Veal, breast, point half, boneless, separable lean and fat, cooked, braised"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Lamb, new zealand, imported, frozen, loin, separable lean and fat, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, domestic, leg, sirloin half, separable lean and fat, trimmed to 1/8 fat, choice, cooked, roasted"
, "Lamb, domestic, rib, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
, "Lamb, domestic, loin, separable lean and fat, trimmed to 1/8 fat, choice, raw"
, "Lamb, new zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, cooked"
, "Lamb, new zealand, imported, frozen, rib, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, new zealand, imported, frozen, rib, separable lean and fat, trimmed to 1/8 fat, cooked, roasted"
, "Veal, breast, whole, boneless, separable lean only, cooked, braised"
, "Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean only, trimmed to 1/8 fat, cooked"
, "Lamb, domestic, shoulder, arm, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
, "Game meat, bison, shoulder clod, separable lean only, trimmed to 0 fat, raw"
, "Lamb, new zealand, imported, frozen, loin, separable lean and fat, trimmed to 1/8 fat, raw"
, "Veal, breast, whole, boneless, separable lean and fat, cooked, braised"
, "Lamb, new zealand, imported, frozen, composite of trimmed retail cuts, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, new zealand, imported, frozen, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, cooked, braised"
, "Lamb, new zealand, imported, frozen, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8 fat, choice, cooked, broiled"
, "Veal, shank (fore and hind), separable lean only, cooked, braised"
, "Lamb, domestic, shoulder, blade, separable lean and fat, trimmed to 1/8 fat, choice, cooked, braised"
, "Lamb, Australian, imported, fresh, composite of trimmed retail cuts, separable lean only, trimmed to 1/8 fat, raw"
, "Game meat, bison, top sirloin, separable lean only, trimmed to 0 fat, raw"
, "Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, foreshank, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, foreshank, separable lean and fat, trimmed to 1/8 fat, cooked, braised"
, "Game meat, bison, ribeye, separable lean only, trimmed to 0 fat, raw"
, "Lamb, Australian, imported, fresh, separable fat, raw"

, "Lamb, Australian, imported, fresh, separable fat, cooked"
, "Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean and fat, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, foreshank, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, shoulder, arm, separable lean and fat, trimmed to 1/8 fat, cooked, braised"
, "Lamb, Australian, imported, fresh, rib, separable lean and fat, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, shank half, separable lean and fat, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, shank half, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, foreshank, separable lean only, trimmed to 1/8 fat, cooked, braised"
, "Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean only, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean and fat, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean and fat, trimmed to 1/8 fat, cooked"
, "Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, loin, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean and fat, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, leg, shank half, separable lean only, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, leg, center slice, bone-in, separable lean only, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, Australian, imported, fresh, loin, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, shoulder ,blade, separable lean only, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, Australian, imported, fresh, rib, separable lean and fat, trimmed to 1/8 fat, raw"
, "Game meat , bison, ground, raw"
, "Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, sirloin half, boneless, separable lean only, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean only,   trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, shoulder, arm, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, shank half, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, rib, separable lean only, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, shoulder, arm, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, leg, whole (shank and sirloin), separable lean and fat, trimmed to 1/8 fat, cooked, roasted"
, "Lamb, Australian, imported, fresh, shoulder, blade, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, shoulder, blade, separable lean and fat, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, Australian, imported, fresh, leg, sirloin chops, boneless, separable lean only, trimmed to 1/8 fat, cooked, broiled"
, "Lamb, Australian, imported, fresh, rib, separable lean only, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, shoulder, blade, separable lean and fat, trimmed to 1/8 fat, raw"
, "Lamb, Australian, imported, fresh, shoulder, whole (arm and blade), separable lean only, trimmed to 1/8 fat, cooked"
, "Game meat, bison, top round, separable lean only, 1 steak, cooked, broiled"
, "Game meat, bison, ribeye, separable lean only, 1 steak, cooked, broiled"
, "Game meat, bison, chuck, shoulder clod, separable lean only, 3-5 lb roast, cooked, braised"
, "Game meat, bison, ground, cooked, pan-broiled"
, "Game meat , bison, top sirloin, separable lean only, 1 steak, cooked, broiled"
, "Game meat, elk, ground, cooked, pan-broiled"
, "Game meat, deer, shoulder clod, separable lean only, 3-5 lb roast, cooked, braised"
, "Game meat, deer, top round, separable lean only, 1 steak, cooked, broiled"
, "Game meat, elk, loin, separable lean only, cooked, broiled"
, "Game meat, elk, round, separable lean only, cooked, broiled"
, "Game meat, elk, tenderloin, separable lean only, cooked, broiled"
, "Game meat, deer, ground, cooked, pan-broiled"
, "Game meat, deer, loin, separable lean only, 1 steak, cooked, broiled"
, "Game meat, deer, tenderloin, separable lean only, 0.5-1 lb roast, cooked, broiled"],
Lam:["羊羔肉，国内，零售肉馅，精瘦，1/4脂肪，生", "羊羔肉，国内，羊腿，半小腿，分肥瘦，1/4脂肪，生", "羊羔肉，国内，零售肉馅，可分离脂肪，1/4脂肪，，即食", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），精瘦，1/4脂肪，生", "羊羔肉，国内，前腿肉，分肥瘦，1/4脂肪，即食，红烧", "羊羔肉，国内，里脊，精瘦，1/4脂肪，即食，烧烤", "羊羔肉，国内，前腿肉，精瘦，1/4脂肪，即食，红烧", "羊羔肉，国内，羊腿，半腰肉，精瘦，1/4脂肪，即食，烤", "羊羔肉，国内，零售肉馅，精瘦，1/4脂肪，即食", "羊羔肉，国内，零售肉馅，分肥瘦，1/4脂肪，即食", "羊羔肉，国内，羊腿，半牛里脊，分肥瘦，1/4脂肪，即食，烤", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），分肥瘦，1/4脂肪，即食，烤", "羊羔肉，国内，里脊，精瘦，1/4脂肪，生", "羊羔肉，国内，肋排，分肥瘦，1/4脂肪，即食，烤", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），分肥瘦，1/4脂肪，生", "羊羔肉，国内，肋排，分肥瘦，1/4脂肪，即食，烘焙", "羊羔肉，国内，里脊，分肥瘦，1/4脂肪，即食，烤", "羊羔肉，国内，羊腿，半小腿，分肥瘦，1/4脂肪，即食，烤", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，羊肩，羊手臂，分肥瘦，1/4脂肪，生", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，生", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，即食，红烧", "羊羔肉，国内，肋骨，精瘦，1/4脂肪，即食，烧烤", "羊羔肉，国内，里脊，分肥瘦，1/4脂肪，即食，烧烤", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/4脂肪，即食，红烧", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，即食，烘焙", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，羊肩，羊手臂，精瘦，1/4脂肪，选择，即食，红烧", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，即食，红烧", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/4脂肪，即食，烘焙", "羊羔肉，国内，里脊，分肥瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/4脂肪，即食，红烧", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩，羊手臂，精瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，肋骨，精瘦，1/4脂肪，即食，烤", "羊羔肉，国内，里脊，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，零售肉馅，分肥瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩，羊手臂，精瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，新西兰，进口，冷冻，零售切割肉馅，分肥瘦，生", "羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，零售肉馅，分肥，即食", "羊羔肉，国内，羊腿，半小腿，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，零售肉馅，精瘦，生", "羊羔肉，国内，羊肩，羊臂，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，肋排，分肥瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，零售切割肉馅，可分离脂肪，生", "小牛肉，零售切割肉馅，精瘦，即食", "羊羔肉，国内，炖或烤羊肉（腿和肩），精瘦，1/4脂肪，生", "羊羔肉，新西兰，进口，冷冻，里脊，精瘦，生", "羊羔肉，新西兰，进口，冷冻，零售切割肉馅，精瘦，即食", "羊羔肉，新西兰，进口，冷冻，肋排，精瘦，即食，烤", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/4脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），分肥瘦，即食，烤", "羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，生", "羊羔肉，新西兰，进口，冷冻，里脊，分肥瘦，即食，烧烤", "羊羔肉，新西兰，进口，冷冻，前腿肉，精瘦，即食，红烧", "羊羔肉，国内，炖或烤羊肉（腿和肩），精瘦，1/4脂肪，即食，红烧", "小牛肉，腿（上部圆形），精瘦，即食，煎，面包", "羊羔肉，新西兰，进口，冷冻，零售肉馅，分肥瘦，即食", "羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，即食，红烧", "羊羔肉，新西兰，进口，冷冻，前腿肉，分肥瘦，即食，红烧", "小牛肉，腿（上部圆形），分肥瘦，即食，煎，面包", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），精瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，羊肩，全部（臂和肩），分肥瘦，生", "羊羔肉，国内，炖或烤羊肉（腿和肩），精瘦，1/4脂肪，即食，烘焙", "小牛肉，肩肉，全部（腿肉和肩肉），分肥瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），分肥瘦，生", "羊羔肉，新西兰，进口，冷冻，里脊，精瘦，即食，烧烤", "小牛肉，腿（上部圆形），精瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），精瘦，生", "小牛肉，腿（上部圆形），分肥瘦，即食，油煎，无面包屑", "小牛肉，肩肉，肩肉，分肥瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），精瘦，生", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），分肥瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，里脊，分肥瘦，生", "小牛肉，零售肉馅，分肥瘦，即食", "小牛肉，肋排，精瘦，即食，红烧", "小牛肉，里脊，分肥瘦，生", "小牛肉，里脊，精瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），精瘦，即食，烤", "小牛肉，肋排，精瘦，即食，烤", "小牛肉，里脊，精瘦，生", "小牛肉，腿（上部圆形），精瘦，即食，煎，不带面包", "小牛肉，腿（上部圆形），分肥瘦，即食，烤", "小牛肉，肋排，分肥瘦，即食，红烧", "小牛肉，肩胛肉，全部（腿肉和肩肉），精瘦，即食，烤", "小牛肉，肩肉，肩胛骨，精瘦，即食，红烧", "小牛肉，肩肉，全部（腿肉和肩肉），精瘦，即食，红烧", "小牛肉，里脊，分肥瘦，即食，红烧", "小牛肉，里脊，分肥瘦，即食，烤", "小牛肉，肋排，分肥瘦，即食，烤", "小牛肉，肩，臂，精瘦，生", "小牛肉，肩肉，全部（腿肉和肩肉），分肥瘦，即食，红烧", "小牛肉，肩，臂，分肥瘦，生", "小牛肉，肩，臂，分肥瘦，即食，红烧", "羊羔肉，国内，零售肉馅，精瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊腿，半小腿，分肥瘦，1/4脂肪，选择，生", "羊羔肉，国内，零售肉馅，可分离脂肪，1/4脂肪，选择，即食", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），精瘦，1/4脂肪，选择，生","羊羔肉，国内，前腿肉，分肥瘦，1/4脂肪，选择，即食，红烧","羊羔肉，国内，里脊，精瘦，1/4脂肪，选择，即食，烧烤", "羊羔肉，国内，前腿肉，精瘦，1/4脂肪，选择，即食，红烧", "羊羔肉，国内，羊腿，半腰肉，精瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，零售肉馅，精瘦，1/4脂肪，选择，即食","羊羔肉，国内，零售肉馅，分肥瘦，1/4脂肪，选择，即食", "羊羔肉，国内，羊腿，半牛里脊，分肥瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，羊腿，全部（小腿和牛里脊），分肥瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，里脊，精瘦，1/4脂肪，选择，生","羊羔肉，国内，肋排，分肥瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，羊腿，全部（小腿和牛里脊），分肥瘦，1/4脂肪，选择，生","羊羔肉，国内，肋排，分肥瘦，1/4脂肪，选择，即食，烘焙","羊羔肉，国内，里脊，分肥瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，羊腿，半小腿，分肥瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，羊腿，全部（小腿和牛里脊），精瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，羊肩，羊手臂，分肥瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，选择，即食，红烧","羊羔肉，国内，肋骨，精瘦，1/4脂肪，选择，即食，烧烤","羊羔肉，国内，里脊，分肥瘦，1/4脂肪，选择，即食，烧烤", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/4脂肪，选择，即食，红烧", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，羊肩，羊手臂，精瘦，1/4脂肪，选择，即食，红烧", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，选择，即食，红烧","羊羔肉，国内，羊肩，羊臂，分肥瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，里脊，分肥瘦，1/4脂肪，选择，生", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，选择，生","羊羔肉，国内，羊肩，羊臂，分肥瘦，1/4脂肪，选择，即食，红烧","羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩，羊手臂，精瘦，1/4脂肪，选择，生","羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/4脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，羊肩肉，全部（臂和肩），精瘦，1/4脂肪，选择，即食，烤","羊羔肉，国内，肋骨，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，里脊，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，国内，零售肉馅，分肥瘦，1/4脂肪，选择，生","羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，即食，烘焙","羊羔肉，国内，羊肩，羊手臂，精瘦，1/4脂肪，选择，即食，烘焙","羊羔肉，新西兰，进口，冷冻，零售切割肉馅，分肥瘦，生","羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，零售肉馅，分肥，即食","羊羔肉，国内，羊腿，半小腿，精瘦，1/4脂肪，选择，即食，烤","羊羔肉，新西兰，进口，冷冻，零售肉馅，精瘦，生", "羊羔肉，国内，羊肩，羊臂，精瘦，1/4脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，肋排，分肥瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，零售切割肉馅，可分离脂肪，生","小牛肉，零售切割肉馅，精瘦，即食", "羊羔肉，国内，炖或烤羊肉（腿和肩），精瘦，1/4脂肪，生","羊羔肉，新西兰，进口，冷冻，里脊，精瘦，生","羊羔肉，新西兰，进口，冷冻，零售切割肉馅，精瘦，即食","羊羔肉，新西兰，进口，冷冻，肋排，精瘦，即食，烤", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/4脂肪，选择，即食，烤","羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），分肥瘦，即食，烤","羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，生", "羊羔肉，新西兰，进口，冷冻，里脊，分肥瘦，即食，烧烤","羊羔肉，新西兰，进口，冷冻，前腿肉，精瘦，即食，红烧", "羊羔肉，国内，炖或烤羊肉（腿和肩），精瘦，1/4脂肪，即食，红烧", "小牛肉，腿（上部圆形），精瘦，即食，煎，面包","羊羔肉，新西兰，进口，冷冻，零售肉馅，分肥瘦，即食", "羊羔肉，国内，羊肩肉，羊肩肉，精瘦，1/4脂肪，选择，即食，红烧","羊羔肉，新西兰，进口，冷冻，前腿肉，分肥瘦，即食，红烧", "小牛肉，腿（上部圆形），分肥瘦，即食，煎，面包", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），精瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，羊肩，全部（臂和肩），分肥瘦，生","羊羔肉，国内，炖或烤羊肉（腿和肩），精瘦，1/4脂肪，即食，烘焙","小牛肉，肩肉，全部（腿肉和肩肉），分肥瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），分肥瘦，生", "羊羔肉，新西兰，进口，冷冻，里脊，精瘦，即食，烧烤","小牛肉，腿（上部圆形），精瘦，即食，红烧","羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），精瘦，生","小牛肉，腿（上部圆形），分肥瘦，即食，油煎，无面包屑", "小牛肉，肩肉，肩肉，分肥瘦，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），精瘦，生", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），分肥瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，里脊，分肥瘦，生","小牛肉，零售肉馅，分肥瘦，即食", "小牛肉，肋排，精瘦，即食，红烧","小牛肉，里脊，分肥瘦，生","小牛肉，里脊，精瘦，即食，烤","羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），精瘦，即食，烤","小牛肉，肋排，精瘦，即食，烤","小牛肉，里脊，精瘦，生", "小牛肉，腿（上部圆形），精瘦，即食，煎，不带面包","小牛肉，腿（上部圆形），分肥瘦，即食，烤","小牛肉，肋排，分肥瘦，即食，红烧","小牛肉，肩胛肉，全部（腿肉和肩肉），精瘦，即食，烤","小牛肉，肩肉，肩胛骨，精瘦，即食，红烧","小牛肉，肩肉，全部（腿肉和肩肉），精瘦，即食，红烧","小牛肉，里脊，分肥瘦，即食，红烧","小牛肉，里脊，分肥瘦，即食，烤", "小牛肉，肋排，分肥瘦，即食，烤","小牛肉，肩，臂，精瘦，生","小牛肉，肩肉，全部（腿肉和肩肉），分肥瘦，即食，红烧","小牛肉，肩，臂，分肥瘦，生","小牛肉，肩，臂，分肥瘦，即食，红烧","小牛肉，肩，臂，精瘦，即食，红烧", "小牛肉，肩胛肉，肩肉，精瘦，即食，烤", "小牛肉，腿（上部圆形），精瘦，即食，烤", "小牛肉，里脊，精瘦，即食，红烧", "小牛肉，牛腰肉，分肥瘦，即食，红烧", "小牛肉，肩肉，肩肉，精瘦，即食，烤", "小牛肉，肩肉，肩胛肉，分肥瘦，即食，烤", "小牛肉，炖（腿肩）时切成小方块，精瘦，即食，红烧", "小牛肉，牛腰肉，分肥瘦，即食，烤", "小牛肉，肩肉，肩胛肉，分肥瘦，即食，红烧", "野味肉，牛肉，肉块，即食，烤", "小牛肉，牛腰肉，精瘦，即食，红烧", "野味肉，羚羊，即食，烤", "野味肉，野牛，精瘦，即食，烤", "野味肉、海狸、熟的、烤熟", "野味肉、鹿、熟的、烤熟", "野味肉、水牛、水、熟的、烤熟", "小牛肉，牛腰肉，精瘦，即食，烤", "野猪野味肉、野猪、熟的、烤熟", "野味肉、北美驯鹿、熟的、烤熟", "野味肉、驼鹿、熟的、烤熟", "羊羔肉、畜下水和副产品、心、熟的、炖熟", "野味肉，兔子，家养，肉块复合，即食，烤", "小牛肉、畜下水和副产品、脑、熟的、油炸", "野味肉、马、熟的、烤熟", "羊羔肉、畜下水和副产品、脑、熟的、油炸", "野味肉，麝鼠，即食，烤", "羊羔肉、畜下水和副产品、脑、熟的、炖熟", "野味肉，负鼠，即食，烤", "小牛肉，牛杂及副产品，脑，即食，红烧", "野味肉、松鼠、熟的、烤熟", "羊羔肉、畜下水和副产品、脾脏、熟的、炖熟", "小牛肉、畜下水和副产品、脾脏、熟的、炖熟", "小牛肉，牛杂及副产品，胰腺，即食，红烧", "野味肉，兔子，家养，肉块复合，即食，炖", "羊羔肉、畜下水和副产品、舌头、熟的、炖熟", "羊羔肉，国内，零售肉馅，分肥瘦，1/8脂肪，选择，生", "小牛肉、畜下水和副产品、舌头、熟的、炖熟", "小牛肉，牛杂及副产品，心，即食，红烧", "羊羔肉、畜下水和副产品、肾脏、熟的、炖熟", "小牛肉、各种肉类和副产品、肺、熟的、炖熟", "羊羔肉，国内，羊腿，半腰肉，分肥瘦，1/8脂肪，选择，生", "羊羔肉、畜下水和副产品、肝、熟的、油炸", "羊羔肉、畜下水和副产品、胰腺、熟的、炖熟", "小牛肉、各种肉类和副产品、肾脏、熟的、炖熟", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），分肥瘦，1/8脂肪，选择，生", "羊羔肉，国内，羊腿，全部（小腿和牛里脊），分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，国内，羊腿，半小腿，分肥瘦，1/8脂肪，选择，生", "羊羔肉，国内，羊腿，半小腿，分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，国内，前腿肉，分肥瘦，1/8脂肪，选择，生", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/8脂肪，选择，生", "羊羔肉，国内，零售肉馅，分肥瘦，1/8脂肪，选择，即食", "羊羔肉，国内，前腿肉，分肥瘦，1/8脂肪，即食，红烧", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/8脂肪，选择，即食，红烧", "羊羔肉，国内，肋排，分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，羊肩，全部（臂和肩），分肥瘦，1/8脂肪，生", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，国内，羊肩肉，全部（腿肉和肩肉），分肥瘦，1/8脂肪，选择，即食，烘焙", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/8脂肪，选择，生", "羊羔肉，新西兰，进口，冷冻，前腿肉，分肥瘦，1/8脂肪，即食，红烧", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/8脂肪，即食，烘焙", "羊羔肉，国内，里脊，分肥瘦，1/8脂肪，选择，即食，烘焙", "羊羔肉，澳大利亚，进口，新鲜，零售肉馅，分肥瘦，1/8脂肪，生", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），分肥瘦，1/8脂肪，即食，烤", "小牛肉，胸脯，半截肉，无骨，分肥瘦，即食，红烧", "小牛肉，小腿（前和后），分肥瘦，即食，红烧", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/8脂肪，选择，烤", "羊羔肉，澳大利亚，进口，新鲜，零售肉馅，分肥瘦，1/8脂肪，即食", "羊羔肉，新西兰，进口，冷冻，前腿肉，分肥瘦，1/8脂肪，生", "羊羔肉，国内，羊肩，羊肩肉，分肥瘦，1/8脂肪，选择，生", "小牛肉，胸肉，半角，无骨，分肥瘦，即食，红烧", "羊羔肉，国内，羊腿，半牛里脊，分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，国内，里脊，分肥瘦，1/8脂肪，选择，生", "羊羔肉，国内，里脊，分肥瘦，1/8脂肪，选择，即食，烤", "羊羔肉，新西兰，进口，冷冻，零售肉馅，分肥瘦，1/8脂肪，即食", "羊羔肉，新西兰，进口，冷冻，里脊，分肥瘦，1/8脂肪，即食，烘焙", "羊羔肉，国内，肋骨，分肥瘦，1/8脂肪，选择，生", "羊羔肉，国内，肋排，分肥瘦，1/8脂肪，选择，即食，烘焙", "羊羔肉，新西兰，进口，冷冻，肋骨，分肥瘦，1/8脂肪，生", "羊羔肉，国内，羊肩，羊臂，分肥瘦，1/8脂肪，选择，即食，红烧", "羊羔肉，新西兰，进口，冷冻，里脊，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，零售肉馅，精瘦，1/8脂肪，即食", "小牛肉，胸肉，全部，无骨，精瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，肋排，分肥瘦，1/8脂肪，即食，烤", "野味肉，野牛，肩肉，精瘦，切至0脂肪，生", "羊羔肉，新西兰，进口，冷冻，羊肩肉，全部（臂和肩），分肥瘦，1/8脂肪，即食，红烧", "羊羔肉，新西兰，进口，冷冻，羊腿，全部（小腿和牛里脊），分肥瘦，1/8脂肪，生", "小牛肉，胸肉，全部，无骨，分肥瘦，即食，红烧", "羊羔肉，新西兰，进口，冷冻，零售肉馅，分肥瘦，1/8脂肪，生", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/8脂肪，选择，即食，烘焙", "小牛肉，小腿（前和后），精瘦，即食，红烧", "羊羔肉，澳大利亚，进口，新鲜，零售肉馅，精瘦，1/8脂肪，生", "羊羔肉，国内，羊肩肉，羊肩肉，分肥瘦，1/8脂肪，选择，即食，红烧", "羊羔肉，澳大利亚，进口，新鲜，羊腿，全部（小腿和牛里脊），分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，前腿肉，精瘦，1/8脂肪，生", "野味肉，野牛，里贝叶，精瘦，切至0脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，前腿肉，分肥瘦，1/8脂肪，即食，红烧", "野味肉，野牛，上等牛腰肉，精瘦，切至0脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，分肥，生","羊羔肉，澳大利亚，进口，新鲜，羊腿，中片，带骨，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，分肥，即食", "羊羔肉，澳大利亚，进口，新鲜，前腿肉，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，中片，带骨，分肥瘦，1/8脂肪，即食，烘焙", "羊羔肉，澳大利亚，进口，新鲜，羊肩，羊臂，分肥瘦，1/8脂肪，即食，红烧", "羊羔肉，澳大利亚，进口，新鲜，羊肩，全部（臂和肩），分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半小腿，分肥瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，肋排，分肥瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半牛里脊，无骨，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半牛里脊，无骨，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，全部（小腿和牛里脊），精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半小腿，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊肩，全部（臂和肩），分肥瘦，1/8脂肪，即食", "羊羔肉，澳大利亚，进口，新鲜，前腿肉，精瘦，1/8脂肪，即食，红烧", "羊羔肉，澳大利亚，进口，新鲜，里脊，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，沙朗排骨，无骨，分肥瘦，1/8脂肪，即食，烘焙", "羊羔肉，澳大利亚，进口，新鲜，羊腿，全部（小腿和牛里脊），精瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半牛里脊，无骨，分肥瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半小腿，精瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，羊腿，中间切片，带骨，精瘦，1/8脂肪，即食，烘焙", "羊羔肉，澳大利亚，进口，新鲜，羊肩肉，羊肩肉，精瘦，1/8脂肪，即食，烘焙", "野味肉、野牛、绞肉、生的", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半牛里脊，无骨，精瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，里脊，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊肩，全部（臂和肩），精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，沙朗排骨，无骨，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊肩，羊臂，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊腿，半小腿，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，肋排，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，肋排，精瘦，1/8脂肪，即食，烤", "羊羔肉，澳大利亚，进口，新鲜，羊腿，沙朗排骨，无骨，精瘦，1/8脂肪，即食，烘焙", "羊羔肉，澳大利亚，进口，新鲜，羊肩，羊肩肉，分肥瘦，1/8脂肪，即食，烘焙", "羊羔肉，澳大利亚，进口，新鲜，肋排，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊肩肉，羊肩肉，精瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊肩，羊臂，分肥瘦，1/8脂肪，生", "羊羔肉，澳大利亚，进口，新鲜，羊肩肉，全部（臂和肩），精瘦，1/8脂肪，即食", "羊羔肉，澳大利亚，进口，新鲜，羊腿，全部（小腿和牛里脊），分肥瘦，1/8肥肉，即食，烤", "野味肉，野牛，头围，精瘦，1块牛排，即食，烧烤", "羊羔肉，澳大利亚，进口，新鲜，羊肩，羊肩肉，分肥瘦，1/8脂肪，生", "野味肉，野牛，里贝叶，精瘦，1块牛排，即食，烧烤", "野味肉、麋鹿、磨碎、熟的、平底锅烧烤", "野味肉，鹿，头围，精瘦，1块牛排，即食，烧烤", "野味肉、野牛、绞肉、熟的、平底锅烧烤", "野味肉，野牛，上等牛腰肉，精瘦，1块牛排，即食，烧烤", "野味肉，野牛，肩胛肉，精瘦，3-5磅烤肉，即食，红烧", "野味肉，麋鹿，后腿肉，精瘦，即食，烘焙", "野味肉，麋鹿，里脊，精瘦，即食，烧烤", "野味肉、鹿、磨碎、熟的、平底锅烧烤", "野味肉，麋鹿，里脊肉，精瘦，即食，烧烤", "野味肉，鹿，肩肉，精瘦，3-5磅烤肉，即食，红烧", "野味肉，鹿，里脊，精瘦，1块牛排，即食，烧烤", "野味肉，鹿，里脊肉，精瘦，0.5-1磅烤肉，即食，烧烤"],
Legcal:[222
  , 446
  , 84
  , 77
  , 333
  , 353
  , 146
  , 155
  , 177
  , 166
  , 83
  , 193
  , 199
  , 212
  , 91
  , 345
  , 387
  , 54
  , 43
  , 339
  , 177
  , 650
  , 55
  , 37
  , 30
  , 38
  , 60
  , 63
  , 84
  , 338
  , 55
  , 63
  , 62
  , 98
  , 83
  , 33
  , 108
  , 588
  , 67
  , 123
  , 122
  , 47
  , 144
  , 380
  , 44
  , 79
  , 388
  , 54
  , 28
  , 34
  , 45
  , 29
  , 41
  , 58
  , 44
  , 47
  , 30
  , 43
  , 33
  , 41
  , 66
  , 88
  , 41
  , 53
  , 49
  , 74
  , 62
  , 41
  , 94
  , 58
  , 53
  , 33
  , 116
  , 88
  , 136
  , 128
  , 79
  , 94
  , 45
  , 139
  , 144
  , 88
  , 127
  , 116
  , 105
  , 132
  , 88
  , 140
  , 143
  , 133
  , 88
  , 88
  , 126
  , 110
  , 579
  , 117
  , 115
  , 589
  , 173
  , 588
  
  , 118
  , 116
  , 581
  , 608
  , 589
  , 326
  , 127
  , 578
  , 121
  , 105
  , 471
  , 434
  , 439
  , 372
  , 369
  , 337
  , 331
  , 147
  , 472
  , 76
  , 145
  , 145
  , 221
  , 328
  , 116
  , 154
  , 271
  , 80
  , 118
  , 321
  , 103
  , 126
  , 209
  , 114
  , 138
  , 135
  , 146
  , 133
  , 124
  , 117
  , 129
  , 117
  , 100
  , 149
  , 142
  , 114
  , 164
  , 123
  , 130
  , 219
  , 155
  , 135
  , 219
  , 160
  , 108
  , 102
  , 123
  , 113
  , 124
  , 109
  , 159
  , 205
  , 346
  , 162
  , 155
  , 122
  , 238
  , 145
  , 222
  , 135
  , 213
  , 221
  , 200
  , 230
  , 107
  , 187
  , 144
  , 123
  , 162
  , 123
  , 171
  , 164
  , 106
  , 101
  , 132
  , 140
  , 218
  , 176
  , 210
  , 171
  , 153
  , 34
  , 590
  , 197
  , 97
  , 290
  , 331
  , 47
  , 233
  , 224
 
  , 189
  , 123
  , 290
  , 197
  , 476
  , 151
  , 234
  , 149
  , 94
  , 105
  , 128
  , 329
  , 94
  , 260
  , 142
  , 237
  , 121
  , 333
  , 94
  , 83
  , 91
  , 112
  , 136
  , 339
  , 339
  , 106
  , 132
  , 130
  , 341
  , 118
  , 127
  , 335
  , 114
  , 343
  , 127
  , 129
  , 330
  , 337
  , 124
  , 84
  , 347
  , 123
  , 113
  , 149
  , 140
  , 329
  , 343
  , 337
  , 336
  , 86
  , 143
  , 139
  , 142
  , 333
  , 345
  , 144
  , 114
  , 364
  , 119
  , 341
  , 110
  , 164
  , 112
  , 343
  , 77
  , 344
  , 336
  , 116
  , 117
  , 116
  , 338
  , 79
  , 115
  , 117
  , 71
  , 341
  , 126
  , 351
  , 119
  , 347
  , 117
  , 335
  , 371
  , 343
  , 105
  , 118
  , 343
  , 105
  , 331
  , 593
  , 147
  , 53
  , 436
  , 480
  , 63
  , 409
  , 428
  , 579
  , 591
  , 567
  
  , 563
  , 118
  , 578
  , 257
  , 310
  , 330
  , 589
  , 589
  , 375
  , 271
  , 588
  , 585
  , 121
  , 471
  , 91
  , 70
  , 599
  , 327
  , 40
  , 116
  , 173
  , 61
  , 585
  , 313
  , 60
  , 341
  , 570
  , 347
  , 441
  , 570
  , 451
  , 318
  , 53],
Legm:[103
  , 186
  , 256
  , 122
  , 17
  , 192
  , 122
  , 253
  , 70
  , 246
  , 240
  , 166
  , 275
  , 175
  , 91
  , 192
  , 92
  , 243
  , 243
  , 122
  , 246
  , 31
  , 84
  , 84
  , 243
  , 84
  , 120
  , 243
  , 79
  , 28.35
  , 84
  , 243
  , 84
  , 79
  , 242
  , 243
  , 130
  , 32
  , 120
  , 130
  , 79
  , 243
  , 233
  , 28.35
  , 243
  , 231
  , 28.35
  , 79
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 227
  , 170
  , 243
  , 243
  , 243
  , 122
  , 243
  , 243
  , 170
  , 243
  , 243
  , 243
  , 166
  , 170
  , 177
  , 230
  , 227
  , 170
  , 243
  , 179
  , 177
  , 170
  , 177
  , 171
  , 202
  , 172
  , 170
  , 182
  , 171
  , 15
  , 170
  , 170
  , 182
  , 170
  , 147
  , 171
  , 188
  , 144
  , 172
  , 258

  , 177
  , 196
  , 133
  , 16
  , 258
  , 28.35
  , 177
  , 143
  , 168
  , 180
  , 172
  , 85
  , 85
  , 100
  , 88
  , 122
  , 28.35
  , 172
  , 17
  , 124
  , 80
  , 126
  , 46
  , 28.35
  , 11
  , 51
  , 13
  , 55
  , 171
  , 28.35
  , 92
  , 230
  , 35
  , 55
  , 92
  , 85
  , 85
  , 15
  , 177
  , 177
  , 177
  , 194
  , 15
  , 169
  , 179
  , 198
  , 164
  , 177
  , 185
  , 38
  , 31
  , 92
  , 48
  , 90
  , 92
  , 85
  , 31
  , 72
  , 55
  , 85
  , 45
  , 38
  , 16
  , 156
  , 67
  , 284
  , 71
  , 71
  , 38
  , 71
  , 64
  , 114
  , 71
  , 85
  , 284
  , 64
  , 71
  , 156
  , 55
  , 71
  , 71
  , 85
  , 71
  , 156
  , 71
  , 55
  , 51
  , 67
  , 38
  , 67
  , 362
  , 230
  , 16
  , 144
  , 253
  , 28
  , 140
  , 240
  , 140
  , 168

  , 14
  , 247
  , 85
  , 56
  , 7
  , 225
  , 130
  , 15
  , 262
  , 253
  , 230
  , 197
  , 254
  , 14
  , 259
  , 296
  , 266
  , 184
  , 246
  , 260
  , 240
  , 253
  , 177
  , 184
  , 183
  , 253
  , 172
  , 185
  , 194
  , 177
  , 177
  , 195
  , 262
  , 184
  , 177
  , 177
  , 184
  , 184
  , 177
  , 256
  , 193
  , 177
  , 262
  , 169
  , 182
  , 184
  , 210
  , 208
  , 215
  , 240
  , 171
  , 179
  , 179
  , 202
  , 196
  , 177
  , 262
  , 200
  , 240
  , 150
  , 170
  , 164
  , 256
  , 167
  , 240
  , 210
  , 167
  , 171
  , 171
  , 198
  , 178
  , 241
  , 188
  , 194
  , 256
  , 207
  , 182
  , 140
  , 166
  , 207
  , 177
  , 202
  , 180
  , 196
  , 202
  , 196
  , 205
  , 180
  , 28.35
  , 32
  , 172
  , 255
  , 84
  , 17
  , 120
  , 182
  , 60
  , 147
  , 258
  , 146

  , 146
  , 171
  , 143
  , 25
  , 144
  , 105
  , 144
  , 258
  , 88
  , 28.35
  , 258
  , 28.35
  , 168
  , 172
  , 238
  , 126
  , 144
  , 60
  , 18
  , 11
  , 172
  , 248
  , 146
  , 88
  , 18
  , 197
  , 146
  , 167
  , 85
  , 146
  , 172
  , 63
  , 255],
Leg2:["Carob flour"
, "Soybeans, mature seeds, raw"
, "Beans, kidney, all types, mature seeds, canned"
, "Tofu, okara"
, "Falafel, home-prepared"
, "Lentils, raw"
, "Tofu, hard, prepared with nigari"
, "Beans, baked, home prepared"
, "Veggie burgers or soyburgers, unprepared"
, "Hummus, commercial"
, "Cowpeas, common (blackeyes, crowder, southern), mature seeds, canned with pork"
, "Tempeh"
, "Miso"
, "Natto"
, "Tofu, extra firm, prepared with nigari"
, "Lentils, pink, raw"
, "Chickpea flour (besan)"
, "Soymilk, original and vanilla, unfortified"
, "Soymilk, original and vanilla, with added calcium, vitamins A and D"
, "Soy meal, defatted, raw"
, "Hummus, home prepared"
, "Peanut spread, reduced sugar"
, "MORI-NU, Tofu, silken, soft"
, "MORI-NU, Tofu, silken, lite firm"
, "Vitasoy USA, Vitasoy Light Vanilla Soymilk"
, "MORI-NU, Tofu, silken, lite extra firm"
, "CAMPBELL Soup Company, PACE, Salsa Refried Beans"
, "Soymilk, chocolate, with added calcium, vitamins A and D"
, "Vitasoy USA, Organic Nasoya Firm Tofu"
, "Soy protein isolate"
, "MORI-NU, Tofu, silken, extra firm"
, "Soymilk, chocolate, unfortified"
, "MORI-NU, Tofu, silken, firm"
, "Vitasoy USA, Organic Nasoya Extra Firm Tofu"
, "Refried beans, canned, vegetarian"
, "Soymilk (all flavors), unsweetened, with added calcium, vitamins A and D"
, "CAMPBELL Soup Company, Campbell's Pork and Beans"
, "USDA Commodity, Peanut Butter, smooth"
, "CAMPBELL Soup Company, PACE, Traditional Refried Beans"
, "CAMPBELL Soup Company, Campbell's Brown Sugar And Bacon Flavored Baked Beans"
, "Vitasoy USA, Organic Nasoya Super Firm Cubed Tofu"
, "Vitasoy USA, Vitasoy Orgnaic Classic Original Soymilk"
, "Frijoles rojos volteados (Refried beans, red, canned)"
, "Soy protein isolate, PROTEIN TECHNOLOGIES INTERNATIONAL, ProPlus"
, "Vitasoy USA, Vitasoy Organic Creamy Original Soymilk"
, "Refried beans, canned, fat-free"
, "Soy protein isolate, PROTEIN TECHNOLOGIES INTERNATIONAL, SUPRO"
, "Vitasoy USA, Nasoya Lite Firm Tofu"
, "Soymilk (all flavors), nonfat, with added calcium, vitamins A and D"
, "Soymilk, original and vanilla, light, unsweetened, with added calcium, vitamins A and D"
, "Soymilk (All flavors), enhanced"
, "SILK Light Plain, soymilk"
, "SILK Plain, soymilk"
, "SILK Chocolate, soymilk"
, "Soymilk, chocolate, nonfat, with added calcium, vitamins A and D"
, "Soymilk, chocolate and other flavors, light, with added calcium, vitamins A and D"
, "Soymilk, original and vanilla, light, with added calcium, vitamins A and D"
, "Soymilk (All flavors), lowfat, with added calcium, vitamins A and D"
, "SILK Light Vanilla, soymilk"
, "SILK Vanilla, soymilk"
, "SILK Plain soy yogurt"
, "SILK Vanilla soy yogurt (single serving size)"
, "SILK Plus for Bone Health, soymilk"
, "SILK Very Vanilla, soymilk"
, "SILK Light Chocolate, soymilk"
, "SILK Nog, soymilk"
, "SILK Coffee, soymilk"
, "SILK Plus Fiber, soymilk"
, "SILK Strawberry soy yogurt"
, "SILK Mocha, soymilk"
, "SILK Chai, soymilk"
, "SILK Unsweetened, soymilk"
, "Lupins, mature seeds, cooked, boiled, with salt"
, "SILK Key Lime soy Yogurt"
, "Beans, cranberry (roman), mature seeds, cooked, boiled, with salt"
, "Beans, adzuki, mature seed, cooked, boiled, with salt"
, "SILK Vanilla soy Yogurt (Family size)"
, "SILK Peach soy Yogurt"
, "SILK Plus Omega-3 DHA, soymilk"
, "Beans, white, mature seeds, cooked, boiled, with salt"
, "Beans, yellow, mature seeds, cooked, boiled, with salt"
, "SILK Banana-Strawberry soy Yogurt"
, "Beans, kidney, all types, mature seeds, cooked, boiled, with salt"
, "Cowpeas, common (blackeyes, crowder, southern), mature seeds, cooked, boiled, with salt"
, "Mung beans, mature seeds, cooked, boiled, with salt"
, "Beans, black, mature seeds, cooked, boiled, with salt"
, "SILK Black Cherry soy Yogurt"
, "Beans, navy, mature seeds, cooked, boiled, with salt"
, "Beans, pinto, mature seeds, cooked, boiled, with salt"
, "SILK French Vanilla Creamer"
, "SILK Blueberry soy Yogurt"
, "SILK Raspberry soy yogurt"
, "Lima beans, thin seeded (baby), mature seeds, cooked, boiled, with salt"
, "Broadbeans (fava beans), mature seeds, cooked, boiled, with salt"
, "Peanuts, spanish, oil-roasted, without salt"
, "Cowpeas, catjang, mature seeds, cooked, boiled, with salt"
, "Lima beans, large, mature seeds, cooked, boiled, with salt"
, "Peanuts, valencia, oil-roasted, without salt"
, "Soybeans, mature seeds, cooked, boiled, with salt"
, "Peanut butter, smooth style, without salt"

, "Beans, great northern, mature seeds, cooked, boiled, with salt"
, "Peas, split, mature seeds, cooked, boiled, with salt"
, "Peanuts, all types, oil-roasted, without salt"
, "Peanut butter with omega-3, creamy"
, "Peanut butter, chunk style, without salt"
, "Soy protein isolate, potassium type"
, "Beans, kidney, red, mature seeds, cooked, boiled, with salt"
, "Peanuts, virginia, oil-roasted, without salt"
, "Pigeon peas (red gram), mature seeds, cooked, boiled, with salt"
, "Mungo beans, mature seeds, cooked, boiled, with salt"
, "Soybeans, mature seeds, roasted, no salt added"
, "Soy flour, full-fat, raw, crude protein basis (N x 6.25)"
, "Soy flour, full-fat, roasted, crude protein basis (N x 6.25)"
, "Soy flour, defatted, crude protein basis (N x 6.25)"
, "Soy flour, low-fat, crude protein basis (N x 6.25)"
, "Soy meal, defatted, raw, crude protein basis (N x 6.25)"
, "Soy protein concentrate, produced by acid wash"
, "Winged beans, mature seeds, cooked, boiled, with salt"
, "Tofu, dried-frozen (koyadofu), prepared with calcium sulfate"
, "Tofu, raw, regular, prepared with calcium sulfate"
, "LOMA LINDA Tender Rounds with Gravy, canned, unprepared"
, "Tofu, raw, firm, prepared with calcium sulfate"
, "LOMA LINDA Little Links, canned, unprepared"
, "Soy protein concentrate, crude protein basis (N x 6.25), produced by acid wash"
, "Tofu, salted and fermented (fuyu), prepared with calcium sulfate"
, "LOMA LINDA Low Fat Big Franks, canned, unprepared"
, "Tofu, fried, prepared with calcium sulfate"
, "WORTHINGTON Diced Chik, canned, unprepared"
, "Yardlong beans, mature seeds, cooked, boiled, with salt"
, "Soy protein isolate, potassium type, crude protein basis"
, "WORTHINGTON Choplets, canned, unprepared"
, "WORTHINGTON Chili, canned, unprepared"
, "LOMA LINDA Linketts, canned, unprepared"
, "LOMA LINDA Vege-Burger, canned, unprepared"
, "LOMA LINDA Swiss Stake with Gravy, canned, unprepared"
, "LOMA LINDA Tender Bits, canned, unprepared"
, "LOMA LINDA Redi-Burger, canned, unprepared"
, "SILK Hazelnut Creamer"
, "Beans, kidney, california red, mature seeds, cooked, boiled, with salt"
, "Mothbeans, mature seeds, cooked, boiled, with salt"
, "Beans, french, mature seeds, cooked, boiled, with salt"
, "Hyacinth beans, mature seeds, cooked, boiled, with salt"
, "SILK Original Creamer"
, "Beans, pink, mature seeds, cooked, boiled, with salt"
, "Beans, small white, mature seeds, cooked, boiled, with salt"
, "Lentils, mature seeds, cooked, boiled, with salt"
, "Chickpeas (garbanzo beans, bengal gram), mature seeds, cooked, boiled, with salt"
, "Beans, kidney, royal red, mature seeds, cooked, boiled with salt"
, "Beans, black turtle soup, mature seeds, cooked, boiled, with salt"
, "WORTHINGTON Saucettes, canned, unprepared"
, "WORTHINGTON Veja-Links, canned, unprepared"
, "WORTHINGTON Prime Stakes, canned, unprepared"
, "WORTHINGTON Super Links, canned, unprepared"
, "WORTHINGTON FriChik Original, canned, unprepared"
, "WORTHINGTON Multigrain Cutlets, canned, unprepared"
, "WORTHINGTON Low Fat Fri Chik, canned, unprepared"
, "WORTHINGTON Low Fat Veja-Links, canned, unprepared"
, "WORTHINGTON Vegetable Steaks, canned, unprepared"
, "WORTHINGTON Vegetarian Burger, canned, unprepared"
, "WORTHINGTON Vegetable Skallops, canned, unprepared"
, "MORNINGSTAR FARMS Veggie Breakfast Sausage Links, frozen, unprepared"
, "MORNINGSTAR FARMS Breakfast Pattie made with Organic Soy, frozen, unprepared"
, "MORNINGSTAR FARMS Veggie Breakfast Bacon Strips, frozen, unprepared"
, "GARDENBURGER, Gourmet Hula Steak"
, "MORNINGSTAR FARMS Asian Veggie Patties, frozen, unprepared"
, "MORNINGSTAR FARMS Veggie Sweet and Sour Chik'n, frozen, unprepared"
, "MORNINGSTAR FARMS Grillers Prime, frozen, unprepared"
, "GARDENBURGER, Original"
, "MORNINGSTAR FARMS Maple Flavored Veggie Sausage Patties, frozen, unprepared"
, "GARDENBURGER, Veggie Medley Burger"
, "MORNINGSTAR FARMS Grillers Original, frozen, unprepared"
, "MORNINGSTAR FARMS Grillers Quarter Pound Veggie Burger, frozen, unprepared"
, "GARDENBURGER, Herb Crusted Cutlet"
, "MORNINGSTAR FARMS MeatFree Buffalo Wings, frozen, unprepared"
, "MORNINGSTAR FARMS Lasagna with Veggie Sausage, frozen, unpreapred"
, "MORNINGSTAR FARMS Veggie Italian Style Sausage, frozen, unprepared"
, "GARDENBURGER, California Burger"
, "GARDENBURGER, Gourmet Baja Steak"
, "MORNINGSTAR FARMS Sausage Style Recipe Crumbles, frozen, unprepared"
, "GARDENBURGER, Flame Grilled Burger"
, "GARDENBURGER, Homestyle Classic Veggie Burger"
, "MORNINGSTAR FARMS Meal Starters Chik'n Strips, frozen, unprepared"
, "GARDENBURGER, Garden Vegan"
, "GARDENBURGER, Gourmet Fire Dragon Steak"
, "MORNINGSTAR FARMS Grillers Vegan, frozen, unprepared"
, "MORNINGSTAR FARMS Grillers Burger Style Recipe Crumbles, frozen, unprepared"
, "LOMA LINDA Big Franks, canned, unprepared"
, "MORNINGSTAR FARMS Garden Veggie Patties, frozen, unprepared"
, "MORNINGSTAR FARMS Veggie Breakfast Sausage Patties, frozen, unprepared"
, "MORNINGSTAR FARMS Spicy Black Bean Burger, frozen, unprepared"
, "GREEN GIANT, HARVEST BURGER, Original Flavor, All Vegetable Protein Patties, frozen"
, "Bean beverage"
, "Peanut butter, reduced sodium"
, "Meatballs, meatless"
, "Beans, chili, barbecue, ranch style, cooked"
, "Fish sticks, meatless"
, "Vermicelli, made from soy"
, "Beans, liquid from stewed kidney beans"
, "Frankfurter, meatless"
, "Chicken, meatless"

, "Luncheon slices, meatless"
, "Vegetarian stew"
, "Vegetarian fillets"
, "Vegetarian meatloaf or patties"
, "Bacon bits, meatless"
, "Soybean, curd cheese"
, "Chicken, meatless, breaded, fried"
, "Sandwich spread, meatless"
, "Tofu yogurt"
, "Baked beans, canned, no salt added"
, "Beans, adzuki, mature seeds, cooked, boiled, without salt"
, "Beans, adzuki, mature seeds, raw"
, "Beans, baked, canned, plain or vegetarian"
, "Beans, adzuki, yokan, mature seeds"
, "Beans, baked, canned, with franks"
, "Beans, adzuki, mature seeds, canned, sweetened"
, "Beans, baked, canned, with beef"
, "Beans, kidney, all types, mature seeds, raw"
, "Beans, baked, canned, with pork and tomato sauce"
, "Beans, cranberry (roman), mature seeds, canned"
, "Beans, black turtle soup, mature seeds, canned"
, "Beans, baked, canned, with pork and sweet sauce"
, "Beans, cranberry (roman), mature seeds, cooked, boiled, without salt"
, "Beans, black turtle soup, mature seeds, raw"
, "Beans, great northern, mature seeds, raw"
, "Beans, baked, canned, with pork"
, "Beans, black, mature seeds, cooked, boiled, without salt"
, "Beans, black turtle soup, mature seeds, cooked, boiled, without salt"
, "Beans, black, mature seeds, raw"
, "Beans, great northern, mature seeds, cooked, boiled, without salt"
, "Beans, kidney, red, mature seeds, cooked, boiled, without salt"
, "Beans, cranberry (roman), mature seeds, raw"
, "Beans, great northern, mature seeds, canned"
, "Beans, french, mature seeds, raw"
, "Beans, kidney, all types, mature seeds, cooked, boiled, without salt"
, "Beans, french, mature seeds, cooked, boiled, without salt"
, "Beans, kidney, california red, mature seeds, raw"
, "Beans, kidney, red, mature seeds, raw"
, "Beans, kidney, california red, mature seeds, cooked, boiled, without salt"
, "Beans, kidney, red, mature seeds, canned"
, "Beans, pinto, mature seeds, raw"
, "Beans, kidney, royal red, mature seeds, cooked, boiled, without salt"
, "Beans, navy, mature seeds, canned"
, "Beans, pink, mature seeds, cooked, boiled, without salt"
, "Beans, navy, mature seeds, cooked, boiled, without salt"
, "Beans, kidney, royal red, mature seeds, raw"
, "Beans, pink, mature seeds, raw"
, "Beans, navy, mature seeds, raw"
, "Beans, small white, mature seeds, raw"
, "Beans, pinto, mature seeds, canned"
, "Beans, pinto, mature seeds, cooked, boiled, without salt"
, "Beans, white, mature seeds, cooked, boiled, without salt"
, "Beans, small white, mature seeds, cooked, boiled, without salt"
, "Beans, white, mature seeds, raw"
, "Beans, yellow, mature seeds, raw"
, "Beans, yellow, mature seeds, cooked, boiled, without salt"
, "Beans, white, mature seeds, canned"
, "Chickpeas (garbanzo beans, bengal gram), mature seeds, raw"
, "Chickpeas (garbanzo beans, bengal gram), mature seeds, canned"
, "Broadbeans (fava beans), mature seeds, raw"
, "Broadbeans (fava beans), mature seeds, cooked, boiled, without salt"
, "Chickpeas (garbanzo beans, bengal gram), mature seeds, cooked, boiled, without salt"
, "Chili with beans, canned"
, "Cowpeas, catjang, mature seeds, raw"
, "Cowpeas, common (blackeyes, crowder, southern), mature seeds, canned, plain"
, "Hyacinth beans, mature seeds, raw"
, "Cowpeas, common (blackeyes, crowder, southern), mature seeds, raw"
, "Cowpeas, common (blackeyes, crowder, southern), mature seeds, cooked, boiled, without salt"
, "Cowpeas, catjang, mature seeds, cooked, boiled, without salt"
, "Lentils, mature seeds, cooked, boiled, without salt"
, "Lima beans, large, mature seeds, raw"
, "Lima beans, large, mature seeds, canned"
, "Lima beans, large, mature seeds, cooked, boiled, without salt"
, "Hyacinth beans, mature seeds, cooked, boiled, without salt"
, "Broadbeans (fava beans), mature seeds, canned"
, "Mungo beans, mature seeds, raw"
, "Lima beans, thin seeded (baby), mature seeds, cooked, boiled, without salt"
, "Noodles, chinese, cellophane or long rice (mung beans), dehydrated"
, "Lupins, mature seeds, cooked, boiled, without salt"
, "Mung beans, mature seeds, raw"
, "Mothbeans, mature seeds, cooked, boiled, without salt"
, "Lima beans, thin seeded (baby), mature seeds, raw"
, "Lupins, mature seeds, raw"
, "Mothbeans, mature seeds, raw"
, "Mung beans, mature seeds, cooked, boiled, without salt"
, "Peas, split, mature seeds, cooked, boiled, without salt"
, "Pigeon peas (red gram), mature seeds, raw"
, "Mungo beans, mature seeds, cooked, boiled, without salt"
, "Soy protein concentrate, produced by alcohol extraction"
, "Peanut butter, chunky, vitamin and mineral fortified"
, "Winged beans, mature seeds, cooked, boiled, without salt"
, "Soy sauce made from soy and wheat (shoyu)"
, "Soy flour, full-fat, raw"
, "Tofu, dried-frozen (koyadofu)"
, "CAMPBELL Soup Company, PACE, Spicy Jalapeno Refried Beans"
, "Winged beans, mature seeds, raw"
, "Peanut flour, low fat"
, "Peanuts, spanish, oil-roasted, with salt"
, "Peanut butter, smooth, vitamin and mineral fortified"
, "Peanuts, all types, raw"

, "Peanuts, virginia, raw"
, "Yardlong beans, mature seeds, cooked, boiled, without salt"
, "Peanuts, virginia, oil-roasted, with salt"
, "Sausage, meatless"
, "Bacon, meatless"
, "Soy flour, defatted"
, "Peanuts, valencia, oil-roasted, with salt"
, "Peanut butter, chunk style, with salt"
, "Soy flour, low-fat"
, "Tofu, fried"
, "Peanut butter, smooth style, with salt"
, "Peanuts, all types, dry-roasted, with salt"
, "Pigeon peas (red gram), mature seeds, cooked, boiled, without salt"
, "Soybeans, mature seeds, roasted, salted"
, "Refried beans, canned, traditional style (includes USDA commodity)"
, "Tofu, firm, prepared with calcium sulfate and magnesium chloride (nigari)"
, "Peanuts, all types, oil-roasted, with salt"
, "Peanut flour, defatted"
, "Soy sauce made from hydrolyzed vegetable protein"
, "Tofu, salted and fermented (fuyu)"
, "Soybeans, mature cooked, boiled, without salt"
, "Tofu, soft, prepared with calcium sulfate and magnesium chloride (nigari)"
, "Peanuts, all types, dry-roasted, without salt"
, "Meat extender"
, "Soy sauce made from soy (tamari)"
, "Peas, split, mature seeds, raw"
, "Peanuts, spanish, raw"
, "Yardlong beans, mature seeds, raw"
, "Soy flour, full-fat, roasted"
, "Peanuts, valencia, raw"
, "Soybeans, mature seeds, dry roasted"
, "Peanuts, all types, cooked, boiled, with salt"
, "Soy sauce made from soy and wheat (shoyu), low sodium"],
Leg:[ "大豆、成熟种子、生的", "角豆粉", "豆腐", "豆腐皮", "黑豆", "豌豆", "扁豆，生的", "鹰嘴豆泥，商用", "豆子、烘焙、自制", "豇豆，成熟种子", "纳豆", "豆腐干", "", "红豆", "鹰嘴豆粉", "扁豆、粉色、生的", "豆奶，原味和香草味，未强化", "豆奶、原味豆奶和香草豆奶，添加钙、维生素A和D", "豆粕，脱脂，生的", "素食汉堡或大豆汉堡，未经准备", "鹰嘴豆泥，自制", "花生酱，还原糖", "豆腐，丝滑，低硬度", "豆腐，丝滑，软", "豆腐，丝滑，超硬", "美国维他奶，维他奶轻香草豆奶", "美国维他奶有机拿索亚豆腐", "豆奶、巧克力、添加钙、维生素A和D", "大豆分离蛋白", "金宝汤公司，佩斯，莎莎炸豆", "豆腐，丝滑，特硬", "豆奶、巧克力、未强化", "冷冻豆、罐装、素食", "美国农业部商品，花生酱，光滑", "金宝汤公司，金宝猪肉和豆子", "有机特硬豆腐", "森奴豆腐丝硬", "豆奶（所有口味），未加糖，添加钙、维生素A和D", "金宝汤公司，金宝红糖培根烤豆", "金宝汤公司，佩斯，传统炸豆", "炸豆子、红色、罐装", "冷冻豆、罐装、无脂肪", "美国维他奶，维他奶组织经典原创豆奶", "美国维他奶，维他奶有机奶油原味豆奶", "大豆分离蛋白，国际蛋白质技术公司", "有机Nasoya超级硬豆腐", "大豆分离蛋白", "美国维他奶，Nasoya Lite硬豆腐", "豆奶，原味和香草味，清淡，不加糖，添加钙、维生素A和D", "豆奶（所有口味）、脱脂、添加钙、维生素A和D", "豆奶（所有口味），强化", "豆奶、巧克力和其他口味、清淡、添加钙、维生素A和D", "丝巧克力豆奶", "豆奶、巧克力、脱脂、添加钙、维生素A和D", "丝素豆奶", "丝淡素豆奶", "丝香草豆奶", "豆奶（所有口味）、低脂、添加钙、维生素A和D", "丝光香草豆奶", "豆奶，原味和香草味，清淡，添加钙、维生素A和D", "丝巧克力、豆奶", "丝素大豆酸奶", "蚕丝酒、豆奶", "丝香草大豆酸奶（单份）", "丝味香草豆奶", "丝摩卡豆奶", "丝咖啡、豆奶", "丝草莓大豆酸奶", "生丝保健品，豆奶", "丝加纤维，豆奶", "丝斋豆奶", "豆类，小豆，成熟种子，即食，煮熟，含盐", "丝未加糖豆奶", "羽扇豆、成熟种子、熟的、煮熟、含盐", "酸橙大豆酸奶", "豆类，蔓越莓（罗马），成熟种子，即食，煮熟，含盐", "丝香草大豆酸奶（家庭大小）", "豆类，白色，成熟种子，即食，煮熟，含盐", "豆奶", "丝桃豆奶", "豆类，黑色，成熟种子，即食，煮熟，含盐", "豆类、黄色、成熟种子、熟的、煮熟、含盐", "丝黑樱桃大豆酸奶", "丝香蕉草莓大豆酸奶", "豆类，肾，所有类型，成熟种子，即食，煮熟，含盐", "绿豆、成熟种子、熟的、煮熟、含盐", "豇豆，普通（黑眼豆），成熟种子，即食，煮熟，含盐", "豆类，成熟种子，即食，煮熟，含盐", "法式香草奶油丝", "豆类、平托豆、成熟种子、熟的、煮熟、含盐", "丝蓝莓大豆酸奶", "利马豆、薄籽（婴儿）、成熟种子、熟的、煮熟、含盐", "花生、瓦伦西亚、油烤、无盐", "蚕豆（蚕豆），成熟种子，即食，煮熟，含盐", "花生、西班牙花生、油烤、无盐", "豇豆、豇豆、成熟种子、熟的、煮熟、含盐", "丝树莓大豆酸奶", "利马豆，大，成熟种子，即食，煮熟，含盐", "大豆、成熟种子、熟的、煮熟、含盐", "花生酱，光滑型，无盐","花生，所有类型，油烤，无盐", "豆类，大北，成熟种子，即食，煮熟，含盐", "花生酱，块状，无盐", "大豆分离蛋白，钾型", "花生酱，奶油味", "豌豆、裂开的、成熟种子、熟的、煮熟、含盐", "芒果豆、成熟种子、熟的、煮熟、含盐", "花生，弗吉尼亚，油烤，无盐", "豆类，红色，成熟种子，即食，煮熟，含盐", "木豆（红豆），成熟种子，即食，煮熟，含盐", "豆粉，全脂，烘焙，粗蛋白基", "大豆、成熟种子、烘焙、不添加盐", "大豆粉，全脂，生，粗蛋白基", "低脂粗蛋白豆粉", "脱脂粗蛋白豆粉", "豆粕，脱脂，生，粗蛋白基", "四季豆、成熟种子、熟的、煮熟、含盐", "酸洗生产大豆浓缩蛋白", "豆腐、生的、普通的、用硫酸钙制备", "豆腐、冷冻干豆腐", "洛玛琳达肉汁嫩圆，罐装，未经料理", "大豆浓缩蛋白", "青豆，罐装，未经准备", "原味豆粉", "洛玛琳达低脂荷兰豆，罐装", "豆腐，生的，硬的，用硫酸钙制备", "豆腐、油炸、用硫酸钙制作", "黄豆、罐装、未经料理", "大豆分离蛋白粉，钾型，粗蛋白基", "雅德龙豆、成熟种子、熟的、煮熟、含盐", "洛玛琳达荷兰豆，罐装，未经准备", "沃辛顿小排，罐装，未经准备", "油豆腐", "鱼豆腐", "洛玛琳达素食汉堡，罐装，未经准备", "香辣豆干汉堡，罐装，未经准备", "洛玛琳达豆粉，罐装，未经料理", "蚕豆、成熟种子、熟的、煮熟、含盐", "红豆，成熟种子，即食，煮熟，含盐", "绿豆", "纳豆拔丝", "豆类，法式，成熟种子，即食，煮熟，含盐", "豆类，粉色，成熟种子，即食，煮熟，含盐", "扁豆、成熟种子、熟的、煮熟、含盐", "豆类，小白，成熟种子，即食，煮熟，含盐", "红豆，成熟种子，即食，盐煮", "风信子豆、成熟种子、熟的、煮熟、含盐", "沃辛顿豆酱，罐装，未经准备", "鹰嘴豆（鹰嘴豆，孟加拉克），成熟种子，即食，煮熟，含盐", "豆类，成熟种子，即食，煮熟，含盐", "沃辛顿优质黄豆，罐装，未经准备", "沃辛顿杂粮豆，罐装，未经料理", "沃辛顿炸薯条原味、罐装、未经料理", "沃辛顿低脂炸薯条，罐装，未经料理", "沃辛顿豆粉、罐装", "沃辛顿腌制豆，罐装，未经准备", "沃辛顿蔬菜，罐装", "沃辛顿素食汉堡，罐装", "沃辛顿蔬菜牛排，罐装", "沃辛顿低脂豆粉，罐装，未经准备", "园丁汉堡", "晨星农场早餐肉饼，有机大豆制成，冷冻，未经准备", "晨星农场素食早餐香肠，冷冻，未经准备", "晨星农场亚洲蔬菜馅饼，冷冻，未经准备", "晨星农场蔬菜糖醋韭菜馅饼，冷冻，未经准备", "晨星农场素食早餐培根条，冷冻，未经准备", "园丁汉堡，素食混合汉堡", "晨星农场烤肉店优质豆饼、冷冻、未经准备", "晨星农场枫味素食香肠馅饼，冷冻，未经准备", "园丁汉堡，原味", "晨星农场豆饼，冷冻，未经准备", "园丁汉堡，香草脆皮", "晨星农场烤架原味、冷冻、未经准备", "晨星农场素食意式香肠，冷冻，未经准备", "晨星农场烤宽面条配素食香肠，冷冻，未经料理", "加州园丁汉堡", "园丁汉堡，美味的巴哈牛排", "晨星农场烧烤四分之一磅素食汉堡，冷冻，未经准备", "园丁汉堡，火焰烤汉堡", "晨星农场香肠式配方面包，冷冻，未经准备", "园丁汉堡", "园丁汉堡，家庭式经典素食汉堡", "晨星农场膳食起芝麻条，冷冻，未经准备", "晨星农场烤肉店素食、冷冻、未经准备", "晨星农场烧烤汉堡式配方面包，冷冻，未经准备", "园丁汉堡，美食火龙牛排", "洛玛琳达大弗兰克斯，罐装，未经准备", "晨星农场素食早餐香肠馅饼，冷冻，未经准备", "晨星农场花园蔬菜馅饼，冷冻，未经准备", "晨星农场辣黑豆汉堡，冷冻，未经准备", "花生酱，低钠", "豆干", "豆子、辣椒、烧烤、牧场式、熟的", "豆饮料", "鱼棒，无肉", "绿巨人，丰收汉堡，原味，全植物蛋白肉饼，冷冻", "粉丝，由大豆制成", "鸡肉，豆制", "法兰克福豆饼，无肉", "豆子，炖芸豆汁","午餐切片，无肉", "素食肉饼或肉饼", "素食炖菜", "素食鱼片", "培根块，无肉", "鸡肉、无肉、面包、油炸", "三明治酱，无肉", "豆腐酸奶", "大豆、凝乳干酪", "烤豆、罐装、不加盐", "豆类，小豆，约坎，成熟种子", "豆类，小豆，成熟种子，生", "豆类、烘焙、罐装、含法兰克", "豆类、烘焙、罐装、原味或素食", "豆类，小豆，成熟种子，即食，煮熟，无盐", "豆类，小豆，成熟种子，罐装，加糖", "豆类，蔓越莓（罗马），成熟种子，罐装", "豆类，肾，所有类型，成熟种子，生", "豆类、烘焙、罐装、含牛肉", "豆类、烘焙、罐装、猪肉和番茄酱", "豆类、烘焙、罐装、含猪肉", "豆子成熟种子、生的", "豆类、烘焙、罐装", "豆类，大北，成熟种子，生", "豆类，乌龟汤，成熟种子，罐装", "豆类，蔓越莓（罗马），成熟种子，即食，煮熟，无盐", "豆类，黑色，成熟种子，生", "豆类，大北，成熟种子，即食，煮熟，无盐", "豆类，黑色，成熟种子，即食，煮熟，无盐", "豆类，成熟种子，即食，煮熟，无盐", "豆类，法式，成熟种子，即食，煮熟，无盐", "豆类，法式，成熟种子，生", "豆类、红色、成熟种子、熟的、煮熟、无盐", "豆类，大豆，成熟种子，罐装", "豆类，红色，成熟种子，生", "豆类，所有类型，成熟种子，即食，煮熟，无盐", "豆类，蔓越莓（罗马），成熟种子，生", "豆类，青豆，红色，成熟种子，罐装", "豆类，黑豆，成熟种子，即食，煮熟，无盐", "豆类，红豆，加州红，成熟种子，生", "豆类，皇家红豆，成熟种子，即食，煮熟，无盐", "豆类，青豆，成熟种子，即食，煮熟，无盐", "豆类、绿豆，成熟种子，即食，煮熟，无盐", "豆类，荷兰豆，成熟种子，生", "豆类、平托豆、成熟种子、生的", "豆类、平托豆、成熟种子、罐装", "豆类，海军蓝，成熟种子，生", "豆类，黑豆，成熟种子，生", "豆类，海军蓝，成熟种子，罐装", "豆类，小白，成熟种子，生", "豆类，白色，成熟种子，即食，煮熟，无盐", "豆类、黄色、成熟种子、生的", "豆类、黄色、成熟种子、熟的、煮熟、无盐", "豆类，白色，成熟种子，生", "豆类、平托豆、成熟种子、熟的、煮熟、无盐", "豆类，小白，成熟种子，即食，煮熟，无盐", "蚕豆（蚕豆），成熟种子，生", "豆类，白色，成熟种子，罐装", "鹰嘴豆（鹰嘴豆，孟加拉克），成熟种子，罐装", "鹰嘴豆（鹰嘴豆，孟加拉克），成熟种子，生", "风信子豆、成熟种子、生的", "鹰嘴豆（鹰嘴豆，孟加拉克），成熟种子，即食，煮熟，无盐", "豇豆、豇豆、成熟种子、生的", "豆瓣辣椒，罐装", "豇豆，普通（黑眼豆，crowder，南部），成熟种子，罐装，普通", "豇豆、豇豆、成熟种子、熟的、煮熟、无盐", "豇豆，普通（黑眼豆，crowder，南部），成熟种子，即食，煮熟，无盐", "蚕豆（蚕豆），成熟种子，即食，煮熟，无盐", "豇豆，普通（黑眼豆，豇豆，南部），成熟种子，生", "扁豆、成熟种子、熟的、煮熟、无盐", "利马豆，大，成熟种子，即食，煮熟，无盐", "风信子豆、成熟种子、熟的、煮熟、无盐", "利马豆，大，成熟种子，罐装", "芒果豆、成熟种子、生的", "利马豆，大，成熟种子，生", "面条，中国面，脱水", "利马豆、成熟种子、熟的、煮熟、无盐", "绿豆、成熟种子、生的", "羽扇豆、成熟种子、熟的、煮熟、无盐", "蚕豆（蚕豆），成熟种子，罐装", "蚕豆、成熟种子、生的", "木豆（红豆），成熟种子，生", "蚕豆、成熟种子、熟的、煮熟、无盐", "利马豆，薄籽（婴儿），成熟种子，生", "羽扇豆、成熟种子、生的", "绿豆、成熟种子、熟的、煮熟、无盐", "芒果豆、成熟种子、熟的、煮熟、无盐", "豌豆、裂开的、成熟种子、熟的、煮熟、无盐", "花生酱，块状，维生素和矿物质强化", "醇提大豆浓缩蛋白", "金宝汤公司，佩斯，辣墨西哥辣豆角", "四季豆、成熟种子、生的", "豆腐，冷冻干（koyadofu）", "大豆和小麦制成的酱油（shoyu）", "低脂花生粉", "花生、西班牙花生、油烤、含盐", "四季豆、成熟种子、熟的、煮熟、无盐", "豆粉、全脂、生的", "花生、所有类型、生的", "花生酱，光滑，维生素和矿物质强化","香肠，无肉", "脱脂豆粉", "花生、弗吉尼亚、生的", "花生、弗吉尼亚、油烤、含盐", "雅德龙豆、成熟种子、熟的、煮熟、无盐", "培根，无肉", "花生、瓦伦西亚、油烤、含盐", "低脂豆粉", "豆腐，油炸", "花生酱，块状，含盐", "炸豆、罐装、传统风格（包括美国农业部商品）", "豆腐，硬豆腐，用硫酸钙和氯化镁（nigari）制成", "脱脂花生粉", "花生酱，光滑型，含盐", "花生，所有类型，干烤，含盐", "水解植物蛋白酱油", "花生，所有类型，油烤，含盐", "木豆（红豆），成熟种子，即食，煮熟，无盐", "大豆、成熟种子、烘焙、腌制", "咸发酵豆腐（扶余）", "黄豆干，辣味", "花生，所有类型，干烤，无盐", "黄豆、熟的、煮熟、无盐", "酱油（tamari）", "雅德龙豆、成熟种子、生的", "花生、西班牙花生、生的", "豌豆、裂开的、成熟种子、生的", "花生、瓦伦西亚、生的", "豆粉、全脂、烤熟", "软豆腐，用硫酸钙和氯化镁（nigari）制成", "大豆、成熟种子、干烤", "花生、所有类型、熟的、煮熟、含盐", "低钠大豆小麦酱油"
],
Nutcal:[168
  , 490
  , 573
  , 332
  , 517
  , 565
  , 559
  , 382
  , 332
  , 574
  , 367
  , 342
  , 567
  , 359
  , 367
  , 191
  , 217
  , 333
  , 592
  , 584
  , 617
  , 509
  , 567
  , 326
  , 590
  , 595
  , 619
  , 501
  , 458
  , 607
  , 582
  , 387
  , 612
  , 576
  , 574
  , 553
  , 656
  , 587
  , 363
  , 224
  , 196
  , 213
  , 153
  , 374
  , 369
  , 239
  , 580
  , 330
  , 592
  , 660
  , 456
  , 357
  , 443
  , 230
  , 354
  , 131
  , 197
  , 629
  , 19
  , 657
  , 111
  , 182
  , 348
  , 718
  , 718
  , 646
  , 595
  , 594
  , 719
  , 586
  , 614
  , 629
  , 526
  , 582
  , 567
  , 501
  , 562
  , 615
  , 715
  , 567
  , 617
  , 202
  , 318
  , 245
  , 619
  , 360
  , 557
  , 691
  , 710
  , 89
  , 594
  , 647
  , 506
  , 570
  , 607
  , 631
  , 622
  , 618
  , 207
  , 595

  , 154
  , 574
  , 56
  , 446
  , 581
  , 673
  , 592
  , 619
  , 684
  , 617
  , 201
  , 617
  , 607
  , 594
  , 587
  , 710
  , 446
  , 574
  , 715
  , 614
  , 615
  , 716
  , 592
  , 564
  , 575
  , 628
  , 534
  , 654],
Nutm:[28.35
  , 28.35
  , 144
  , 32
  , 28.35
  , 28.35
  , 129
  , 28.35
  , 28.35
  , 118
  , 160
  , 28.35
  , 128
  , 94
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 135
  , 46
  , 16
  , 28.35
  , 28.35
  , 64
  , 145
  , 138
  , 134
  , 28.35
  , 227
  , 157
  , 128
  , 28.35
  , 120
  , 28.35
  , 137
  , 28.35
  , 133
  , 16
  , 28.35
  , 28.35
  , 28.35
  , 145
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 129
  , 240
  , 28.35
  , 28.35
  , 85
  , 296
  , 77
  , 240
  , 80
  , 28.35
  , 226
  , 28.35
  , 240
  , 120
  , 155
  , 28.35
  , 28.35
  , 134
  , 132
  , 28.35
  , 15
  , 144
  , 120
  , 16
  , 250
  , 28.35
  , 28.35
  , 128
  , 123
  , 93
  , 123
  , 144
  , 110
  , 128
  , 142
  , 240
  , 74
  , 143
  , 28.35
  , 155
  , 108
  , 109
  , 28.35
  , 28.35
  , 137
  , 28.35
  , 149
  , 15
  , 14
  , 150
  , 28.35
  , 125
  , 28.35
  , 138

  , 28.35
  , 118
  , 28.35
  , 64
  , 129
  , 135
  , 135
  , 134
  , 28.35
  , 16
  , 28.35
  , 142
  , 157
  , 137
  , 16
  , 28.35
  , 64
  , 137
  , 110
  , 250
  , 144
  , 132
  , 15
  , 123
  , 95
  , 115
  , 168
  , 117],
Nut:["种子，奇亚种子，干燥", "种子，芝麻籽，整粒，干的", "种子，面包果种子，煮熟", "种子、莲子、干的", "种子，红花籽仁，干燥", "种子、南瓜和南瓜籽仁、干的", "种子、芝麻、全麦、烤熟和烤熟", "种子、棉籽粉、低脂（无腺体）", "种子、芝麻粉、部分脱脂", "种子、南瓜和南瓜籽仁、烤熟、无盐", "种子，面包树种子，干燥", "种子，红花籽粕，部分脱脂", "种子，芝麻仁，烤，不加盐（去皮）", "种子、芝麻粉、低脂", "种子，葵花籽仁，油烤，无盐", "种子、面包果种子、生的", "种子，葵花籽仁，干燥", "种子，棉籽粉，部分脱脂（无腺体）", "种子，面包树种子，生", "种子，棉籽粕，部分脱脂（无腺体）", "种子、芝麻粉、部分脱脂", "种子、葵花籽黄油、无盐", "种子，葵花籽粉，部分脱脂", "坚果、杏仁、干烤、不加盐", "种子，葵花籽仁，烤，无盐", "坚果、杏仁、油烤、不加盐", "坚果、橡子粉、全脂", "坚果、橡子、干的", "坚果、杏仁酱", "坚果、杏仁、漂白", "坚果，黄油坚果，干的", "坚果、橡子、生的", "坚果、山毛榉、干的", "坚果、腰果、干烤、不加盐", "坚果、腰果、生的", "种子，葵花籽仁，干烤，无盐", "坚果、巴西坚果、干的、未经漂白的", "坚果、栗子、中国坚果、干的", "坚果、栗子、中国坚果、生的", "坚果、腰果酱、原味、无盐", "坚果，栗子，欧洲坚果，干的，无皮", "坚果、栗子、中国坚果、烤熟", "坚果、栗子、中国坚果、煮熟和蒸熟", "坚果、栗子、欧洲坚果、生的、去皮", "坚果、椰子奶油、生的（磨碎肉制成的液体）", "坚果、栗子、欧洲坚果、干的、去皮", "坚果、腰果、油烤、不加盐", "坚果、栗子、欧洲坚果、生的、无皮", "坚果、椰肉、干燥（干燥）、烤熟", "坚果、椰肉、干燥（干燥）、未加糖", "坚果、椰肉、干燥（干燥）、增甜、片状、罐装", "坚果、椰奶、生的（用磨碎的肉和水表示的液体）", "坚果、栗子、欧洲坚果、煮熟和蒸制", "坚果、椰肉、生的", "坚果、椰肉、干燥（干燥）、增甜、片状、包装", "坚果、椰子奶油、罐装、加糖", "坚果、榛子或榛子、漂白", "坚果、椰子水（椰子汁）", "坚果、山核桃仁、干的", "坚果、椰奶、罐装", "坚果、银杏坚果、干的", "坚果，澳洲坚果，干烤，不加盐", "种子，芝麻酱，塔希尼，来自烤和烤的果仁（最常见类型）", "坚果、杏仁、蜂蜜烘焙、未经烘焙", "坚果、榛子或榛子、干烤、不加盐", "坚果、银杏坚果、生的", "坚果，澳洲坚果，生的", "坚果、银杏坚果、罐装", "坚果、菌毛、干的", "种子、芝麻酱、浆糊", "种子、芝麻粉、高脂肪", "坚果、杏仁酱、原味、无盐", "坚果、开心果、干烤、不加盐", "坚果，松子，松子，干的", "种子，葵花籽仁，干烤，添加盐", "坚果、椰肉、干燥（干燥）、增甜、切碎", "坚果、混合坚果、油烤、不含花生、不含盐", "坚果、开心果、生的", "坚果、山核桃、油烤、不加盐", "种子、芝麻仁、烤熟、添加盐（去皮）", "坚果、混合坚果、油烤、带花生、不加盐", "种子，剑尾草种子，整粒，干燥", "坚果、栗子、日本坚果、干的", "坚果、椰奶、冷冻（用磨碎的肉和水表示的液体）", "坚果、配方、小麦基、调味、澳洲坚果味、无盐", "坚果、栗子、欧式、烤熟", "坚果、山核桃、干烤、不加盐", "坚果，山核桃", "种子，西瓜籽仁，干的", "种子、莲子、生的", "坚果、混合坚果、干烤、带花生、不加盐", "坚果、配方、小麦基、除澳洲坚果外的所有风味、无盐", "坚果、核桃、黑的、干的", "种子，芝麻酱，塔希尼，来自未烘烤的果仁（未经化学去除的种皮）", "种子、棉籽仁、烤熟（无腺体）", "种子、芝麻酱、塔希尼、生的和磨碎的核仁", "种子，芝麻仁，干燥（去皮）", "坚果，配方，小麦基，未加香料，添加盐", "种子、面包果种子、烤熟", "坚果、杏仁、干烤、添加盐","坚果、栗子、日式、煮熟和蒸熟", "坚果、松子、干的", "种子、南瓜和南瓜籽仁、烤熟、添加盐", "种子、南瓜子和南瓜子、整粒、烤熟、无盐", "坚果、栗子、日本坚果、生的", "坚果、腰果、油烤、添加盐", "种子，葵花籽仁，烤，添加盐", "种子，葵花籽仁，油烤，添加盐", "种子，葵花籽黄油，添加盐", "坚果、椰肉、干燥（干燥）、奶油", "坚果、腰果酱、原味、添加盐", "坚果、混合坚果、干烤、花生、添加盐", "坚果、栗子、日式、烤熟", "坚果、杏仁、油烤、添加盐", "坚果、混合坚果、花生、油烤、添加盐", "坚果、山核桃、干烤、添加盐", "坚果、腰果、干烤、添加盐", "坚果、山核桃、油烤、添加盐", "种子、南瓜子和南瓜子、整粒、烤熟、添加盐", "坚果、杏仁黄油、原味、添加盐", "坚果、榛子或榛子", "坚果、杏仁", "种子，芝麻酱，塔希尼，未指定果仁类型", "坚果、开心果、干烤、添加盐", "坚果、核桃、英式", "坚果、澳洲坚果、干烤、添加盐", "坚果、混合坚果、不含花生、油烤、添加盐", "种子，亚麻籽"],
Nut2:["Seeds, breadfruit seeds, boiled"
, "Seeds, chia seeds, dried"
, "Seeds, sesame seeds, whole, dried"
, "Seeds, lotus seeds, dried"
, "Seeds, safflower seed kernels, dried"
, "Seeds, sesame seeds, whole, roasted and toasted"
, "Seeds, pumpkin and squash seed kernels, dried"
, "Seeds, sesame flour, partially defatted"
, "Seeds, cottonseed flour, low fat (glandless)"
, "Seeds, pumpkin and squash seed kernels, roasted, without salt"
, "Seeds, breadnut tree seeds, dried"
, "Seeds, safflower seed meal, partially defatted"
, "Seeds, sesame seed kernels, toasted, without salt added (decorticated)"
, "Seeds, cottonseed flour, partially defatted (glandless)"
, "Seeds, cottonseed meal, partially defatted (glandless)"
, "Seeds, breadfruit seeds, raw"
, "Seeds, breadnut tree seeds, raw"
, "Seeds, sesame flour, low-fat"
, "Seeds, sunflower seed kernels, oil roasted, without salt"
, "Seeds, sunflower seed kernels, dried"
, "Seeds, sunflower seed butter, without salt"
, "Nuts, acorns, dried"
, "Seeds, sesame meal, partially defatted"
, "Seeds, sunflower seed flour, partially defatted"
, "Nuts, almonds, blanched"
, "Nuts, almonds, dry roasted, without salt added"
, "Seeds, sunflower seed kernels, toasted, without salt"
, "Nuts, acorn flour, full fat"
, "Nuts, almond paste"
, "Nuts, almonds, oil roasted, without salt added"
, "Seeds, sunflower seed kernels, dry roasted, without salt"
, "Nuts, acorns, raw"
, "Nuts, butternuts, dried"
, "Nuts, beechnuts, dried"
, "Nuts, cashew nuts, dry roasted, without salt added"
, "Nuts, cashew nuts, raw"
, "Nuts, brazilnuts, dried, unblanched"
, "Nuts, cashew butter, plain, without salt added"
, "Nuts, chestnuts, chinese, dried"
, "Nuts, chestnuts, chinese, raw"
, "Nuts, chestnuts, european, raw, peeled"
, "Nuts, chestnuts, european, raw, unpeeled"
, "Nuts, chestnuts, chinese, boiled and steamed"
, "Nuts, chestnuts, european, dried, unpeeled"
, "Nuts, chestnuts, european, dried, peeled"
, "Nuts, chestnuts, chinese, roasted"
, "Nuts, cashew nuts, oil roasted, without salt added"
, "Nuts, coconut cream, raw (liquid expressed from grated meat)"
, "Nuts, coconut meat, dried (desiccated), toasted"
, "Nuts, coconut meat, dried (desiccated), not sweetened"
, "Nuts, coconut meat, dried (desiccated), sweetened, flaked, packaged"
, "Nuts, coconut cream, canned, sweetened"
, "Nuts, coconut meat, dried (desiccated), sweetened, flaked, canned"
, "Nuts, coconut milk, raw (liquid expressed from grated meat and water)"
, "Nuts, coconut meat, raw"
, "Nuts, chestnuts, european, boiled and steamed"
, "Nuts, coconut milk, canned (liquid expressed from grated meat and water)"
, "Nuts, hazelnuts or filberts, blanched"
, "Nuts, coconut water (liquid from coconuts)"
, "Nuts, hickorynuts, dried"
, "Nuts, ginkgo nuts, canned"
, "Nuts, ginkgo nuts, raw"
, "Nuts, ginkgo nuts, dried"
, "Nuts, macadamia nuts, raw"
, "Nuts, macadamia nuts, dry roasted, without salt added"
, "Nuts, hazelnuts or filberts, dry roasted, without salt added"
, "Seeds, sesame butter, tahini, from roasted and toasted kernels (most common type)"
, "Nuts, almonds, honey roasted, unblanched"
, "Nuts, pilinuts, dried"
, "Seeds, sesame butter, paste"
, "Nuts, almond butter, plain, without salt added"
, "Nuts, pine nuts, pinyon, dried"
, "Seeds, sesame flour, high-fat"
, "Seeds, sunflower seed kernels, dry roasted, with salt added"
, "Nuts, pistachio nuts, dry roasted, without salt added"
, "Nuts, coconut meat, dried (desiccated), sweetened, shredded"
, "Nuts, pistachio nuts, raw"
, "Nuts, mixed nuts, oil roasted, without peanuts, without salt added"
, "Nuts, pecans, oil roasted, without salt added"
, "Seeds, sesame seed kernels, toasted, with salt added (decorticated)"
, "Nuts, mixed nuts, oil roasted, with peanuts, without salt added"
, "Nuts, coconut milk, frozen (liquid expressed from grated meat and water)"
, "Seeds, sisymbrium sp. seeds, whole, dried"
, "Nuts, chestnuts, european, roasted"
, "Nuts, formulated, wheat-based, flavored, macadamia flavored, without salt"
, "Nuts, chestnuts, japanese, dried"
, "Seeds, watermelon seed kernels, dried"
, "Nuts, pecans"
, "Nuts, pecans, dry roasted, without salt added"
, "Seeds, lotus seeds, raw"
, "Nuts, mixed nuts, dry roasted, with peanuts, without salt added"
, "Nuts, formulated, wheat-based, all flavors except macadamia, without salt"
, "Seeds, cottonseed kernels, roasted (glandless)"
, "Seeds, sesame butter, tahini, from raw and stone ground kernels"
, "Seeds, sesame butter, tahini, from unroasted kernels (non-chemically removed seed coat)"
, "Seeds, sesame seed kernels, dried (decorticated)"
, "Nuts, formulated, wheat-based, unflavored, with salt added"
, "Nuts, walnuts, black, dried"
, "Seeds, breadfruit seeds, roasted"
, "Nuts, almonds, dry roasted, with salt added"

, "Nuts, chestnuts, japanese, raw"
, "Seeds, pumpkin and squash seed kernels, roasted, with salt added"
, "Nuts, chestnuts, japanese, boiled and steamed"
, "Seeds, pumpkin and squash seeds, whole, roasted, without salt"
, "Nuts, cashew nuts, oil roasted, with salt added"
, "Nuts, pine nuts, dried"
, "Seeds, sunflower seed kernels, oil roasted, with salt added"
, "Seeds, sunflower seed kernels, toasted, with salt added"
, "Nuts, coconut meat, dried (desiccated), creamed"
, "Seeds, sunflower seed butter, with salt added"
, "Nuts, chestnuts, japanese, roasted"
, "Nuts, mixed nuts, with peanuts, oil roasted, with salt added"
, "Nuts, almonds, oil roasted, with salt added"
, "Nuts, mixed nuts, dry roasted, with peanuts, with salt added"
, "Nuts, cashew butter, plain, with salt added"
, "Nuts, pecans, dry roasted, with salt added"
, "Seeds, pumpkin and squash seeds, whole, roasted, with salt added"
, "Nuts, cashew nuts, dry roasted, with salt added"
, "Nuts, pecans, oil roasted, with salt added"
, "Nuts, almond butter, plain, with salt added"
, "Nuts, mixed nuts, without peanuts, oil roasted, with salt added"
, "Nuts, macadamia nuts, dry roasted, with salt added"
, "Seeds, sesame butter, tahini, type of kernels unspecified"
, "Nuts, pistachio nuts, dry roasted, with salt added"
, "Nuts, almonds"
, "Nuts, hazelnuts or filberts"
, "Seeds, flaxseed"
, "Nuts, walnuts, english"],
Porcal:[137
  , 211
  , 198
  , 263
  , 222
  , 255
  , 143
  , 186
  , 211
  , 518
  , 136
  , 210
  , 127
  , 209
  , 252
  , 242
  , 376
  , 812
  , 231
  , 143
  , 194
  , 206
  , 215
  , 239
  , 180
  , 193
  , 204
  , 139
  , 200
  , 170
  , 222
  , 245
  , 217
  , 289
  , 254
  , 134
  , 607
  , 248
  , 242
  , 136
  , 231
  , 518
  , 209
  , 186
  , 261
  , 194
  , 222
  , 273
  , 168
  , 248
  , 245
  , 230
  , 208
  , 206
  , 129
  , 259
  , 213
  , 204
  , 197
  , 155
  , 143
  , 109
  , 192
  , 236
  , 292
  , 200
  , 173
  , 170
  , 127
  , 148
  , 230
  , 173
  , 196
  , 317
  , 253
  , 248
  , 140
  , 329
  , 186
  , 228
  , 267
  , 132
  , 259
  , 269
  , 233
  , 227
  , 127
  , 397
  , 148
  , 159
  , 304
  , 138
  , 99
  , 232
  , 233
  , 100
  , 201
  , 277
  , 140
  , 165

  , 166
  , 222
  , 225
  , 118
  , 655
  , 120
  , 219
  , 199
  , 134
  , 212
  , 100
  , 256
  , 182
  , 748
  , 271
  , 234
  , 145
  , 256
  , 269
  , 85
  , 342
  , 315
  , 857
  , 541
  , 203
  , 151
  , 190
  , 388
  , 396
  , 149
  , 246
  , 459
  , 147
  , 144
  , 157
  , 162
  , 167
  , 178
  , 185
  , 157
  , 170
  , 136
  , 579
  , 226
  , 195
  , 591
  , 196
  , 216
  , 152
  , 243
  , 195
  , 172
  , 211
  , 378
  , 189
  , 260
  , 232
  , 287
  , 252
  , 196
  , 280
  , 273
  , 122
  , 255
  , 238
  , 165
  , 211
  , 286
  , 247
  , 214
  , 208
  , 211
  , 238
  , 328
  , 145
  , 140
  , 224
  , 216
  , 224
  , 273
  , 189
  , 128
  , 207
  , 175
  , 247
  , 263
  , 198
  , 193
  , 120
  , 117
  , 211
  , 169
  , 167
  , 131
  , 177
  , 201
  , 172
  , 541
  , 165
  , 615],
Porm:[28.35
  , 135
  , 453.6
  , 28.35
  , 28.35
  , 206
  , 263
  , 133
  , 28.35
  , 28.35
  , 28.35
  , 85
  , 178
  , 157
  , 135
  , 187
  , 28.35
  , 28.35
  , 900
  , 453.6
  , 900
  , 135
  , 135
  , 85
  , 146
  , 219
  , 85
  , 28.35
  , 187
  , 199
  , 206
  , 28.35
  , 830
  , 135
  , 830
  , 28.35
  , 28.35
  , 85
  , 85
  , 202
  , 219
  , 28.35
  , 85
  , 172
  , 187
  , 263
  , 112
  , 135
  , 1327
  , 783
  , 85
  , 1046
  , 187
  , 783
  , 1217
  , 85
  , 85
  , 985
  , 85
  , 185
  , 333
  , 505
  , 848
  , 28.35
  , 135
  , 135
  , 145
  , 135
  , 185
  , 28.35
  , 135
  , 848
  , 145
  , 135
  , 28.35
  , 198
  , 28.35
  , 135
  , 288
  , 191
  , 185
  , 2105
  , 85
  , 262
  , 249
  , 85
  , 28.35
  , 177
  , 145
  , 28.35
  , 28.35
  , 382
  , 300
  , 238
  , 85
  , 28.35
  , 231
  , 1297
  , 28.35
  , 354

  , 111
  , 215
  , 28.35
  , 28.35
  , 28.35
  , 140
  , 245
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 215
  , 28.35
  , 28.35
  , 231
  , 28.35
  , 140
  , 169
  , 28.35
  , 28.35
  , 60
  , 28.35
  , 28.35
  , 8
  , 28.35
  , 140
  , 140
  , 340
  , 275
  , 299
  , 140
  , 170
  , 140
  , 140
  , 170
  , 140
  , 140
  , 140
  , 139
  , 140
  , 140
  , 140
  , 28.35
  , 140
  , 28.35
  , 28.35
  , 815
  , 85
  , 453.6
  , 140
  , 172
  , 142
  , 85
  , 28.35
  , 128
  , 85
  , 85
  , 376
  , 317
  , 142
  , 140
  , 85
  , 28.35
  , 85
  , 172
  , 140
  , 169
  , 878
  , 193
  , 283
  , 85
  , 453.6
  , 247
  , 241
  , 453.6
  , 197
  , 1071
  , 28.35
  , 85
  , 86
  , 85
  , 453.6
  , 315
  , 85
  , 80
  , 28.35
  , 308
  , 85
  , 505
  , 189
  , 236
  , 150
  , 28.35
  , 436
  , 28.35
  , 85
  , 28.35
  , 8
  , 28.35
  , 22],
Por:["猪肉、新鲜、猪大排、整个、肥瘦分开、生的", "猪肉、新鲜、腿（火腿）、后腿一半、肥瘦分开、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨或烤肉）、带骨、肥瘦分开、生的", "猪肉、新鲜、腿（火腿）、半小腿、肥瘦分开、生的", "猪肉、新鲜、腿（火腿）、整个、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、肩胛骨（排骨）、带骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、腿（火腿）、后腿一半、纯瘦肉、生的", "猪肉、新鲜、腹部、生的", "猪肉、新鲜、猪大排、刀片（排骨或烤肉）、带骨、仅可分离瘦肉、生的", "猪肉，新鲜，由腿肉、里脊肉、肩肉和排骨组成，（包括待腌制的肉块），肥瘦分开，生", "猪肉、新鲜、腿（火腿）、后腿一半、肥瘦分开、熟的、烤熟", "猪肉、新鲜、腿（火腿）、整个、纯瘦肉、生的", "猪肉、新鲜、猪大排、全部、纯瘦肉、熟的、烧烤", "猪肉、新鲜、猪大排、猪大排（排骨）、带骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、猪大排、猪大排（排骨）、带骨、纯瘦肉、生的", "猪肉、新鲜、猪大排、中腰（排骨）、带骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、胴体、肥瘦分开、生的", "猪肉、新鲜、背部肉、生的", "猪肉、新鲜、猪大排、中心猪大排（烤肉）、带骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、整个、纯瘦肉、生的", "猪肉、新鲜、腿（火腿）、半小腿、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、全部、肥瘦分开、熟的、炖熟", "猪肉、新鲜、猪大排、中腰（排骨）、带骨、仅可分离瘦肉、熟的、烧烤", "猪肉、新鲜、猪大排、刀片（排骨）、带骨、仅可分离瘦肉、熟的、烧烤", "猪肉、新鲜、腿（火腿）、后腿一半、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、全部、纯瘦肉、熟的、炖熟", "猪肉、新鲜、猪大排、中心猪大排（烤肉）、带骨、仅可分离瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、猪大排（排骨）、带骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、腿（火腿）、半小腿、纯瘦肉、生的", "猪肉、新鲜、猪大排、猪大排（排骨）、带骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、刀片（排骨）、带骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、腿（火腿）、半小腿、肥瘦分开、熟的、烤熟", "猪肉、新鲜、零售切割肉馅（腿、里脊、肩）、纯瘦肉、生的", "猪肉、新鲜、肥肉、熟的", "猪肉、新鲜、猪大排、刀片（烤肉）、带骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、刀片（烤肉）、带骨、仅可分离瘦肉、熟的、烤熟", "猪肉、新鲜、腿（火腿）、整个、肥瘦分开、生的", "猪肉、新鲜、猪大排、全部、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、全部、肥瘦分开、熟的、烧烤", "猪肉、新鲜、猪大排、中心肋骨（排骨或烤肉）、带骨、仅可分离瘦肉、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨）、带骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、猪大排、中心肋骨（排骨）、带骨、仅可分离瘦肉、熟的、烧烤", "猪肉、新鲜、肥肉、生的", "猪肉、新鲜、猪大排、全部、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、刀片（排骨或烤肉）、带骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨）、带骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、猪大排、刀片（排骨）、带骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、腿（火腿）、整个、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、里脊肉（排骨或烤肉）、带骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、中心肋骨（烤肉）、带骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、里脊、里脊（排骨）、带骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、猪大排、中心肋骨（排骨）、带骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、猪大排、里脊肉（烤肉）、带骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、里脊肉（排骨或烤肉）、带骨、纯瘦肉、生的", "猪肉、新鲜、猪大排、中心肋骨（烤肉）、带骨、仅可分离瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、里脊肉（排骨）、带骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、里脊肉（排骨）、带骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、猪大排、里脊肉（排骨）、带骨、仅可分离瘦肉、熟的、烧烤", "猪肉、新鲜、猪大排、里脊肉（烤肉）、带骨、仅可分离瘦肉、熟的、烤熟", "猪肉、新鲜、肩肉、整个、肥瘦分开、生的", "猪肉、新鲜、猪大排、里脊肉、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、猪大排、上部猪大排（烤肉）、去骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、里脊肉、纯瘦肉、生的", "猪肉、新鲜、肩肉、整个、肥瘦分开、熟的、烤熟", "猪肉、新鲜、肩肉、整个、纯瘦肉、生的", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、纯瘦肉、生的", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、仅可分离瘦肉、熟的、烧烤", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、仅可分离瘦肉、熟的、炖熟", "猪肉、新鲜、猪肩肉、整个、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、上部猪大排（烤肉）、去骨、仅可分离瘦肉、熟的、烤熟", "猪肉、新鲜、肩肉、臂肉、肥瘦分开、生的", "猪肉、新鲜、肩肉、臂肉、肥瘦分开、熟的、烤熟", "猪肉、新鲜、肩肉、臂肉、纯瘦肉、生的", "猪肉、新鲜、肩肉、手臂野餐、肥瘦分开、熟的、炖熟", "猪肉、新鲜、肩肉、手臂野餐、纯瘦肉、熟的、炖熟", "猪肉、新鲜、肩肉、手臂野餐、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、肩胛肉（波士顿臀）、肩胛肉（牛排）、肥瘦分开、生的", "猪肉、新鲜、肩胛肉、（波士顿臀）、肩胛肉（牛排）、纯瘦肉、熟的、炖熟", "猪肉、新鲜、肩胛肉、肩胛肉、波士顿（烤肉）、肥瘦分开、熟的、烤熟", "猪肉、新鲜、肩胛肉、肩胛肉、波士顿（牛排）、肥瘦分开、熟的、烧烤", "猪肉、新鲜、肩胛肉、肩胛肉、波士顿（牛排）、纯瘦肉、熟的、烧烤", "猪肉、新鲜、肩胛肉、（波士顿臀）、肩胛肉（牛排）、肥瘦分开、熟的、炖熟", "猪肉、新鲜、肩胛肉、（波士顿臀）、肩胛肉（牛排）、纯瘦肉、生的", "猪肉、新鲜、排骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、畜下水和副产品、心脏、熟的、炖熟", "猪肉、新鲜、畜下水和副产品、脑、生的", "猪肉、新鲜、畜下水和副产品、胃、生的", "猪肉、新鲜、畜下水和副产品、机械分离、生的", "猪肉、新鲜、畜下水和副产品、脑、熟的、炖熟", "猪肉、新鲜、畜下水和副产品、脾脏、生的", "猪肉、新鲜、畜下水和副产品、肺、熟的、炖熟", "猪肉、新鲜、畜下水和副产品、壳寡糖、熟的、文火炖", "猪肉、新鲜、肩胛肉、肩胛肉、波士顿（烤肉）、纯瘦肉、熟的、烤熟", "猪肉、新鲜、畜下水和副产品、肝脏、熟的、炖熟", "猪肉、新鲜、排骨、肥瘦分开、生的", "猪肉，新鲜，零售肉块（腿肉、里脊肉和肩肉）组合，精瘦，即食", "猪肉、腌制、脚、腌制","猪肉、腌制、火腿、特瘦（约4%脂肪）、罐装、未加热", "猪肉、新鲜、畜下水和副产品、胰腺、熟的、炖熟", "猪肉、新鲜、猪大排、刀片（排骨）、带骨、纯瘦肉、熟的、油炸", "猪肉、新鲜、畜下水和副产品、舌头、生的", "猪肉、新鲜、畜下水和副产品、心脏、生的", "猪肉、新鲜、畜下水和副产品、猪排、生的", "猪肉、新鲜、畜下水和副产品、耳朵、冷冻、熟的、文火炖", "猪肉、新鲜、畜下水和副产品、脚、生的", "猪肉、新鲜、畜下水和副产品、胰腺、生的", "猪肉、新鲜、畜下水和副产品、肝脏、生的", "猪肉、新鲜、各种肉类和副产品、壳寡糖、生的", "猪肉、新鲜、畜下水和副产品、肾脏、生的", "猪肉、新鲜、畜下水和副产品、耳朵、冷冻、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨）、带骨、肥瘦分开、熟的、油炸", "猪肉、新鲜、猪大排、刀片（排骨）、带骨、肥瘦分开、熟的、油炸", "猪肉、新鲜、畜下水和副产品、舌头、熟的、炖熟", "猪肉、腌制、咸猪肉、生的", "猪肉、新鲜、畜下水和副产品、肺、生的", "猪肉、腌制、火腿、去骨、特瘦（约5%脂肪）、烤熟", "猪肉、腌制、肩胛肉、刀卷、肥瘦分开、未加热", "猪肉、新鲜、畜下水和副产品、叶脂、生的", "猪肉、腌制、培根、熟的、烧烤、油炸或烤熟", "猪肉、新鲜、畜下水和副产品、肾脏、熟的、炖熟", "猪肉、腌制、火腿、肉饼、未加热", "猪肉、腌制、火腿、中心片、肥瘦分开、未加热", "猪肉、腌制、火腿、肉饼、铁扒", "猪肉、腌制、早餐条、生的或未加热的", "猪肉、新鲜、畜下水和副产品、尾部、熟的、文火炖", "猪肉、腌制、火腿、普通（约13%脂肪）、罐装、未加热", "猪肉、新鲜、畜下水和副产品、脾脏、熟的、炖熟", "猪肉、腌制、火腿、特瘦和普通、罐装、未加热", "猪肉、腌制、加拿大式培根、未加热", "猪肉、腌制、早餐条、熟的", "猪肉、腌制、火腿、去骨、特瘦和普通、未加热", "猪肉、腌制、火腿、整条、肥瘦分开、未加热", "猪肉、腌制、火腿、整条、纯瘦肉、未加热", "猪肉、腌制、火腿、去骨、普通（约11%脂肪）、烤熟", "猪肉、腌制、加拿大培根、烧烤", "猪肉、腌制、火腿、特瘦普通猪肉、罐装、烤熟", "猪肉、腌制、火腿、整条、纯瘦肉、烤熟", "猪肉、腌制、火腿、特瘦（约4%脂肪）、罐装、烤熟", "猪肉、腌制、可分离脂肪（来自火腿和手臂野餐）、烤熟", "猪肉、腌制、火腿、中心片、乡村风味、纯瘦肉、生的", "猪肉、腌制、火腿、普通（约13%脂肪）、罐装、烤熟", "猪肉、腌制、可分离脂肪（来自火腿和手臂野餐）、未加热", "猪肉、腌制、肩肉、臂肉、纯瘦肉、烤熟", "猪肉、腌制、火腿、整条、肥瘦分开、烤熟", "猪肉、新鲜、猪大排、中心肋骨（排骨或烤肉）、去骨、纯瘦肉、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨）、去骨、仅可分离瘦肉、熟的、烧烤", "美国农业部商品，猪肉，罐装", "猪肉、新鲜、猪大排、猪大排（排骨）、带骨、纯瘦肉、熟的、油炸", "猪肉、新鲜、畜下水和副产品、尾部、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨）、去骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、仅可分离瘦肉、熟的、油炸", "猪肉、腌制、肩肉、刀卷、肥瘦分开、烤熟", "猪肉、新鲜、猪大排、中心肋骨（排骨）、去骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、猪大排、乡村排骨、肥瘦分开、生的", "猪肉、新鲜、畜下水和副产品、脚、熟的、文火炖", "猪肉、新鲜、猪大排、中心肋骨（烤肉）、去骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、肥瘦分开、熟的、油炸", "猪肉、腌制、火腿、牛排、去骨、特瘦、未加热", "猪肉、新鲜、猪大排、中心肋骨（排骨）、去骨、肥瘦分开、熟的、油炸", "猪肉、新鲜、猪大排、中心肋骨（排骨）、去骨、肥瘦分开、熟的、炖熟", "猪肉、腌制、火腿、去骨、特瘦和普通、烤熟", "猪肉、腌制、肩肉、臂肉、肥瘦分开、烤熟", "猪肉、新鲜、猪大排、猪大排（排骨）、带骨、肥瘦分开、熟的、油炸", "猪肉、新鲜、排骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、中心肋骨（烤肉）、去骨、仅可分离瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、中心肋骨（排骨）、带骨、纯瘦肉、熟的、油炸", "猪肉、新鲜、猪大排、乡村排骨、纯瘦肉、熟的、烤熟", "猪肉，新鲜，零售肉块（腿肉、里脊肉、肩肉和排骨）组合，肥瘦分开，即食", "猪肉、新鲜、猪大排、乡村排骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、中心肋骨（排骨或烤肉）、去骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、牛里脊（排骨或烤肉）、去骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、乡村排骨、纯瘦肉、生的", "猪肉、新鲜、里脊、里脊（排骨）、去骨、肥瘦分开、熟的、烧烤", "猪肉、新鲜、排骨、肥瘦分开、生的", "猪肉、新鲜、猪大排、中心肋骨（排骨）、去骨、纯瘦肉、熟的、油炸", "猪肉，新鲜，零售肉块（腿肉、里脊肉、肩肉和排骨）组合，肥瘦分开，生", "猪肉、新鲜、猪大排、乡村排骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、猪大排、沙朗（排骨）、去骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、里脊、里脊（排骨）、去骨、肥瘦分开、熟的、炖熟", "猪肉、新鲜、绞碎、生的", "猪肉、新鲜、猪大排、里脊肉（排骨或烤肉）、去骨、纯瘦肉、生的", "猪肉、新鲜、猪大排、乡村排骨、纯瘦肉、熟的、炖熟", "猪肉、新鲜、猪大排、牛里脊（烤肉）、去骨、肥瘦分开、熟的、烤熟", "猪肉、新鲜、猪大排、里脊肉（排骨）、去骨、纯瘦肉、熟的、烧烤", "猪肉、新鲜、猪大排、里脊肉（烤肉）、去骨、纯瘦肉、熟的、烤熟", "猪肉、新鲜、猪大排、里脊肉、肥瘦分开、生的", "猪肉、腌制、火腿——加水、切片、去骨、纯瘦肉、加热、平底烤肉", "荷美尔总是嫩的，中心切排骨，新鲜猪肉", "猪肉、新鲜、猪大排、里脊肉、肥瘦分开、熟的、烧烤", "猪肉、腌制、火腿——加水、切片、带骨、纯瘦肉、加热、平底烤肉", "猪肉、新鲜、猪大排、上部猪大排（排骨）、去骨、增强型、仅可分离瘦肉、熟的、平底烤肉", "猪肉，新鲜，零售肉块（腰肉和肩胛骨）组合，精瘦，即食", "猪肉、新鲜、零售肉块（腰肉和肩胛骨）组合、肥瘦分开、生的", "猪肉、腌制、火腿、低钠、肥瘦、熟的", "猪肉、腌制、火腿、去骨、低钠、特瘦和普通、烤熟", "猪肉、腌制、培根、熟的、烧烤、煎或烤、还原钠", "猪肉，东方风味，脱水"],
Por2:["Pork, fresh, leg (ham), rump half, separable lean only, raw"
, "Pork, fresh, leg (ham), whole, separable lean only, cooked, roasted"
, "Pork, fresh, loin, whole, separable lean and fat, raw"
, "Pork, fresh, leg (ham), shank half, separable lean and fat, raw"
, "Pork, fresh, leg (ham), rump half, separable lean and fat, raw"
, "Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, blade (chops or roasts), bone-in, separable lean only, raw"
, "Pork, fresh, loin, center rib (chops or roasts), bone-in, separable lean and fat, raw"
, "Pork, fresh, composite of trimmed leg, loin, shoulder, and spareribs, (includes cuts to be cured), separable lean and fat, raw"
, "Pork, fresh, belly, raw"
, "Pork, fresh, leg (ham), whole, separable lean only, raw"
, "Pork, fresh, loin, whole, separable lean only, cooked, broiled"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, raw"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, broiled"
, "Pork, fresh, leg (ham), rump half, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, braised"
, "Pork, fresh, carcass, separable lean and fat, raw"
, "Pork, fresh, backfat, raw"
, "Pork, fresh, loin, center loin (roasts), bone-in, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, whole, separable lean only, raw"
, "Pork, fresh, loin, center loin (roasts), bone-in, separable lean only, cooked, roasted"
, "Pork, fresh, leg (ham), rump half, separable lean only, cooked, roasted"
, "Pork, fresh, leg (ham), shank half, separable lean only, cooked, roasted"
, "Pork, fresh, loin, whole, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, broiled"
, "Pork, fresh, loin, blade (chops), bone-in, separable lean only, cooked, broiled"
, "Pork, fresh, loin, whole, separable lean only, cooked, braised"
, "Pork, fresh, leg (ham), shank half, separable lean only, raw"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, braised"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, raw"
, "Pork, fresh, loin, blade (chops), bone-in, separable lean only, cooked, braised"
, "Pork, fresh, leg (ham), whole, separable lean and fat, raw"
, "Pork, fresh, loin, blade (roasts), bone-in, separable lean only, cooked, roasted"
, "Pork, fresh, leg (ham), shank half, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, blade (roasts), bone-in, separable lean and fat, cooked, roasted"
, "Pork, fresh, composite of trimmed retail cuts (leg, loin, shoulder), separable lean only, raw"
, "Pork, fresh, separable fat, cooked"
, "Pork, fresh, loin, whole, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, whole, separable lean and fat, cooked, broiled"
, "Pork, fresh, loin, center rib (chops or roasts), bone-in, separable lean only, raw"
, "Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, broiled"
, "Pork, fresh, separable fat, raw"
, "Pork, fresh, loin, whole, separable lean only, cooked, roasted"
, "Pork, fresh, loin, center rib (chops), bone-in, separable lean only, cooked, broiled"
, "Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, blade (chops or roasts), bone-in, separable lean and fat, raw"
, "Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, broiled"
, "Pork, fresh, leg (ham), whole, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops or roasts), bone-in, separable lean and fat, raw"
, "Pork, fresh, loin, center rib (roasts), bone-in, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops), bone-in, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, sirloin (roasts), bone-in, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, center rib (chops), bone-in, separable lean only, cooked, braised"
, "Pork, fresh, loin, center rib (roasts), bone-in, separable lean only, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops or roasts), bone-in, separable lean only, raw"
, "Pork, fresh, loin, sirloin (chops), bone-in, separable lean and fat, cooked, broiled"
, "Pork, fresh, loin, sirloin (chops), bone-in, separable lean only, cooked, broiled"
, "Pork, fresh, loin, sirloin (roasts), bone-in, separable lean only, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops), bone-in, separable lean only, cooked, braised"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, raw"
, "Pork, fresh, loin, tenderloin, separable lean only, cooked, roasted"
, "Pork, fresh, loin, tenderloin, separable lean only, raw"
, "Pork, fresh, loin, top loin (roasts), boneless, separable lean and fat, cooked, roasted"
, "Pork, fresh, shoulder, whole, separable lean and fat, raw"
, "Pork, fresh, shoulder, whole, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, broiled"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, braised"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean only, raw"
, "Pork, fresh, shoulder, whole, separable lean only, raw"
, "Pork, fresh, shoulder, whole, separable lean only, cooked, roasted"
, "Pork, fresh, loin, top loin (roasts), boneless, separable lean only, cooked, roasted"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, broiled"
, "Pork, fresh, shoulder, arm picnic, separable lean and fat, cooked, roasted"
, "Pork, fresh, shoulder, arm picnic, separable lean and fat, raw"
, "Pork, fresh, shoulder, arm picnic, separable lean only, cooked, braised"
, "Pork, fresh, shoulder, arm picnic, separable lean only, raw"
, "Pork, fresh, shoulder, arm picnic, separable lean and fat, cooked, braised"
, "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat, raw"
, "Pork, fresh, shoulder, arm picnic, separable lean only, cooked, roasted"
, "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean and fat, cooked, braised"
, "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, raw"
, "Pork, fresh, shoulder, blade, boston (steaks), separable lean and fat, cooked, broiled"
, "Pork, fresh, shoulder, blade, boston (roasts), separable lean and fat, cooked, roasted"
, "Pork, fresh, shoulder, (Boston butt), blade (steaks), separable lean only, cooked, braised"
, "Pork, fresh, shoulder, blade, boston (steaks), separable lean only, cooked, broiled"
, "Pork, fresh, variety meats and by-products, brain, raw"
, "Pork, fresh, spareribs, separable lean and fat, cooked, braised"
, "Pork, fresh, variety meats and by-products, heart, cooked, braised"
, "Pork, fresh, variety meats and by-products, stomach, raw"
, "Pork, fresh, variety meats and by-products, mechanically separated, raw"
, "Pork, fresh, variety meats and by-products, brain, cooked, braised"
, "Pork, fresh, variety meats and by-products, lungs, cooked, braised"
, "Pork, fresh, shoulder, blade, boston (roasts), separable lean only, cooked, roasted"
, "Pork, fresh, variety meats and by-products, chitterlings, cooked, simmered"
, "Pork, fresh, variety meats and by-products, spleen, raw"
, "Pork, fresh, composite of trimmed retail cuts (leg, loin, and shoulder), separable lean only, cooked"
, "Pork, fresh, spareribs, separable lean and fat, raw"
, "Pork, cured, feet, pickled"
, "Pork, fresh, variety meats and by-products, liver, cooked, braised"

, "Pork, fresh, variety meats and by-products, ears, frozen, cooked, simmered"
, "Pork, fresh, loin, blade (chops), bone-in, separable lean only, cooked, pan-fried"
, "Pork, fresh, variety meats and by-products, tongue, raw"
, "Pork, fresh, variety meats and by-products, heart, raw"
, "Pork, fresh, variety meats and by-products, jowl, raw"
, "Pork, cured, ham, extra lean (approximately 4% fat), canned, unheated"
, "Pork, fresh, variety meats and by-products, pancreas, cooked, braised"
, "Pork, fresh, variety meats and by-products, pancreas, raw"
, "Pork, fresh, variety meats and by-products, liver, raw"
, "Pork, fresh, variety meats and by-products, feet, raw"
, "Pork, fresh, variety meats and by-products, kidneys, raw"
, "Pork, fresh, loin, blade (chops), bone-in, separable lean and fat, cooked, pan-fried"
, "Pork, fresh, variety meats and by-products, chitterlings, raw"
, "Pork, cured, salt pork, raw"
, "Pork, fresh, variety meats and by-products, tongue, cooked, braised"
, "Pork, fresh, variety meats and by-products, ears, frozen, raw"
, "Pork, cured, ham, boneless, extra lean (approximately 5% fat), roasted"
, "Pork, fresh, loin, center rib (chops), bone-in, separable lean and fat, cooked, pan-fried"
, "Pork, cured, shoulder, blade roll, separable lean and fat, unheated"
, "Pork, fresh, variety meats and by-products, lungs, raw"
, "Pork, cured, ham, patties, grilled"
, "Pork, cured, ham, patties, unheated"
, "Pork, fresh, variety meats and by-products, leaf fat, raw"
, "Pork, cured, bacon, cooked, broiled, pan-fried or roasted"
, "Pork, cured, ham, center slice, separable lean and fat, unheated"
, "Pork, fresh, variety meats and by-products, kidneys, cooked, braised"
, "Pork, cured, ham, regular (approximately 13% fat), canned, unheated"
, "Pork, cured, breakfast strips, raw or unheated"
, "Pork, fresh, variety meats and by-products, tail, cooked, simmered"
, "Pork, fresh, variety meats and by-products, spleen, cooked, braised"
, "Pork, cured, ham, whole, separable lean and fat, unheated"
, "Pork, cured, breakfast strips, cooked"
, "Pork, cured, ham, whole, separable lean only, unheated"
, "Pork, cured, ham, extra lean and regular, canned, unheated"
, "Pork, cured, canadian-style bacon, unheated"
, "Pork, cured, ham, boneless, extra lean and regular, unheated"
, "Pork, cured, ham, extra lean and regular, canned, roasted"
, "Pork, cured, ham, boneless, regular (approximately 11% fat), roasted"
, "Pork, cured, canadian-style bacon, grilled"
, "Pork, cured, ham, whole, separable lean only, roasted"
, "Pork, cured, shoulder, arm picnic, separable lean only, roasted"
, "Pork, cured, ham, extra lean (approximately 4% fat), canned, roasted"
, "Pork, cured, separable fat (from ham and arm picnic), unheated"
, "Pork, cured, ham, regular (approximately 13% fat), canned, roasted"
, "Pork, cured, ham, center slice, country-style, separable lean only, raw"
, "Pork, cured, separable fat (from ham and arm picnic), roasted"
, "USDA Commodity, pork, canned"
, "Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, broiled"
, "Pork, fresh, loin, center rib (chops or roasts), boneless, separable lean only, raw"
, "Pork, cured, ham, whole, separable lean and fat, roasted"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean only, cooked, pan-fried"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean only, cooked, pan-fried"
, "Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, braised"
, "Pork, fresh, variety meats and by-products, tail, raw"
, "Pork, fresh, loin, country-style ribs, separable lean and fat, raw"
, "Pork, fresh, loin, center rib (chops), boneless, separable lean and fat, cooked, broiled"
, "Pork, fresh, variety meats and by-products, feet, cooked, simmered"
, "Pork, cured, shoulder, blade roll, separable lean and fat, roasted"
, "Pork, fresh, loin, center rib (roasts), boneless, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, top loin (chops), boneless, separable lean and fat, cooked, pan-fried"
, "Pork, cured, shoulder, arm picnic, separable lean and fat, roasted"
, "Pork, fresh, loin, center rib (chops), boneless, separable lean and fat, cooked, pan-fried"
, "Pork, cured, ham, steak, boneless, extra lean, unheated"
, "Pork, fresh, loin, center rib (chops), boneless, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, center loin (chops), bone-in, separable lean and fat, cooked, pan-fried"
, "Pork, cured, ham, boneless, extra lean and regular, roasted"
, "Pork, fresh, loin, center rib (chops), bone-in, separable lean only, cooked, pan-fried"
, "Pork, fresh, backribs, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, country-style ribs, separable lean only, cooked, roasted"
, "Pork, fresh, loin, center rib (roasts), boneless, separable lean only, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops), boneless, separable lean and fat, cooked, broiled"
, "Pork, fresh, loin, center rib (chops or roasts), boneless, separable lean and fat, raw"
, "Pork, fresh, composite of trimmed retail cuts (leg, loin, shoulder, and spareribs), separable lean and fat, cooked"
, "Pork, fresh, loin, country-style ribs, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops or roasts), boneless, separable lean and fat, raw"
, "Pork, fresh, loin, country-style ribs, separable lean only, raw"
, "Pork, fresh, backribs, separable lean and fat, raw"
, "Pork, fresh, composite of trimmed retail cuts (leg, loin, shoulder, and spareribs), separable lean and fat, raw"
, "Pork, fresh, loin, center rib (chops), boneless, separable lean only, cooked, pan-fried"
, "Pork, fresh, loin, country-style ribs, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, sirloin (chops), boneless, separable lean and fat, cooked, braised"
, "Pork, fresh, loin, sirloin (chops or roasts), boneless, separable lean only, raw"
, "Pork, fresh, loin, sirloin (roasts), boneless, separable lean and fat, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops), boneless, separable lean only, cooked, braised"
, "Pork, fresh, loin, country-style ribs, separable lean only, cooked, braised"
, "Pork, fresh, ground, raw"
, "Pork, fresh, loin, sirloin (roasts), boneless, separable lean only, cooked, roasted"
, "Pork, fresh, loin, sirloin (chops), boneless, separable lean only, cooked, broiled"
, "Pork, fresh, loin, tenderloin, separable lean and fat, raw"
, "Pork, cured, ham -- water added, slice, boneless, separable lean only, heated, pan-broil"
, "Pork, fresh, composite of trimmed retail cuts (loin and shoulder blade), separable lean only, cooked"
, "Pork, fresh, loin, top loin (chops), boneless, enhanced, separable lean only, cooked, pan-broiled"
, "HORMEL ALWAYS TENDER, Center Cut Chops, Fresh Pork"
, "Pork, cured, ham -- water added, slice, bone-in, separable lean only, heated, pan-broil"
, "Pork, fresh, composite of trimmed retail cuts (loin and shoulder blade), separable lean and fat, raw"
, "Pork, fresh, loin, tenderloin, separable lean and fat, cooked, broiled"
, "Pork, cured, ham, low sodium, lean and fat, cooked"
, "Pork, cured, bacon, cooked, broiled, pan-fried or roasted, reduced sodium"
, "Pork, cured, ham, boneless, low sodium, extra lean and regular, roasted"
, "Pork, oriental style, dehydrated"],
Poucal:[331
  , 319
  , 233
  , 269
  , 114
  , 239
  , 260
  , 186
  , 220
  , 245
  , 216
  , 454
  , 191
  , 208
  , 222
  , 363
  , 185
  , 297
  , 232
  , 120
  , 330
  , 247
  , 154
  , 332
  , 229
  , 179
  , 232
  , 277
  , 262
  , 211
  , 247
  , 218
  , 195
  , 181
  , 209
  , 113
  , 119
  , 213
  , 153
  , 194
  , 161
  , 160
  , 170
  , 164
  , 137
  , 134
  , 135
  , 273
  , 159
  , 221
  , 123
  , 389
  , 197
  , 238
  , 180
  , 404
  , 185
  , 368
  , 115
  , 171
  , 108
  , 163
  , 133
  , 126
  , 188
  , 179
  , 166
  , 207
  , 196
  , 194
  , 111
  , 151
  , 189
  , 138
  , 153
  , 125
  , 169
  , 157
  , 462
  , 208
  , 144
  , 229
  , 157
  , 67
  , 182
  , 168
  , 244
  , 155
  , 157
  , 283
  , 156
  , 197
  , 108
  , 172
  , 134
  , 120
  , 116
  , 178
  , 259
  , 155
  , 258
  , 382
  , 239
  , 213
  , 200
  , 221
  , 200
  , 162],
Poum:[72
  , 59
  , 110
  , 188
  , 88
  , 140
  , 84
  , 116
  , 140
  , 29
  , 140
  , 34
  , 140
  , 56
  , 59
  , 44
  , 160
  , 15
  , 140
  , 78
  , 16
  , 11
  , 6
  , 11
  , 7
  , 5
  , 41
  , 52
  , 38
  , 57
  , 140
  , 31
  , 140
  , 140
  , 140
  , 113
  , 41
  , 1509
  , 140
  , 145
  , 185
  , 152
  , 140
  , 145
  , 89
  , 92
  , 12
  , 83
  , 180
  , 140
  , 208
  , 51
  , 140
  , 143
  , 10
  , 287
  , 140
  , 51
  , 150
  , 251
  , 136
  , 17
  , 2410
  , 864
  , 140
  , 524
  , 4457
  , 137
  , 361
  , 109
  , 111
  , 105
  , 112
  , 28.35
  , 98
  , 132
  , 135
  , 140
  , 13
  , 71
  , 105
  , 24
  , 146
  , 240
  , 106
  , 140
  , 140
  , 135
  , 314
  , 28
  , 416
  , 33
  , 572
  , 152
  , 310
  , 1134
  , 239
  , 174
  , 257
  , 85
  , 85
  , 82
  , 140
  , 140
  , 28.35
  , 19
  , 21
  , 28],
Pou:["鸡肉、肉仔鸡或雏鸡、背、肉和皮、熟的、油炸、面糊", "鸡肉、肉仔鸡或雏鸡、肉和皮、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、肉和皮、熟的、油炸、面粉", "鸡肉、肉仔鸡或雏鸡、深色肉、肉和皮、熟的、炖熟", "鸡肉、肉仔鸡或雏鸡、淡肉、仅肉、生的", "鸡肉、肉仔鸡或雏鸡、背、肉和皮、生的", "鸡肉、肉仔鸡或雏鸡、淡肉、肉和皮、生的", "鸡肉、肉仔鸡或雏鸡、胸肉、肉和皮、熟的、油炸、面糊", "鸡肉、肉仔鸡或雏鸡、腿、肉和皮、熟的、炖熟", "鸡肉、肉仔鸡或雏鸡、鸡腿、肉和皮、熟的、油炸、面粉", "鸡肉、肉仔鸡或雏鸡、腿、仅肉、熟的、油炸", "鸡肉、肉仔鸡或雏鸡、仅皮、熟的、炖熟", "鸡肉、肉仔鸡或雏鸡、鸡腿、肉和皮、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、颈部、肉和皮、生的", "鸡肉、肉仔鸡或雏鸡、腿、肉和皮、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、腿、仅肉、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、胸肉、肉和皮、熟的、油炸、面粉", "鸡肉、肉仔鸡或雏鸡、仅皮、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、腿、仅肉、熟的、炖熟", "鸡肉、肉仔鸡或雏鸡、腿、仅肉、生的", "鸡肉、肉仔鸡或雏鸡、颈部、仅肉、熟的、文火炖", "鸡肉、肉仔鸡或雏鸡、颈部、肉和皮、熟的、油炸、面粉", "鸡肉、肉仔鸡或雏鸡、颈部、肉和皮、炖熟", "鸡肉、肉仔鸡或雏鸡、颈部、仅肉、熟的、油炸", "鸡肉、肉仔鸡或雏鸡、大腿、肉和皮、生的", "鸡肉、肉仔鸡或雏鸡、大腿、肉和皮、熟的、油炸、面粉", "鸡肉、肉仔鸡或雏鸡、颈部、仅肉、生的", "鸡肉、肉仔鸡或雏鸡、颈部、肉和皮、熟的、油炸、面糊", "鸡肉、肉仔鸡或雏鸡、大腿、肉和皮、熟的、油炸、面糊", "鸡肉、肉仔鸡或雏鸡、大腿、肉和皮、熟的、炖熟", "鸡肉、肉仔鸡或雏鸡、大腿、仅肉、熟的、油炸", "鸡肉、肉仔鸡或雏鸡、大腿、仅肉、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、大腿、仅肉、熟的、炖熟", "鸡肉、肉仔鸡或雏鸡、大腿、肉和皮、熟的、烤熟", "鸡肉、肉仔鸡或雏鸡、翅、仅肉、熟的、炖熟", "鸡肉、烤鸡、深色肉、仅肉、生的", "鸡肉、肉仔鸡或雏鸡、大腿、仅肉、生的", "鸡肉、烤肉、肉、皮、内脏和颈部、生的", "鸡肉、炖、杂烩、熟的、文火炖", "鸡肉、烤肉、淡肉、仅肉、熟的、烤熟", "鸡肉、炖肉、淡肉、仅肉、生的", "火鸡、所有类、仅肉、熟的、烤熟", "火鸡、所有类、深色肉、肉和皮、生的", "鹅，家养，仅肉，生", "鸡肉、鸡杂、熟的、文火炖", "鹌鹑、仅肉、生的", "火鸡、所有类、淡肉、肉和皮、生的", "火鸡、肝、所有类、熟的、文火炖", "火鸡、所有类、深色肉、肉和皮、熟的、烤熟", "火鸡，所有类，颈部，仅肉，生", "火鸡、所有类、仅皮、生的", "鹅，家养，仅肉，即食，烤", "鹌鹑、胸脯、仅肉、生的", "火鸡，所有类，颈部，仅肉，即食，文火炖", "鸭，家养，肉和皮，生", "火鸡、所有类、淡肉、肉和皮、熟的、烤熟", "火鸡、胸脯肉、仅肉、熟的、烤熟", "火鸡、纯皮、生的", "火鸡、所有类、淡肉、生的", "火鸡、肉和皮、内脏和颈部、熟的、烤熟", "火鸡、煎烤鸡、翅、仅肉、熟的、烤熟", "火鸡、所有类、深色肉、熟的、烤熟", "火鸡、煎烤炉、肉和皮、内脏和颈部、生的", "火鸡胸脯、前油、肉和皮、熟的、烤熟", "火鸡、淡肉、仅肉、生的", "火鸡、背、肉和皮、生的", "火鸡、小母鸡、淡肉、肉和皮、熟的、烤熟", "火鸡、所有类、背、肉和皮、生的", "火鸡、小母鸡、胸脯、肉和皮、熟的、烤熟", "火鸡、小母鸡、肉和皮、内脏和颈部、生的", "火鸡、切块、浅色和深色肉、调味", "火鸡、所有类、胸肉、肉和皮、熟的、烤熟", "火鸡、胸脯、肉和皮、熟的、烤熟", "鹅肝酱、罐装（鹅肝酱）、烟熏", "火鸡、煎烤箱、胸脯、仅肉、生的", "火鸡、所有类、深色肉、生的", "火鸡、小母鸡、腿、肉和皮、生的", "火鸡、所有类、淡肉、熟的、烤熟", "火鸡、罐装、仅肉、含肉汤", "火鸡、所有类、腿、肉和皮、熟的、烤熟", "火鸡、所有类、胸肉、肉和皮、生的", "火鸡、所有类、腿、肉和皮、生的", "火鸡、所有类、火鸡背、肉和皮、熟的、烤熟", "火鸡、深色肉、肉和皮、熟的、烤熟", "火鸡、所有类、翅、肉和皮、熟的、烤熟", "火鸡和肉汁，冷冻", "火鸡大腿、前烤肉、肉和皮、熟的、烤熟", "火鸡、小汤姆、仅肉、熟的、烤熟", "烤火鸡、去骨、冷冻、调味、浅色和深色肉、烤熟", "火鸡肉饼、面包、面糊、油炸", "火鸡、小母鸡、深色肉、肉和皮、生的", "火鸡、煎烤炉、肉和皮、生的", "鸸鹋、内桶、生的", "鸸鹋、熟的、烧烤", "火鸡、所有类、翅、肉和皮、生的", "鸭，雏鸭，家养，白北京，腿，仅肉，带骨，无皮烹调，红烧", "鸡肉、康沃尔野鸡、仅肉、生的", "烤火鸡、去骨、冷冻、调味、浅色和深色肉、生的", "鸡肉、康沃尔野鸡、肉和皮、熟的、烤熟", "鸵鸟、上等里脊、熟的","火鸡培根，熟的", "火鸡、翅、熏制、熟的、去皮、去骨", "火鸡、浅色或深色肉、熏制、熟的、去皮、去骨", "磨碎火鸡，85%瘦肉，15%脂肪，平底锅烤面包屑", "鸽子、熟的（包括壁鸽）", "火鸡、鸡腿、熏制、熟的、带皮、去骨", "火鸡、浅色或深色肉、熏制、熟的、去皮去骨", "野鸡、熟的、完全可食用"

],
Pou2:["Chicken, broilers or fryers, back, meat and skin, cooked, fried, batter"
, "Chicken, broilers or fryers, back, meat and skin, raw"
, "Chicken, broilers or fryers, dark meat, meat and skin, cooked, stewed"
, "Chicken, broilers or fryers, meat and skin, cooked, fried, flour"
, "Chicken, broilers or fryers, light meat, meat only, raw"
, "Chicken, broilers or fryers, meat and skin, cooked, roasted"
, "Chicken, broilers or fryers, breast, meat and skin, cooked, fried, batter"
, "Chicken, broilers or fryers, light meat, meat and skin, raw"
, "Chicken, broilers or fryers, leg, meat and skin, cooked, stewed"
, "Chicken, broilers or fryers, drumstick, meat and skin, cooked, fried, flour"
, "Chicken, broilers or fryers, drumstick, meat and skin, cooked, roasted"
, "Chicken, broilers or fryers, skin only, cooked, roasted"
, "Chicken, broilers or fryers, leg, meat only, cooked, roasted"
, "Chicken, broilers or fryers, leg, meat only, cooked, fried"
, "Chicken, broilers or fryers, breast, meat and skin, cooked, fried, flour"
, "Chicken, broilers or fryers, skin only, cooked, stewed"
, "Chicken, broilers or fryers, leg, meat only, cooked, stewed"
, "Chicken, broilers or fryers, neck, meat and skin, raw"
, "Chicken, broilers or fryers, leg, meat and skin, cooked, roasted"
, "Chicken, broilers or fryers, leg, meat only, raw"
, "Chicken, broilers or fryers, neck, meat and skin, cooked, fried, batter"
, "Chicken, broilers or fryers, neck, meat and skin, cooked simmered"
, "Chicken, broilers or fryers, neck, meat only, raw"
, "Chicken, broilers or fryers, neck, meat and skin, cooked, fried, flour"
, "Chicken, broilers or fryers, neck, meat only, cooked, fried"
, "Chicken, broilers or fryers, neck, meat only, cooked, simmered"
, "Chicken, broilers or fryers, thigh, meat and skin, cooked, stewed"
, "Chicken, broilers or fryers, thigh, meat and skin, cooked, fried, batter"
, "Chicken, broilers or fryers, thigh, meat and skin, cooked, fried, flour"
, "Chicken, broilers or fryers, thigh, meat and skin, raw"
, "Chicken, broilers or fryers, thigh, meat and skin, cooked, roasted"
, "Chicken, broilers or fryers, thigh, meat only, cooked, fried"
, "Chicken, broilers or fryers, thigh, meat only, cooked, stewed"
, "Chicken, broilers or fryers, wing, meat only, cooked, stewed"
, "Chicken, broilers or fryers, thigh, meat only, cooked, roasted"
, "Chicken, roasting, dark meat, meat only, raw"
, "Chicken, broilers or fryers, thigh, meat only, raw"
, "Chicken, roasting, meat and skin and giblets and neck, raw"
, "Chicken, roasting, light meat, meat only, cooked, roasted"
, "Chicken, stewing, giblets, cooked, simmered"
, "Goose, domesticated, meat only, raw"
, "Turkey, all classes, dark meat, meat and skin, raw"
, "Turkey, all classes, meat only, cooked, roasted"
, "Chicken, capons, giblets, cooked, simmered"
, "Chicken, stewing, light meat, meat only, raw"
, "Quail, meat only, raw"
, "Turkey, all classes, neck, meat only, raw"
, "Turkey, liver, all classes, cooked, simmered"
, "Turkey, all classes, light meat, meat and skin, raw"
, "Turkey, all classes, dark meat, meat and skin, cooked, roasted"
, "Quail, breast, meat only, raw"
, "Turkey, all classes, skin only, raw"
, "Turkey, all classes, light meat, meat and skin, cooked, roasted"
, "Goose, domesticated, meat only, cooked, roasted"
, "Turkey, all classes, neck, meat only, cooked, simmered"
, "Duck, domesticated, meat and skin, raw"
, "Turkey, young tom, dark meat, meat only, cooked, roasted"
, "Turkey, young tom, skin only, raw"
, "Turkey, all classes, light meat, raw"
, "Turkey, fryer-roasters, meat and skin and giblets and neck, cooked, roasted"
, "Turkey, fryer-roasters, light meat, meat only, raw"
, "Turkey, fryer-roasters, wing, meat only, cooked, roasted"
, "Turkey, fryer-roasters, meat and skin and giblets and neck, raw"
, "Turkey breast, pre-basted, meat and skin, cooked, roasted"
, "Turkey, all classes, dark meat, cooked, roasted"
, "Turkey, young tom, back, meat and skin, raw"
, "Turkey, young hen, meat and skin and giblets and neck, raw"
, "Turkey, young hen, light meat, meat and skin, cooked, roasted"
, "Turkey, all classes, back, meat and skin, raw"
, "Turkey, young hen, breast, meat and skin, cooked, roasted"
, "Turkey, fryer-roasters, breast, meat only, raw"
, "Turkey, young hen, leg, meat and skin, raw"
, "Turkey, all classes, breast, meat and skin, cooked, roasted"
, "Turkey, diced, light and dark meat, seasoned"
, "Turkey, fryer-roasters, breast, meat and skin, cooked, roasted"
, "Turkey, all classes, dark meat, raw"
, "Turkey, canned, meat only, with broth"
, "Turkey, all classes, light meat, cooked, roasted"
, "Pate de foie gras, canned (goose liver pate), smoked"
, "Turkey, all classes, leg, meat and skin, cooked, roasted"
, "Turkey, all classes, leg, meat and skin, raw"
, "Turkey, all classes, wing, meat and skin, cooked, roasted"
, "Turkey, all classes, breast, meat and skin, raw"
, "Turkey and gravy, frozen"
, "Turkey, fryer-roasters, dark meat, meat and skin, cooked, roasted"
, "Turkey, young tom, meat only, cooked, roasted"
, "Turkey, all classes, back, meat and skin, cooked, roasted"
, "Turkey roast, boneless, frozen, seasoned, light and dark meat, roasted"
, "Turkey thigh, pre-basted, meat and skin, cooked, roasted"
, "Turkey patties, breaded, battered, fried"
, "Emu, inside drums, cooked, broiled"
, "Turkey, all classes, wing, meat and skin, raw"
, "Emu, inside drum, raw"
, "Turkey, young hen, dark meat, meat and skin, raw"
, "Turkey, fryer-roasters, meat and skin, raw"
, "Turkey roast, boneless, frozen, seasoned, light and dark meat, raw"
, "Chicken, cornish game hens, meat only, raw"
, "Duck, young duckling, domesticated, White Pekin, leg, meat only, bone in, cooked without skin, braised"
, "Chicken, cornish game hens, meat and skin, cooked, roasted"
, "Ostrich, top loin, cooked"

, "Ground turkey, 85% lean, 15% fat, pan-broiled crumbles"
, "Turkey bacon, cooked"
, "Pheasant, cooked, total edible"
, "Dove, cooked (includes squab)"
, "Turkey, light or dark meat, smoked, cooked, with skin, bone removed"
, "Turkey, wing, smoked, cooked, with skin, bone removed"
, "Turkey, drumstick, smoked, cooked, with skin, bone removed"
, "Turkey, light or dark meat, smoked, cooked, skin and bone removed"],
Saucal:[107
  , 158
  , 308
  , 455
  , 149
  , 182
  , 172
  , 344
  , 225
  , 104
  , 326
  , 307
  , 98
  , 163
  , 126
  , 362
  , 336
  , 261
  , 185
  , 260
  , 109
  , 230
  , 311
  , 86
  , 341
  , 243
  , 102
  , 225
  , 161
  , 98
  , 290
  , 84
  , 239
  , 80
  , 293
  , 388
  , 304
  , 161
  , 101
  , 109
  , 259
  , 301
  , 315
  , 396
  , 296
  , 149
  , 196
  , 305
  , 426
  , 223
  , 341
  , 235
  , 517
  , 307
  , 158
  , 186
  , 176
  , 79
  , 216
  , 158
  , 276
  , 297
  , 80
  , 95
  , 268
  , 425
  , 226
  , 134
  , 211
  , 326
  , 269
  , 122
  , 298
  , 95
  , 350
  , 327
  , 228
  , 278
  , 213
  , 336
  , 290
  , 112
  , 336
  , 272
  , 111
  , 176
  , 312
  , 133
  , 250
  , 147
  , 153
  , 124
  , 230
  , 230
  , 152
  , 407
  , 295
  , 241
  , 121
  , 310
  , 312],
Saum:[27
  , 56
  , 100
  , 28.35
  , 28.35
  , 23
  , 57
  , 83
  , 38
  , 33
  , 227
  , 72
  , 26
  , 56
  , 28
  , 56
  , 12.3
  , 26
  , 28
  , 23
  , 52
  , 16
  , 9
  , 28
  , 56
  , 30
  , 56
  , 46
  , 23
  , 45
  , 56
  , 28
  , 56
  , 52
  , 56
  , 27
  , 46
  , 56
  , 453.6
  , 57
  , 55
  , 76
  , 56
  , 100
  , 77
  , 84
  , 56
  , 55
  , 28.35
  , 57
  , 84
  , 56
  , 28
  , 77
  , 56
  , 66
  , 84
  , 42
  , 84
  , 56
  , 56
  , 66
  , 42
  , 57
  , 56
  , 28
  , 56
  , 56
  , 56
  , 52
  , 76
  , 55
  , 28
  , 28
  , 28
  , 56
  , 38
  , 52
  , 17
  , 28.35
  , 52
  , 48
  , 28
  , 28
  , 28
  , 28.35
  , 43
  , 28
  , 28.35
  , 71
  , 28
  , 138
  , 138
  , 151
  , 151
  , 45
  , 138
  , 147
  , 143
  , 138
  , 151],

Sau:["鸡肉肠", "火腿、切片、特瘦", "香肠、猪肉和牛肉", "火鸡卷，浅色和深色肉", "蜂蜜卷香肠，牛肉", "博洛尼亚牛肉猪肉香肠", "黎巴嫩博洛尼亚牛肉肠", "，猪肉淀粉肠", "香肠、意大利香肠、猪肉、熟的", "火鸡胸肉", "火鸡火腿、腌制火鸡大腿肉", "瑟林格、瑟维拉特、夏装香肠、牛肉、猪肉", "火鸡卷，淡肉", "波兰香肠、猪肉", "香肠，香肠，猪肉，牛肉", "火腿、切片、普通（约11%脂肪）", "萨拉米香肠、熟的、牛肉和猪肉", "萨拉米香肠、熟的、牛肉", "奥斯卡·迈尔，头奶酪", "午餐香肠、猪肉和牛肉", "奥斯卡梅耶，小香肠（猪肉，火鸡）", "奥斯卡梅耶鸡肉肠", "荷美尔枕包火鸡肉片香肠", "香肠，维也纳，罐装，鸡肉", "奥斯卡·梅尔，鸡胸肉香肠", "OSCAR MAYER，布伦瑞克肝肠", "新英格兰牌香肠", "火鸡（蜂蜜烤，不含脂肪）", "奥斯卡·迈耶，意大利腊肠", "LOUIS RICH，鸡胸肉经典烘焙/烧烤（雕刻板）", "路易·里奇，火鸡胸脯（烤箱烤，不含脂肪）", "午餐肉、猪肉、火腿和鸡肉、切碎、罐装、低钠、添加抗坏血酸、包括垃圾邮件、少25%钠", "奥斯卡·迈耶，萨拉米香肠", "火鸡法兰克香肠", "OSCAR MAYER，火鸡胸脯（熏制，无脂肪）", "荷美尔牧马人牛肉法兰克香肠", "牛肉香肠、低脂、熏制", "路易·里奇，火鸡熏香肠", "法兰克福香肠、不含脂肪", "奥斯卡·梅尔，夏香肠", "香肠、波兰香肠、猪肉和牛肉、熏制", "香肠、猪肉烟熏", "意大利腊肠、猪肉、少钠", "香肠、意大利香肠、甜味香肠、林克斯香肠", "香肠、波兰香肠", "午餐肉、猪肉和鸡肉、切碎、罐装、包括清汤", "肝肠酱", "香肠、夏令香肠、猪肉和牛肉", "烤牛肉酱", "午餐肉，火腿猪肉，切碎，罐装", "香肠、猪肉、牛肉和火鸡、清淡味、熏制", "培根牛肉棒", "香肠、火鸡、淡味", "香肠、小牛肉、熟的", "瑞士香肠、猪肉和牛肉、瑞士奶酪、烟熏", "香肠、意大利香肠、火鸡、熏制", "香肠、鸡肉、熟的", "鸡胸肉，烤箱烤，无脂肪，切片", "香肠、火鸡、热的、熏的", "香肠、鸡肉、牛肉、猪肉、去皮、熏制", "游艇香肠、开心果、熟的", "牛肉、猪肉和牛肉", "意大利腊肠，猪肉", "香肠、牛肉和猪肉、熏制", "鸡胸肉，无脂肪，墨西哥风味，切片", "烤鸡胸肉卷", "博洛尼亚，猪肉和火鸡肠，清淡", "Kielbasa、波兰牛肉、烟熏", "法兰克福香肠、牛肉、热的", "熏牛肉，98%不含脂肪", "火鸡、胸肉、烟熏、柠檬胡椒味、97%无脂肪", "肉酱，松露味", "火腿、熏的、熟的", "法兰克福猪肉肠", "意大利腊肠、猪肉干的、切片、少50%钠", "通心粉奶酪罐头", "博洛尼亚火鸡", "碎猪肉", "法兰克福香肠、肉、热的", "博洛尼亚牛肉肠", "博洛尼亚猪肉肠", "法兰克福，羊肉", "火鸡、白火鸡、烤肉圈、熟食", "博洛尼亚，腌制猪肉", "牛肉、腌制、薄片牛肉", "牛肉、腌制、午餐肉、果冻", "牛肉、腌制、熏制、剁碎牛肉", "牛肉、腌制、香肠、熟的、熏制", "牛肉、腌制、熏牛肉", "牛肉、腌制、咸牛肉、罐装", "博洛尼亚，牛肉和猪肉，低脂", "法兰克福，牛肉肠，低脂", "牛肉、腌制、干的", "法兰克福香肠、牛肉和猪肉、低脂", "猪肉香肠串、棕色和上菜、熟的", "香肠、鸡肉和牛肉、熏制", "法兰克福香肠、低脂", "火鸡火腿、切片、特瘦、预包装或熟食切片", "火鸡、猪肉和牛肉香肠、低脂、熏制", "牛肉、博洛尼亚","火鸡胸脯肉"

],
Sau2:["Ham, sliced, extra lean"
, "Chicken spread"
, "Bologna, beef and pork"
, "Chorizo, pork and beef"
, "Turkey roll, light and dark meat"
, "Honey roll sausage, beef"
, "Lebanon bologna, beef"
, "Sausage, Italian, pork, cooked"
, "Pickle and pimiento loaf, pork"
, "Turkey breast meat"
, "Polish sausage, pork"
, "Knackwurst, knockwurst, pork, beef"
, "Turkey roll, light meat"
, "Ham, sliced, regular (approximately 11% fat)"
, "Turkey ham, cured turkey thigh meat"
, "Thuringer, cervelat, summer sausage, beef, pork"
, "Salami, cooked, beef and pork"
, "Salami, cooked, beef"
, "OSCAR MAYER, Head Cheese"
, "Luncheon sausage, pork and beef"
, "OSCAR MAYER, Chicken Breast (honey glazed)"
, "Sausage, Vienna, canned, chicken, beef, pork"
, "OSCAR MAYER, Wieners Little (pork, turkey)"
, "OSCAR MAYER, Bologna (chicken, pork, beef)"
, "OSCAR MAYER, Braunschweiger Liver Sausage (saren tube)"
, "HORMEL Pillow Pak Sliced Turkey Pepperoni"
, "LOUIS RICH, Turkey (honey roasted, fat free)"
, "OSCAR MAYER, Salami (for beer)"
, "New england brand sausage, pork, beef"
, "LOUIS RICH, Chicken Breast Classic Baked /Grill (carving board)"
, "HORMEL WRANGLER Beef Franks"
, "LOUIS RICH, Turkey Breast (oven roasted, fat free)"
, "BUTCHER BOY MEATS, INC., Turkey Franks"
, "OSCAR MAYER, Turkey Breast (smoked, fat free)"
, "Luncheon meat, pork, ham, and chicken, minced, canned, reduced sodium, added ascorbic acid, includes SPAM, 25% less sodium"
, "OSCAR MAYER, Salami (Genoa)"
, "OSCAR MAYER, Summer Sausage Thuringer Cervalat"
, "LOUIS RICH, Turkey Smoked Sausage"
, "Turkey, pork, and beef sausage, low fat, smoked"
, "Frankfurter, beef, pork, and turkey, fat free"
, "Sausage, Polish, beef with chicken, hot"
, "Sausage, Polish, pork and beef, smoked"
, "Luncheon meat, pork with ham, minced, canned, includes SPAM (Hormel)"
, "Salami, pork, beef, less sodium"
, "Sausage, pork and beef, with cheddar cheese, smoked"
, "Sausage, Italian, sweet, links"
, "Luncheon meat, pork and chicken, minced, canned, includes SPAM Lite"
, "Liverwurst spread"
, "Sausage, summer, pork and beef, sticks, with cheddar cheese"
, "Roast beef spread"
, "Bratwurst, veal, cooked"
, "Sausage, turkey, breakfast links, mild"
, "Bacon and beef sticks"
, "Swisswurst, pork and beef, with swiss cheese, smoked"
, "Sausage, Italian, turkey, smoked"
, "Bratwurst, pork, beef and turkey, lite, smoked"
, "Bratwurst, chicken, cooked"
, "Chicken breast, oven-roasted, fat-free, sliced"
, "Sausage, chicken, beef, pork, skinless, smoked"
, "Sausage, turkey, hot, smoked"
, "Beerwurst, pork and beef"
, "Bratwurst, beef and pork, smoked"
, "Chicken breast, fat-free, mesquite flavor, sliced"
, "Pastrami, beef, 98% fat-free"
, "Yachtwurst, with pistachio nuts, cooked"
, "Salami, Italian, pork"
, "Kielbasa, Polish, turkey and beef, smoked"
, "Oven-roasted chicken breast roll"
, "Bologna, pork and turkey, lite"
, "Frankfurter, beef, heated"
, "Frankfurter, pork"
, "Ham, honey, smoked, cooked"
, "Bologna, chicken, turkey, pork"
, "Turkey, breast, smoked, lemon pepper flavor, 97% fat-free"
, "Salami, Italian, pork and beef, dry, sliced, 50% less sodium"
, "Pate, truffle flavor"
, "Macaroni and cheese loaf, chicken, pork and beef"
, "Frankfurter, meat, heated"
, "Scrapple, pork"
, "Bologna, pork, turkey and beef"
, "Frankfurter, meat"
, "Turkey, white, rotisserie, deli cut"
, "Bologna, chicken, pork"
, "Bologna, chicken, pork, beef"
, "Beef, cured, luncheon meat, jellied"
, "Beef, cured, thin-sliced beef"
, "Beef, cured, sausage, cooked, smoked"
, "Beef, cured, smoked, chopped beef"
, "Beef, cured, corned beef, canned"
, "Beef, cured, pastrami"
, "Beef, cured, dried"
, "Turkey ham, sliced, extra lean, prepackaged or deli-sliced"
, "Bologna, beef and pork, low fat"
, "Frankfurter, beef, low fat"
, "Frankfurter, beef and pork, low fat"
, "Pork sausage rice links, brown and serve, cooked"
, "Sausage, chicken and beef, smoked"
, "Turkey, pork, and beef sausage, reduced fat, smoked"
, "Frankfurter, meat and poultry, low fat"
, "Beef, bologna, reduced sodium"
,"Frankfurter, low sodium"],
Snacal:[410
  , 536
  , 518
  , 510
  , 523
  , 499
  , 565
  , 446
  , 479
  , 456
  , 495
  , 432
  , 583
  , 438
  , 404
  , 471
  , 458
  , 397
  , 426
  , 466
  , 491
  , 448
  , 387
  , 384
  , 547
  , 443
  , 506
  , 544
  , 400
  , 380
  , 531
  , 509
  , 431
  , 526
  , 502
  , 514
  , 380
  , 387
  , 362
  , 501
  , 462
  , 392
  , 462
  , 484
  , 407
  , 480
  , 342
  , 341
  , 373
  , 415
  , 385
  , 325
  , 396
  , 338
  , 463
  , 402
  , 496
  , 424
  , 378
  , 386
  , 347
  , 343
  , 496
  , 386
  , 422
  , 491
  , 491
  , 363
  , 375
  , 403
  , 527
  , 451
  , 455
  , 531
  , 375
  , 424
  , 402
  , 463
  , 363
  , 491
  , 386
  , 347
  , 378
  , 422
  , 415
  , 396
  , 343
  , 403
  , 386
  , 527
  , 325
  , 496
  , 455
  , 451
  , 385
  , 338
  , 531
  , 496
  , 491
  , 536
  , 392
  , 531
  , 469
  , 464
  , 338
  , 503
  , 557
  , 377
  , 429
  , 465],
Snam:[28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 57
  , 28.35
  , 28
  , 11
  , 28.35
  , 28
  , 25
  , 28.35
  , 28.35
  , 28
  , 35
  , 28.35
  , 43
  , 8
  , 10
  , 28.35
  , 28
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 11
  , 28.35
  , 28.35
  , 9
  , 9
  , 28.35
  , 28.35
  , 28.35
  , 9
  , 150
  , 146
  , 140
  , 28.35
  , 21
  , 26
  , 28
  , 24
  , 28.35
  , 22
  , 55
  , 143
  , 28
  , 28.35
  , 28.35
  , 28.35
  , 55
  , 55
  , 22
  , 55
  , 28.35
  , 55
  , 55
  , 28.35
  , 28.35
  , 68
  , 28.35
  , 48
  , 28.35
  , 20
  , 35
  , 28.35
  , 28.35
  , 28.35
  , 28.35
  , 28
  , 68
  , 28.35
  , 55
  , 22
  , 55
  , 55
  , 24
  , 55
  , 55
  , 48
  , 55
  , 28.35
  , 22
  , 28.35
  , 35
  , 20
  , 28.35
  , 143
  , 28.35
  , 28.35
  , 28.35
  , 28.35

  , 4.2
  , 28.35
  , 34
  , 43
  , 143
  , 26
  , 88
  , 28.35
  , 28.35
  , 63],
Sna:["膨化玉米食品", "零食膨化玉米薯条，原味", "小吃，玉米为主，膨化，洋葱味", "零食，玉米为主，膨化，圆锥形，原味", "小吃，玉米为主，膨化，薯条，烧烤风味", "小吃、玉米基、挤压、膨化或扭曲、奶酪味", "小吃、牛肉干、剁碎和成型", "小吃，格兰诺拉麦片，硬的，加花生", "小吃，花生碎，原味", "零食，卡夫玉米仁，原味", "小吃、麦片粥、软的、无涂层的、花生酱和巧克力片", "小吃，格兰诺拉麦片，硬的，普通的", "小吃，格兰诺拉麦片，硬的，杏仁", "小吃，爆米花，炸油，普通口味", "小吃，麦片，硬的，巧克力片", "小吃，脆米条，巧克力片", "小吃，椒盐脆饼，硬的，糖衣，巧克力味", "零食，格兰诺拉麦片，软的，无涂层，花生酱", "小吃、格兰诺拉麦片、燕麦、水果和坚果", "零食，格兰诺拉麦片，软的，有涂层的，牛奶巧克力涂层，巧克力片", "零食，格兰诺拉麦片，软的，无涂层，葡萄干", "小吃、薯条、干土豆、酸奶油和洋葱味", "小吃，格兰诺拉麦片，软的，无涂层，原味", "零食、爆米花、爆米花", "小吃，爆米花，蛋糕", "小吃、薯条、烧烤味", "小吃，米糕", "小吃，猪皮，原味", "小吃，爆米花，涂焦糖，花生", "小吃、椒盐脆饼、硬的、纯的、咸的", "小吃、薯条、酸奶油和洋葱味", "零食、爆米花、涂焦糖、不含花生", "零食，格兰诺拉麦片，软的，有涂层的，牛奶巧克力涂层，花生酱", "小吃、爆米花、奶酪味", "零食，玉米片，玉米片奶酪", "零食，薯条，干土豆制成，减脂", "小吃、年糕、糙米、荞麦", "小吃、年糕、糙米、原味", "小吃，椒盐脆饼，硬的，全麦", "小吃，玉米片，牧场风味", "小吃，玉米饼片，墨西哥风味", "小吃，混合小吃，普通，含巧克力片、咸坚果和种子", "小吃、年糕、糙米、芝麻", "小吃，套餐小吃切达奶酪椒盐脆饼", "小吃，混合水果沙拉小吃，普通", "小吃，烤酸奶", "零食，通用磨坊，贝蒂·克罗克水果卷，浆果味，含维生素C", "小吃，玛莎玛莎，全麦棒，玛莎牛奶巧克力", "零食，法利糖果，法利水果零食，含维生素A，C，E", "零食，SUNKIST，SUNKIST水果卷，草莓，含维生素A、C和E", "小吃、豆片或薯片、咸的", "配方棒，火星蛇食美国，斯奈克斯马拉松咀嚼巧克力花生棒", "小吃，玛莎玛莎，全麦条，花生酱", "零食、爆米花、94%无脂肪", "火星蛇食美国，可可，巧克力蓝莓小吃吧", "椒盐脆饼，软的，不加盐", "配方酒吧，火星蛇食美国，斯尼克马拉松能量酒吧，所有口味", "配方酒吧，火星蛇食美国，斯尼克马拉松蜂蜜坚果燕麦", "小吃，煎饼，炸薯条，杂粮，法式洋葱味", "零食、爆米花、低脂", "小吃，红薯片", "配方酒吧，火星蛇食美国，斯奈克斯马拉松多粒脆吧", "火星蛇食美国，可可，巧克力杏仁", "配方棒，火星蛇食美国，斯尼克马拉松双巧克力坚果棒", "配方棒、超薄OPTIMA餐棒、牛奶巧克力花生", "小吃，煎饼，炸薯条，杂粮小吃，原味", "小吃，弗里多利，炸薯条，杂粮小吃，丰收切达风味", "配方棒，露娜棒，坚果巧克力", "配方棒、巧克力", "零食、爆米花、未加工的谷粒", "小吃、格兰诺拉麦片、软糖、杏仁、糖果涂层", "零食、爆米花、低脂", "零食、爆米花、普通（黄油）风味、用部分氢化油制成", "零食、爆米花、未加工的谷粒", "小吃，芭蕉片，咸的", "小吃，玛莎玛莎，全麦条，花生酱", "配方棒、电源棒、巧克力", "小吃，煎饼，炸薯条，杂粮小吃，原味", "零食、爆米花、94%无脂肪", "小吃、格兰诺拉麦片、混合口味", "小吃，玛莎玛莎，全麦棒，玛莎牛奶巧克力", "配方酒吧，火星蛇食美国，斯奈克斯马拉松多粒脆", "配方吧，火星蛇食美国，可可，巧克力杏仁小吃吧", "配方棒、牛奶巧克力花生", "斯尼克马拉松蜂蜜坚果燕麦", "斯尼克马拉松双巧克力坚果棒", "斯奈克斯马拉松咀嚼巧克力花生棒", "配方棒，露娜棒，坚果巧克力", "斯尼克马拉松能量酒，所有口味", "零食、爆米花、普通（黄油）风味、用部分氢化油制成", "配方吧，火星蛇食美国，可可，巧克力蓝莓小吃吧", "小吃，红薯片", "小吃、豆片或薯片、咸的", "椒盐脆饼，软的，不加盐", "小吃、格兰诺拉麦片、软糖、杏仁、糖果涂层", "小吃、格兰诺拉麦片、混合口味", "小吃，煎饼，炸薯条，杂粮，法式洋葱味", "小吃，弗里多利，炸薯条，杂粮小吃，丰收切达风味", "麦片棒，软，牛奶巧克力涂层，花生酱", "小吃，芭蕉片，咸的","椒盐脆饼，软的", "米糕、饼干（含小米糕）", "零食、薯条、白的、重组的、烘焙的", "小吃，玉米片，不加盐，白玉米", "早餐吧，玉米片果皮", "小吃，格兰诺拉麦片，椰子，巧克力涂层", "早餐吧，燕麦，糖，葡萄干，椰子（包括格兰诺拉麦片吧）", "零食，玉米为主，膨化，薯条，不含盐", "爆米花低脂和钠", "零食，玉米饼片，清淡（少油烘焙）"],
Sna2:["Snacks, beef jerky, chopped and formed"
, "Snacks, corn-based, extruded, cones, nacho-flavor"
, "Snacks, corn-based, extruded, chips, plain"
, "Snacks, corn-based, extruded, cones, plain"
, "Snacks, corn-based, extruded, chips, barbecue-flavor"
, "Snacks, corn-based, extruded, onion-flavor"
, "Snacks, corn-based, extruded, puffs or twists, cheese-flavor"
, "Snacks, KRAFT, CORNNUTS, plain"
, "Snacks, granola bars, hard, peanut"
, "Snacks, DOO DADS snack mix, original flavor"
, "Snacks, granola bars, hard, almond"
, "Snacks, granola bars, soft, uncoated, peanut butter and chocolate chip"
, "Snacks, popcorn, oil-popped, microwave, regular flavor"
, "Snacks, granola bars, hard, chocolate chip"
, "Snacks, crisped rice bar, chocolate chip"
, "Snacks, granola bars, hard, plain"
, "Snacks, pretzels, hard, confectioner's coating, chocolate-flavor"
, "Snacks, granola bars, oats, fruits and nut"
, "Snacks, granola bars, soft, uncoated, peanut butter"
, "Snacks, granola bars, soft, coated, milk chocolate coating, chocolate chip"
, "Snacks, potato chips, barbecue-flavor"
, "Snacks, granola bars, soft, uncoated, raisin"
, "Snacks, popcorn, air-popped"
, "Snacks, popcorn, cakes"
, "Snacks, potato chips, made from dried potatoes, sour-cream and onion-flavor"
, "Snacks, granola bars, soft, uncoated, plain"
, "Snacks, oriental mix, rice-based"
, "Snacks, pork skins, plain"
, "Snacks, popcorn, caramel-coated, with peanuts"
, "Snacks, pretzels, hard, plain, salted"
, "Snacks, potato chips, sour-cream-and-onion-flavor"
, "Snacks, granola bars, soft, coated, milk chocolate coating, peanut butter"
, "Snacks, popcorn, caramel-coated, without peanuts"
, "Snacks, popcorn, cheese-flavor"
, "Snacks, potato chips, made from dried potatoes, reduced fat"
, "Snacks, tortilla chips, nacho cheese"
, "Snacks, rice cakes, brown rice, buckwheat"
, "Snacks, rice cakes, brown rice, plain"
, "Snacks, pretzels, hard, whole-wheat"
, "Snacks, tortilla chips, ranch-flavor"
, "Snacks, M&M MARS, COMBOS Snacks Cheddar Cheese Pretzel"
, "Snacks, rice cakes, brown rice, sesame seed"
, "Snacks, trail mix, regular"
, "Snacks, trail mix, regular, with chocolate chips, salted nuts and seeds"
, "Snacks, trail mix, tropical"
, "Snacks, tortilla chips, taco-flavor"
, "Snacks, SUNKIST, SUNKIST Fruit Roll, strawberry, with vitamins A, C, and E"
, "Snacks, FARLEY CANDY, FARLEY Fruit Snacks, with vitamins A, C, and E"
, "Snacks, GENERAL MILLS, BETTY CROCKER Fruit Roll Ups, berry flavored, with vitamin C"
, "Snacks, M&M MARS, KUDOS Whole Grain Bar, M&M's milk chocolate"
, "Snacks, soy chips or crisps, salted"
, "Formulated bar, MARS SNACKFOOD US, COCOAVIA, Chocolate Blueberry Snack Bar"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Chewy Chocolate Peanut Bar"
, "Pretzels, soft, unsalted"
, "Snacks, M&M MARS, KUDOS Whole Grain Bars, peanut butter"
, "Snacks, popcorn, microwave, 94% fat free"
, "Snacks, FRITOLAY, SUNCHIPS, multigrain, French onion flavor"
, "Snacks, popcorn, microwave, low fat"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Honey Nut Oat Bar"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Energy Bar, all flavors"
, "Formulated bar, MARS SNACKFOOD US, COCOAVIA, Chocolate Almond Snack Bar"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Double Chocolate Nut Bar"
, "Snacks, sweet potato chips"
, "Formulated bar, SLIM-FAST OPTIMA meal bar, milk chocolate peanut"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON MULTIGRAIN CRUNCH BAR"
, "Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, Harvest Cheddar flavor"
, "Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, original flavor"
, "Formulated bar, POWER BAR, chocolate"
, "Snacks, popcorn, unpopped kernels"
, "Formulated bar, LUNA BAR, NUTZ OVER CHOCOLATE"
, "Snacks, popcorn, microwave, regular (butter) flavor, made with partially hydrogenated oil"
, "Snacks, granola bites, mixed flavors"
, "Snacks, granola bars, soft, almond, confectioners coating"
, "Snacks, plantain chips, salted"
, "Snacks, popcorn, unpopped kernels"
, "Snacks, popcorn, microwave, low fat"
, "Snacks, popcorn, microwave, 94% fat free"
, "Snacks, M&M MARS, KUDOS Whole Grain Bars, peanut butter"
, "Formulated bar, POWER BAR, chocolate"
, "Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, original flavor"
, "Formulated bar, SLIM-FAST OPTIMA meal bar, milk chocolate peanut"
, "Formulated bar, MARS SNACKFOOD US, COCOAVIA, Chocolate Almond Snack Bar"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Honey Nut Oat Bar"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON MULTIGRAIN CRUNCH BAR"
, "Snacks, M&M MARS, KUDOS Whole Grain Bar, M&M's milk chocolate"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Chewy Chocolate Peanut Bar"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Double Chocolate Nut Bar"
, "Formulated bar, LUNA BAR, NUTZ OVER CHOCOLATE"
, "Formulated bar, MARS SNACKFOOD US, SNICKERS Marathon Energy Bar, all flavors"
, "Snacks, popcorn, microwave, regular (butter) flavor, made with partially hydrogenated oil"
, "Formulated bar, MARS SNACKFOOD US, COCOAVIA, Chocolate Blueberry Snack Bar"
, "Snacks, sweet potato chips"
, "Snacks, granola bars, soft, almond, confectioners coating"
, "Snacks, granola bites, mixed flavors"
, "Snacks, soy chips or crisps, salted"
, "Pretzels, soft, unsalted"
, "Snacks, plantain chips, salted"
, "Snacks, FRITOLAY, SUNCHIPS, multigrain, French onion flavor"
, "Snacks, FRITOLAY, SUNCHIPS, Multigrain Snack, Harvest Cheddar flavor"
, "Granola bar, soft, milk chocolate coated, peanut butter"

, "Rice cake, cracker (include hain mini rice cakes)"
, "Snacks, granola bar, with coconut, chocolate coated"
, "Snacks, potato chips, white, restructured, baked"
, "Breakfast bars, oats, sugar, raisins, coconut (include granola bar)"
, "Pretzels, soft"
, "Snacks, tortilla chips, unsalted, white corn"
, "Snacks, corn-based, extruded, chips, unsalted"
, "Breakfast bar, corn flake crust with fruit"
, "Popcorn, microwave, low fat and sodium"
, "Snacks, tortilla chips, light (baked with less oil)"] ,
Soucal:[63
  , 67
  , 61
  , 64
  , 7
  , 37
  , 56
  , 59
  , 53
  , 52
  , 28
  , 32
  , 24
  , 81
  , 48
  , 50
  , 59
  , 65
  , 71
  , 125
  , 52
  , 50
  , 41
  , 51
  , 74
  , 64
  , 65
  , 48
  , 44
  , 37
  , 37
  , 267
  , 16
  , 198
  , 63
  , 71
  , 37
  , 293
  , 49
  , 39
  , 109
  , 60
  , 51
  , 48
  , 7
  , 58
  , 11
  , 70
  , 96
  , 377
  , 65
  , 64
  , 68
  , 35
  , 325
  , 46
  , 58
  , 367
  , 79
  , 50
  , 12
  , 52
  , 71
  , 47
  , 56
  , 82
  , 46
  , 43
  , 79
  , 404
  , 80
  , 374
  , 57
  , 65
  , 442
  , 426
  , 433
  , 75
  , 68
  , 77
  , 56
  , 56
  , 65
  , 79
  , 391
  , 69
  , 62
  , 78
  , 64
  , 55
  , 81
  , 94
  , 76
  , 53
  , 56
  , 86
  , 59
  , 63
  , 34
  , 119

  , 56
  , 42
  , 81
  , 74
  , 78
  , 63
  , 79
  , 103
  , 63
  , 55
  , 78
  , 84
  , 82
  , 87
  , 68
  , 44
  , 141
  , 53
  , 12
  , 86
  , 57
  , 74
  , 82
  , 53
  , 57
  , 95
  , 49
  , 78
  , 24
  , 54
  , 41
  , 21
  , 24
  , 45
  , 61
  , 5
  , 49
  , 42
  , 54
  , 52
  , 28
  , 45
  , 37
  , 41
  , 28
  , 34
  , 22
  , 52
  , 45
  , 84
  , 87
  , 436
  , 52
  , 23
  , 30
  , 57
  , 30
  , 33
  , 33
  , 12
  , 4
  , 30
  , 50
  , 38
  , 45
  , 33
  , 78
  , 43
  , 25
  , 7
  , 47
  , 51
  , 25
  , 40
  , 40
  , 26
  , 20
  , 62
  , 24
  , 25
  , 53
  , 140
  , 77
  , 174
  , 87
  , 62
  , 80
  , 5
  , 20
  , 33
  , 30
  , 21
  , 62
  , 53
  , 380
  , 409
  , 16
  , 369
  , 25
  , 54

  , 65
  , 343
  , 78
  , 16
  , 104
  , 104
  , 69
  , 69
  , 150
  , 87
  , 53
  , 271
  , 98
  , 438
  , 436
  , 437
  , 4
  , 56
  , 56
  , 39
  , 48
  , 78
  , 53
  , 34
  , 49
  , 57
  , 95
  , 49
  , 84
  , 33
  , 45
  , 78
  , 38
  , 45
  , 7
  , 30
  , 24
  , 12
  , 23
  , 25
  , 28
  , 5
  , 57
  , 72
  , 48
  , 8
  , 42
  , 79
  , 63
  , 54
  , 73
  , 68
  , 42
  , 32
  , 39
  , 69
  , 57
  , 102
  , 53
  , 27
  , 82
  , 49
  , 86
  , 71
  , 53
  , 71
  , 49
  , 53
  , 47
  , 47
  , 31
  , 53
  , 54
  , 350
  , 48
  , 47
  , 41
  , 27
  , 39
  , 102
  , 53
  , 69
  , 49
  , 53
  , 32
  , 57
  , 71
  , 82
  , 49
  , 53
  , 53
  , 71
  , 86
  , 47
  , 31
  , 54
  , 47
  , 41
  , 47
  , 48
  , 350],
Soum:[126
  , 125
  , 126
  , 326
  , 240
  , 245
  , 126
  , 126
  , 240
  , 126
  , 123
  , 244
  , 126
  , 124
  , 123
  , 126
  , 123
  , 123
  , 3.6
  , 128
  , 240
  , 251
  , 126
  , 126
  , 9.2
  , 126
  , 129
  , 126
  , 3.6
  , 245
  , 123
  , 4
  , 124
  , 4.8
  , 126
  , 126
  , 233
  , 7.5
  , 103
  , 128
  , 126
  , 124
  , 265
  , 305
  , 240
  , 8
  , 4.7
  , 18
  , 129
  , 74
  , 238
  , 21
  , 6.7
  , 18
  , 1.2
  , 126
  , 238
  , 6
  , 238
  , 250
  , 4.7
  , 251
  , 253
  , 126
  , 124
  , 126
  , 216
  , 126
  , 248
  , 124
  , 125
  , 124
  , 126
  , 124
  , 248
  , 130
  , 124
  , 130
  , 252
  , 130
  , 124
  , 124
  , 125
  , 130
  , 130
  , 125
  , 130
  , 125
  , 125
  , 245
  , 245
  , 254
  , 59
  , 124
  , 126
  , 253
  , 252
  , 245
  , 59
  , 59

  , 124
  , 59
  , 124
  , 126
  , 126
  , 126
  , 251
  , 126
  , 126
  , 252
  , 245
  , 245
  , 245
  , 126
  , 245
  , 245
  , 128
  , 245
  , 124
  , 245
  , 245
  , 245
  , 245
  , 245
  , 245
  , 245
  , 245
  , 245
  , 240
  , 298
  , 245
  , 305
  , 241
  , 245
  , 259
  , 243
  , 245
  , 245
  , 244
  , 245
  , 241
  , 245
  , 245
  , 261
  , 244
  , 244
  , 245
  , 245
  , 245
  , 245
  , 303
  , 43
  , 305
  , 245
  , 248
  , 245
  , 245
  , 305
  , 253
  , 230
  , 241
  , 249
  , 247
  , 265
  , 245
  , 245
  , 245
  , 305
  , 248
  , 249
  , 305
  , 305
  , 32
  , 60
  , 305
  , 305
  , 305
  , 305
  , 305
  , 32
  , 298
  , 326
  , 539
  , 63
  , 128
  , 539
  , 539
  , 235
  , 245
  , 253
  , 248
  , 245
  , 259
  , 244
  , 454
  , 6.7
  , 244
  , 6.7
  , 248
  , 130
 
  , 303
  , 39
  , 275
  , 240
  , 273
  , 273
  , 251
  , 241
  , 35
  , 128
  , 236
  , 288
  , 240
  , 2.6
  , 43
  , 43
  , 227
  , 124
  , 124
  , 57
  , 126
  , 245
  , 245
  , 244
  , 245
  , 245
  , 245
  , 245
  , 245
  , 253
  , 245
  , 245
  , 265
  , 245
  , 249
  , 249
  , 241
  , 230
  , 245
  , 248
  , 241
  , 243
  , 245
  , 130
  , 126
  , 59
  , 59
  , 126
  , 120
  , 130
  , 124
  , 59
  , 59
  , 223
  , 233
  , 245
  , 245
  , 245
  , 245
  , 241
  , 245
  , 245
  , 245
  , 126
  , 245
  , 126
  , 245
  , 245
  , 32
  , 32
  , 32
  , 245
  , 130
  , 40
  , 124
  , 32
  , 245
  , 241
  , 233
  , 245
  , 245
  , 245
  , 245
  , 245
  , 223
  , 245
  , 126
  , 245
  , 245
  , 245
  , 245
  , 126
  , 245
  , 32
  , 32
  , 130
  , 32
  , 245
  , 32
  , 124
  , 40],
Sou:["汤、蛤蜊杂烩汤、罐装、浓缩", "汤、牛肉汤或肉汤罐装、即可食用", "汤、牛肉面、罐装、浓缩", "汤、猪肉豆汤、罐装、浓缩", "汤、粗鸡肉面、罐装、即可食用", "汤、意大利通心粉、罐装、大块、即可食用", "金宝汤公司，健康要求，鸡肉配米饭，浓缩", "汤、奶油芦笋汤、罐装、浓缩", "汤、鸡肉面、罐装、浓缩", "金宝汤公司，金宝红白汤，牛肉蘑菇汤，浓缩", "汤、通心粉、罐装、浓缩", "金宝汤公司，金宝红白汤，切达奶酪汤，浓缩", "汤、螃蟹、罐装、即食", "汤、炖牡蛎汤、罐装、浓缩", "金宝汤公司，金宝红白汤，鸡肉汤和饺子汤，浓缩", "汤、胡椒锅、罐装、浓缩", "汤、蔬菜配牛肉汤、罐装、浓缩", "汤、素食蔬菜汤、罐装、浓缩", "汤、牛肉汤", "汤、豌豆汤、绿色、罐装、浓缩", "汤、番茄牛肉面汤、罐装、浓缩", "金宝汤公司，金宝红白汤，鸡肉字母汤，浓缩", "汤、奶油土豆汤、罐装、浓缩", "金宝汤公司，金宝红白汤，鸡汤面，浓缩", "汤、牛肉面、混合", "汤、汤锅、罐装、浓缩", "金宝汤公司，金宝红白汤，鸡汤，浓缩", "汤、豌豆汤、火腿汤、罐装、粗粒、即可食用", "汤、大块蔬菜、罐装、即可食用", "汤、牛肉汤或肉汤、粉末", "汤、鸡汤或肉汤", "汤、苏格兰肉汤、罐装、浓缩", "汤、鸡汤块、干的", "肉汁、牛肉、罐装、即可食用", "金宝汤公司，金宝红白汤，鸡肉蔬菜汤，浓缩", "金宝汤公司，金宝红白汤，鸡汤，浓缩", "沙司，索菲托，按配方制作", "汤、洋葱汤、混合汤", "金宝汤公司，金宝红白汤，豆角培根汤，浓缩", "金宝汤公司，金宝红白汤，牛肉清汤，浓缩", "沙司、李子、即可食用", "汤、鸡肉蘑菇汤、罐装、浓缩", "沙司、葡萄汁、单一品牌", "肉汁、鸡肉", "调味汁，即食，胡椒或辣", "汤、鸡汤、罐装、少钠/低钠", "汤、番茄汤、罐装、浓缩", "汤、奶油蔬菜汤、粉汤", "汤、番茄浓汤、罐装、浓缩", "汤、鸡肉面、混合", "肉汁、蘑菇汁、干的、粉末状", "沙司、鱼、即食", "肉汁、火鸡、罐装、即可食用", "肉汁、猪肉、粉末", "汤、牛肉蘑菇汤、罐装、浓缩", "肉汁、棕色", "汤、番茄蔬菜汤、混合汤", "肉汁、蘑菇、罐装", "肉汁、鸡肉、罐装、即可食用", "酱汁、烧烤", "金宝汤公司，金宝红白汤，牛肉配蔬菜和大麦汤，浓缩", "沙司，即食，胡椒，塔巴斯科", "豌豆汤，罐装，低钠，加水或即食", "汤、奶油芦笋汤、罐装、用等体积牛奶配制", "金宝汤公司，金宝红白汤，98%无脂西兰花奶油汤，浓缩", "汤、奶油蘑菇汤、罐装、浓缩、低钠", "金宝汤公司，金宝红白汤，牛肉面汤，浓缩", "汤、鱼翅、餐厅准备", "金宝汤公司，金宝红白，25%低钠鸡汤面，浓缩", "金宝汤公司，金宝红白汤，25%少钠奶油蘑菇汤，浓缩", "金宝汤公司，金宝红白汤，25%少钠番茄汤，浓缩", "汤、奶油鸡肉汤、罐装、用等体积牛奶配制", "金宝汤公司，金宝红白，浓缩", "金宝汤公司，有机蘑菇意大利酱，即食", "金宝汤公司，厚园蘑菇意大利，即食", "金宝汤公司，健康要求，奶油鸡汤，浓缩", "金宝汤公司，金宝红白汤，98%无脂西兰花奶酪汤，浓缩", "金宝汤公司，PREGO意大利面，新鲜蘑菇意大利酱，即食", "汤、蛤蜊杂烩汤、新英格兰、罐装、用等量低脂（2%）牛奶配制", "金宝汤公司，PREGO意大利面，迷你肉丸意大利酱，即食", "金宝汤公司，PREGO意大利面，蘑菇和意大利干酪酱，即可食用", "金宝汤公司，PREGO意大利面，大块的花园蘑菇和青椒意大利沙司，即食", "金宝汤公司，PREGO意大利面，大蒜意大利酱，即食", "金宝汤公司，金宝红白，98%无脂奶油芹菜汤，浓缩", "金宝汤公司，PREGO意大利面，有机番茄和罗勒意大利沙司，即食", "金宝汤公司，金宝红白，98%无脂奶油鸡汤，浓缩", "金宝汤公司，PREGO意大利面，意大利香肠和大蒜意大利沙司，即食", "金宝汤公司，PREGO意大利面，番茄，罗勒和大蒜意大利沙司，即食", "汤、炖牡蛎汤、罐装、用等体积牛奶配制", "金宝汤公司，PREGO意大利面，蘑菇和大蒜意大利酱，即食", "坎贝尔汤公司，坎贝尔乡村风味奶油肉汁", "汤、豌豆汤、绿色、罐装、用等体积牛奶配制", "金宝汤公司，金宝红白汤，奶油芦笋汤，浓缩", "汤、奶油虾汤、罐装、用等体积低脂（2%）牛奶配制", "金宝汤公司，金宝红白汤，鸡肉配米汤，浓缩", "坎贝尔汤公司，坎贝尔的厚微波碗，牛肉乡村蔬菜汤，即食", "坎贝尔汤公司，坎贝尔的厚微波碗，经典鸡肉面条，即食", "汤、奶油蘑菇汤、罐装、用等体积低脂（2%）牛奶配制", "坎贝尔汤公司，坎贝尔乡村风味香肠肉汁", "坎贝尔汤公司，法国-美国无脂慢烤鸡肉汁","坎贝尔汤公司，法裔美国人慢烤牛肉肉汁", "金宝汤公司，金宝红白汤，奶油蘑菇配烤大蒜汤，浓缩", "金宝汤公司，金宝红白，丹尼幻影面食，鸡汤鸡肉，浓缩", "金宝汤公司，金宝红白，鸡汤双面条，浓缩", "金宝汤公司，金宝红白汤，多拉探险家儿童汤，浓缩", "金宝汤公司，金宝红白汤，奶油蘑菇汤，浓缩", "汤、番茄浓汤、罐装、用等体积牛奶配制", "汤、番茄汤、罐装、用等体积低脂（2%）牛奶配制", "金宝汤公司，金宝红白汤，番茄汁，浓缩", "金宝汤公司，金宝红白汤，牡蛎炖，浓缩", "金宝汤公司，金宝红白，西南风鸡蔬汤，浓缩", "金宝汤公司，金宝粗汤，烤肉调味汉堡汤", "金宝汤公司，金宝汤，烤土豆切达培根汤", "金宝汤公司，金宝粗汤，烤牛肋排土豆香草汤", "金宝汤公司，金宝大块汤，烧烤调味猪肉汤", "金宝汤公司，金宝红白汤，豌豆火腿培根汤，浓缩", "金宝汤公司，金宝大块汤，烤土豆配牛排和奶酪汤", "金宝汤公司，金宝汤，牛肉乡村蔬菜汤", "金宝汤公司，金宝汤，鸡西兰花奶酪和土豆汤", "金宝汤公司，金宝红白汤，牛肉汤，浓缩", "金宝汤公司，金宝汤，牛肉白饭和野生米汤", "金宝汤公司，金宝粗汤，法吉塔鸡饭豆汤", "金宝汤公司，金宝汤，鸡肉汤", "金宝汤公司，金宝粗汤，烤鸡香肠秋葵汤", "金宝汤公司，金宝粗汤，火炉-辣牛肉和豆瓣辣椒", "金宝汤公司，金宝汤，经典鸡汤", "金宝汤公司，金宝汤，鸡蘑菇杂烩", "汤、鸡肉饭、干汤、混合汤、用水配制", "金宝汤公司，金宝粗汤，鸡肉玉米杂烩", "金宝汤公司，金宝低钠汤，奶油蘑菇汤", "金宝汤公司，金宝精选汤，番茄花园汤", "汤、鸡汤块、干的、用水配制", "金宝汤公司，金宝汤，白米汤鸡", "金宝汤公司，金宝汤在手，鸡星汤", "汤、炖牡蛎汤、罐装、等体积水配制", "汤、豌豆汤、绿色、罐装、等体积水配制", "金宝汤公司，金宝粗汤，健康要求蔬菜汤", "金宝汤公司，金宝精选金标汤，奶油波尔图贝罗蘑菇汤", "汤、鸡肉蘑菇汤、罐装、等体积水配制", "金宝汤公司，金宝精选微波碗，墨西哥风味鸡肉玉米饼汤", "汤、奶油鸡肉汤、干汤、混合汤、用水配制", "金宝汤公司，金宝精选汤，长粒烤鸡和野生米汤", "汤、素食蔬菜汤、罐装、等体积水配制", "金宝汤公司，金宝精选金标汤，金毛南瓜汤", "汤、牛肉面、罐装、等体积水配制", "汤、牛尾汤、干汤、混合汤、用水配制", "金宝汤公司，金宝大块汤，烤玉米杂烩熏鸡", "汤、番茄蔬菜汤、干汤、混合汤、用水配制", "金宝汤公司，金宝精选汤，98%无脂新英格兰蛤蜊杂烩", "金宝汤公司，金宝大块汤，曼哈顿蛤蜊杂烩", "汤、番茄汤、罐装、等体积水制备、商用", "汤、西兰花奶酪、罐装、浓缩、商用", "金宝汤公司，金宝低钠汤，鸡肉面条汤", "汤、拉面、任何口味、干的", "汤、鸡肉面、干汤、混合、用水配制", "金宝汤公司，金宝汤，索尔兹伯里牛排蘑菇洋葱汤", "金宝汤公司、鸡汤面", "汤、洋葱汤、干汤、混合汤、用水配制", "汤、蘑菇汤、干汤、混合汤、用水配制", "金宝汤公司，金宝汤在手，混合蔬菜混合汤", "汤、番茄汤、干汤、混合汤、用水配制", "汤、鸡汤或肉汤、干的、用水配制", "汤、蛤蜊杂烩汤、曼哈顿汤、罐装、等体积水配制", "汤、番茄浓汤、罐装、等体积水配制", "金宝汤公司，金宝汤在手，奶油鸡汤", "金宝汤公司，金宝精选汤，蔬菜混合汤", "金宝汤公司，金宝粗汤，豌豆火腿汤", "汤、鸡肉面、罐装、等体积水配制", "汤、清汤和明胶、干汤、混合、用水配制", "金宝汤公司，金宝汤，丰盛鸡肉蔬菜汤", "金宝汤公司，金宝汤在手，奶油西兰花汤", "金宝汤公司，金宝汤在手，小面鸡汤", "金宝汤公司，金宝汤在手，天鹅绒土豆汤", "金宝汤公司，金宝汤在手，新英格兰蛤蜊杂烩", "坎贝尔汤公司，佩斯，香菜粗沙司", "金宝汤公司，佩斯，Enchilada沙司", "金宝汤公司，金宝汤在手，奶油番茄汤", "金宝汤公司，金宝汤在手，蔬菜牛肉汤", "金宝汤公司，金宝汤在手，意式婚礼汤", "金宝汤公司，佩斯，Chipotle Chunky Salsa", "沙司、意大利面、意大利面/意大利卤汁、即可食用", "汤、大块牛肉配乡村蔬菜、即可食用", "沙司、奶酪、即食", "汤、蔬菜牛肉汤、罐装、浓缩、单一品牌", "汤、豌豆汤、火腿和培根、罐装、浓缩、单一品牌", "汤，沙朗蔬菜汤，即食，单一品牌", "沙司、辣椒、辣椒、辣的、嫩绿色、罐装", "汤、土豆火腿杂烩汤、大块、即食、单一品牌", "坎贝尔汤公司，斯旺森汤，认证有机蔬菜汤", "汤、蔬菜汤、浓缩、低钠、等体积水配制", "肉汁，棕色即食，干", "肉汁、即食火鸡、干的", "汤、豌豆汤、低钠、等体积水配制", "汤、奶油蘑菇汤、低钠、即食、罐装", "汤、番茄汤、低钠、加水", "沙司、胡椒、辣、辣椒、成熟红、罐装", "鱼汤", "金宝汤公司，PREGO意大利面，传统意大利沙司，即食", "汤、鸡肉面、低钠、罐装、等体积水配制", "肉汁、即食牛肉、干的","沙司，番茄辣椒沙司，瓶装，无盐，低钠", "土豆汤，即食，干拌", "汤、鸡汤、低钠、罐装", "沙司，番茄辣椒沙司，瓶装，含盐", "酱汁，伍斯特郡", "汤、番茄汤、罐装、浓缩、低钠", "汤、牛肉蘑菇汤、低钠、块状", "汤、蔬菜鸡肉、罐装、用水配制、低钠", "沙司、意大利面、意大利面/意大利卤汁、即食、低钠", "酱汁、烧烤、低钠", "阿多波蔬菜汁", "汤、拉面、鸡肉味、干的", "汤、拉面、牛肉味、干的", "肉汁、肉或家禽、低钠、配制", "汤、肉汤块和颗粒、低钠、干燥", "汤、牛肉stroganoff汤、罐装、大块、即可食用", "肉汁，亨氏家常风味牛肉肉汁", "汤，斯旺森鸡汤99%不含脂肪", "金宝汤公司，健康要求，奶油蘑菇汤，浓缩", "金宝汤公司，健康要求，奶油芹菜汤，浓缩", "金宝汤公司，金宝粗汤，烤鸡香肠秋葵汤", "金宝汤公司，金宝汤，经典鸡汤", "金宝汤公司，金宝粗汤，法吉塔鸡饭豆汤", "金宝汤公司，金宝汤，鸡蘑菇杂烩", "金宝汤公司，健康要求，鸡汤面，浓缩", "汤、牛肉面、罐装、等体积水配制", "金宝汤公司，金宝大块汤，烤玉米杂烩熏鸡", "汤、蘑菇汤、干汤、混合汤、用水配制", "金宝汤公司，金宝粗汤，健康要求蔬菜汤", "金宝汤公司，金宝粗汤，火炉-辣牛肉和豆瓣辣椒", "汤、番茄汤、干汤、混合汤、用水配制", "汤、清汤和明胶、干汤、混合、用水配制", "金宝汤公司，金宝粗汤，豌豆火腿汤", "金宝汤公司，金宝精选汤，98%无脂新英格兰蛤蜊杂烩", "汤、洋葱汤、干汤、混合汤、用水配制", "金宝汤公司，金宝汤，丰盛鸡肉蔬菜汤", "汤、炖牡蛎汤、罐装、等体积水配制", "汤、鸡肉面、干汤、混合、用水配制", "汤、蛤蜊杂烩汤、曼哈顿汤、罐装、等体积水配制", "汤、鸡肉面、罐装、等体积水配制", "金宝汤公司，金宝汤，索尔兹伯里牛排蘑菇洋葱汤", "汤、素食蔬菜汤、罐装、等体积水配制", "金宝汤公司，PREGO意大利面，大块番茄，洋葱和大蒜意大利沙司，即食", "坎贝尔汤公司", "金宝汤公司，健康要求，家常鸡汤面，浓缩", "汤、鸡汤块、干的、用水配制", "金宝汤公司，金宝牛肉汁", "金宝汤公司，健康要求，蔬菜汤，浓缩", "金宝汤公司，健康要求，米司通汤，浓缩", "金宝汤公司，PREGO意大利面，大块花园意大利沙司，即食", "金宝汤公司，金宝粗汤，炖牛肉-全套", "汤、酸辣、中餐馆", "汤、馄饨、中餐馆", "金宝汤公司，金宝洋葱肉汁", "金宝汤公司，金宝粗汤，健康要求牛肉大麦汤", "金宝汤公司，金宝鸡肉汁", "金宝汤公司，健康要求，番茄汤，浓缩", "金宝汤公司，金宝粗汤，牛肉Stroganof-全套", "汤、鸡蛋汤、中餐馆", "金宝汤公司，金宝大块汤，健康要求微波碗，烤鸡和香肠秋葵汤", "金宝汤公司，金宝红白汤，鸡大麦蘑菇汤，浓缩", "金宝汤公司，金宝红白，意式婚礼汤，浓缩", "坎贝尔汤公司，坎贝尔粗汤，里加顿和肉丸-全套", "金宝汤公司，金宝大块汤，健康要求新英格兰蛤蜊杂烩", "金宝汤公司，金宝汤，火鸡馅饼-全套", "金宝汤公司，金宝大块汤，健康要求微波碗，鸡面汤", "金宝汤公司，金宝精选微波碗，健康要求意大利婚礼汤", "坎贝尔汤公司，坎贝尔精选微波碗，健康要求墨西哥式玉米饼", "金宝汤公司，佩斯，萨尔萨维德", "金宝汤公司，佩斯，三胡椒沙司", "坎贝尔汤公司，佩斯，龙舌兰莱姆萨尔蔬菜汤", "坎贝尔汤公司，佩斯，皮科·德·加洛", "汤、拉面、干的、任何风味、低脂、低钠", "金宝汤公司，金宝精选汤，收获番茄罗勒汤", "金宝汤公司，金宝精选汤，Azteca肉丸和米饭", "金宝汤公司，PREGO意大利面，心灵巧-传统酱汁，即食", "汤、鸡蛋汤、中餐馆", "金宝汤公司，金宝红白，98%无脂奶油蘑菇汤，浓缩", "汤、酸辣、中餐馆", "金宝汤公司，金宝粗汤，牛肉Stroganof-全套", "金宝汤公司，金宝粗汤，健康要求牛肉大麦汤", "金宝汤公司，金宝粗汤，炖牛肉-全套", "金宝汤公司，金宝大块汤，健康要求微波碗，烤鸡和香肠秋葵汤", "金宝汤公司，金宝大块汤，健康要求微波碗，鸡面汤", "金宝汤公司，金宝大块汤，健康要求新英格兰蛤蜊杂烩", "汤、馄饨", "金宝汤公司，金宝红白，意式婚礼汤，浓缩", "金宝汤公司，金宝精选微波碗，健康要求意大利婚礼汤", "金宝汤公司，金宝汤，火鸡馅饼-全套", "坎贝尔汤公司，坎贝尔精选微波碗，健康要求墨西哥式玉米饼", "金宝汤公司，金宝红白汤，鸡大麦蘑菇汤，浓缩", "坎贝尔汤公司，坎贝尔粗汤，里加顿和肉丸-全套", "金宝汤公司，金宝精选汤，Azteca肉丸和米饭", "金宝汤公司，PREGO意大利面，心灵巧-传统酱汁，即食", "金宝汤公司，金宝精选汤，收获番茄罗勒汤", "坎贝尔汤公司，佩斯，龙舌兰莱姆萨尔萨", "坎贝尔汤公司，佩斯，皮科·德·加洛", "金宝汤公司，金宝红白，98%无脂奶油蘑菇汤，浓缩", "金宝汤公司，佩斯，三胡椒沙司", "金宝汤公司，佩斯，萨尔萨维德", "汤、拉面、、低脂、低钠"],
Sou2:["CAMPBELL Soup Company, CAMPBELL'S Red and White, Beefy Mushroom Soup, condensed"
, "Soup, beef noodle, canned, condensed"
, "Soup, clam chowder, manhattan, canned, condensed"
, "Soup, bean with pork, canned, condensed"
, "Soup, beef broth or bouillon canned, ready-to-serve"
, "Soup, chunky chicken noodle, canned, ready-to-serve"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Chicken with Rice, condensed"
, "Soup, cream of asparagus, canned, condensed"
, "Soup, minestrone, canned, chunky, ready-to-serve"
, "Soup, chicken noodle, canned, condensed"
, "Soup, minestrone, canned, condensed"
, "Soup, crab, canned, ready-to-serve"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken and Dumplings Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Cheddar Cheese Soup, condensed"
, "Soup, oyster stew, canned, condensed"
, "Soup, pepperpot, canned, condensed"
, "Soup, vegetarian vegetable, canned, condensed"
, "Soup, vegetable with beef broth, canned, condensed"
, "Soup, beef broth, cubed, dry"
, "Soup, pea, green, canned, condensed"
, "Soup, pea, split with ham, canned, chunky, ready-to-serve"
, "Soup, tomato beef with noodle, canned, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken Alphabet Soup, condensed"
, "Soup, cream of potato, canned, condensed"
, "Soup, beef noodle, dry, mix"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken Noodle Soup, condensed"
, "Soup, stockpot, canned, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken Gumbo Soup, condensed"
, "Soup, beef broth or bouillon, powder, dry"
, "Soup, chunky vegetable, canned, ready-to-serve"
, "Soup, scotch broth, canned, condensed"
, "Soup, chicken broth or bouillon, dry"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Beef Consomme, condensed"
, "Soup, chicken broth cubes, dry"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken Vegetable Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken NOODLEO's Soup, condensed"
, "Gravy, beef, canned, ready-to-serve"
, "Soup, onion, dry, mix"
, "Sauce, sofrito, prepared from recipe"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Bean with Bacon Soup, condensed"
, "Soup, chicken mushroom, canned, condensed"
, "Soup, tomato, canned, condensed"
, "Sauce, mole poblano, dry mix, single brand"
, "Sauce, plum, ready-to-serve"
, "Soup, chicken broth, canned, less/reduced sodium"
, "Gravy, chicken, dry"
, "Sauce, ready-to-serve, pepper or hot"
, "Soup, cream of vegetable, dry, powder"
, "Soup, tomato bisque, canned, condensed"
, "Soup, chicken noodle, dry, mix"
, "Gravy, turkey, canned, ready-to-serve"
, "Gravy, mushroom, dry, powder"
, "Gravy, pork, dry, powder"
, "Sauce, fish, ready-to-serve"
, "Soup, tomato vegetable, dry, mix"
, "Soup, beef mushroom, canned, condensed"
, "Gravy, mushroom, canned"
, "Gravy, brown, dry"
, "Gravy, chicken, canned, ready-to-serve"
, "Sauce, barbecue"
, "Sauce, ready-to-serve, pepper, TABASCO"
, "Soup, cream of mushroom, canned, condensed, reduced sodium"
, "Split pea soup, canned, reduced sodium, prepared with water or ready-to serve"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Beef with Vegetables and Barley Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 98% Fat Free Cream of Broccoli Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 25% Less Sodium Chicken Noodle Soup, condensed"
, "Soup, shark fin, restaurant-prepared"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Beef Noodle Soup, condensed"
, "Soup, cream of asparagus, canned, prepared with equal volume milk"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 25% Less Sodium Cream of Mushroom Soup, condensed"
, "CAMPBELL Soup Company, PREGO Pasta, Organic Mushroom Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 25% Less Sodium Tomato Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, BATMAN Fun Shapes Soup, condensed"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Cream of Chicken Soup, condensed"
, "Soup, cream of chicken, canned, prepared with equal volume milk"
, "CAMPBELL Soup Company, PREGO Pasta, Chunky Garden Mushroom Supreme Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 98% Fat Free Broccoli Cheese Soup, condensed"
, "CAMPBELL Soup Company, PREGO Pasta, Fresh Mushroom Italian Sauce, ready-to-serve"
, "Soup, clam chowder, new england, canned, prepared with equal volume low fat (2%) milk"
, "CAMPBELL Soup Company, PREGO Pasta, Mini Meatball Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 98% Fat Free Cream of Celery Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 98% Fat Free Cream of Chicken Soup, condensed"
, "CAMPBELL Soup Company, PREGO Pasta, Organic Tomato and Basil Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PREGO Pasta, Garlic Supreme Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PREGO Pasta, Chunky Garden Mushroom and Green Pepper Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PREGO Pasta, Mushroom and Parmesan Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PREGO Pasta, Mushroom and Garlic Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PREGO Pasta, Italian Sausage and Garlic Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PREGO Pasta, Tomato, Basil and Garlic Italian Sauce, ready-to-serve"
, "Soup, oyster stew, canned, prepared with equal volume milk"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Microwavable Bowls, Beef with Country Vegetables Soup, ready-to-serve"
, "Soup, pea, green, canned, prepared with equal volume milk"
, "CAMPBELL Soup Company, CAMPBELL'S Country Style Cream Gravy"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Cream of Asparagus Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken with Rice Soup, condensed"
, "Soup, cream of shrimp, canned, prepared with equal volume low fat (2%) milk"
, "Soup, cream of mushroom, canned, prepared with equal volume low fat (2%) milk"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Microwavable Bowls, Classic Chicken Noodle, ready-to-serve"
, "CAMPBELL Soup Company, FRANCO-AMERICAN Fat Free Slow Roast Chicken Gravy"
, "CAMPBELL Soup Company, CAMPBELL'S Country Style Sausage Gravy"

, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Cream of Mushroom with Roasted Garlic Soup, condensed"
, "CAMPBELL Soup Company, FRANCO-AMERICAN Slow Roast Beef Gravy"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Cream of Mushroom Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, DANNY PHANTOM shaped pasta with Chicken in Chicken Broth, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, DOUBLE NOODLE in Chicken Broth Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, DORA THE EXPLORER Kidshapes Soup, condensed"
, "Soup, tomato bisque, canned, prepared with equal volume milk"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Tomato Bisque, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Oyster Stew, condensed"
, "Soup, tomato, canned, prepared with equal volume low fat (2%) milk"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Baked Potato with Cheddar & Bacon Bits Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Barbeque Seasoned Burger Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Baked Potato with Steak & Cheese Soup"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Southwestern-Style Chicken Vegetable Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, BBQ Seasoned Pork Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef Rib Roast with Potatoes & Herbs Soup"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Split Pea with Ham and Bacon Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef with Country Vegetables Soup"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Beef Broth, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Chicken Broccoli Cheese & Potato Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef with White and Wild Rice Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Chicken and Dumplings Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Chicken Corn Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Fajita Chicken with Rice & Beans Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Grilled Chicken & Sausage Gumbo Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Firehouse - Hot & Spicy Beef & Bean Chili"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Classic Chicken Noodle Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Chicken Mushroom Chowder"
, "Soup, chicken rice, dry, mix, prepared with water"
, "CAMPBELL Soup company, CAMPBELL'S Low Sodium Soups, Cream of Mushroom Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Tomato Garden Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Chicken & Stars Soup"
, "Soup, oyster stew, canned, prepared with equal volume water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Savory Chicken with White & Wild Rice Soup"
, "Soup, pea, green, canned, prepared with equal volume water"
, "Soup, chicken broth cubes, dry, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Vegetable Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Gold Label Soups, Creamy Portobello Mushroom Soup"
, "Soup, chicken mushroom, canned, prepared with equal volume water"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Microwaveable Bowls, Mexican Style Chicken Tortilla Soup"
, "Soup, vegetarian vegetable, canned, prepared with equal volume water"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Roasted Chicken with Long Grain & Wild Rice Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Gold Label Soups, Golden Butternut Squash Soup"
, "Soup, cream of chicken, dry, mix, prepared with water"
, "Soup, oxtail, dry, mix, prepared with water"
, "Soup, beef noodle, canned, prepared with equal volume water"
, "Soup, tomato vegetable, dry, mix, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Manhattan Clam Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, 98% Fat Free New England Clam Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Smoked Chicken with Roasted Corn Chowder"
, "Soup, broccoli cheese, canned, condensed, commercial"
, "Soup, ramen noodle, any flavor, dry"
, "CAMPBELL Soup company, CAMPBELL'S Low Sodium Soups, Chicken with Noodles Soup"
, "Soup, chicken noodle, dry, mix, prepared with water"
, "Soup, tomato, canned, prepared with equal volume water, commercial"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Salisbury Steak with Mushrooms & Onions Soup"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White - Microwaveable Bowls, Chicken Noodle Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Blended Vegetable Medley Soup"
, "Soup, mushroom, dry, mix, prepared with water"
, "Soup, onion, dry, mix, prepared with water"
, "Soup, chicken broth or bouillon, dry, prepared with water"
, "Soup, clam chowder, manhattan, canned, prepared with equal volume water"
, "Soup, tomato bisque, canned, prepared with equal volume water"
, "Soup, tomato, dry, mix, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Hearty Chicken with Vegetables Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Vegetable Medley Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Split Pea 'N' Ham Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Creamy Chicken Soup"
, "Soup, chicken noodle, canned, prepared with equal volume water"
, "Soup, consomme with gelatin, dry, mix, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Cream of Broccoli Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Velvety Potato Soup"
, "CAMPBELL Soup Company, PACE, Cilantro Chunky Salsa"
, "CAMPBELL Soup Company, PACE, Enchilada Sauce"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, New England Clam Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Chicken with Mini Noodles Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Vegetable Beef Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Creamy Tomato Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SOUP AT HAND, Italian Style Wedding Soup"
, "CAMPBELL Soup Company, PACE, Chipotle Chunky Salsa"
, "Soup, vegetable beef, canned, condensed, single brand"
, "Soup, split pea with ham and bacon, canned, condensed, single brand"
, "Soup, sirloin burger with vegetables, ready-to-serve, single brand"
, "Sauce, cheese, ready-to-serve"
, "Sauce, pasta, spaghetti/marinara, ready-to-serve"
, "Soup, chunky beef with country vegetables, ready-to-serve"
, "Soup, potato ham chowder, chunky, ready-to-serve, single brand"
, "CAMPBELL Soup Company, SWANSON BROTH, Certified Organic Vegetable Broth"
, "Sauce, chili, peppers, hot, immature green, canned"
, "Soup, vegetable soup, condensed, low sodium, prepared with equal volume water"
, "Soup, tomato, low sodium, with water"
, "Sauce, peppers, hot, chili, mature red, canned"
, "Soup, pea, low sodium, prepared with equal volume water"
, "Soup, cream of mushroom, low sodium, ready-to-serve, canned"
, "Gravy, brown instant, dry"
, "Gravy, instant turkey, dry"
, "Fish broth"
, "Gravy, instant beef, dry"
, "Soup, chicken noodle, low sodium, canned, prepared with equal volume water"
, "CAMPBELL Soup Company, PREGO Pasta, Traditional Italian Sauce, ready-to-serve"

, "Soup, tomato, canned, condensed, reduced sodium"
, "Potato soup, instant, dry mix"
, "Sauce, worcestershire"
, "Soup, chicken broth, low sodium, canned"
, "Sauce, tomato chili sauce, bottled, no salt, low sodium"
, "Sauce, tomato chili sauce, bottled, with salt"
, "Soup, beef and mushroom, low sodium, chunk style"
, "Soup, vegetable chicken, canned, prepared with water, low sodium"
, "Sauce, barbecue, low sodium"
, "Sauce, pasta, spaghetti/marinara, ready-to-serve, low sodium"
, "Gravy, meat or poultry, low sodium, prepared"
, "Adobo fresco"
, "Soup, beef stroganoff, canned, chunky style, ready-to-serve"
, "Soup, bouillon cubes and granules, low sodium, dry"
, "Soup, ramen noodle, beef flavor, dry"
, "Soup, ramen noodle, chicken flavor, dry"
, "Soup, SWANSON Chicken Broth 99% Fat Free"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Cream of Celery Soup, condensed"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Cream of Mushroom Soup, condensed"
, "Gravy, HEINZ Home Style Savory Beef Gravy"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Chicken Noodle Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Chicken Mushroom Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Fajita Chicken with Rice & Beans Soup"
, "Soup, beef noodle, canned, prepared with equal volume water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Classic Chicken Noodle Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Grilled Chicken & Sausage Gumbo Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Firehouse - Hot & Spicy Beef & Bean Chili"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Vegetable Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Smoked Chicken with Roasted Corn Chowder"
, "Soup, mushroom, dry, mix, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Hearty Chicken with Vegetables Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Split Pea 'N' Ham Soup"
, "Soup, tomato, dry, mix, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, 98% Fat Free New England Clam Chowder"
, "Soup, consomme with gelatin, dry, mix, prepared with water"
, "Soup, clam chowder, manhattan, canned, prepared with equal volume water"
, "Soup, oyster stew, canned, prepared with equal volume water"
, "Soup, onion, dry, mix, prepared with water"
, "Soup, chicken noodle, dry, mix, prepared with water"
, "Soup, chicken noodle, canned, prepared with equal volume water"
, "Soup, vegetarian vegetable, canned, prepared with equal volume water"
, "Soup, chicken broth cubes, dry, prepared with water"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Salisbury Steak with Mushrooms & Onions Soup"
, "CAMPBELL Soup Company, PREGO Pasta, Chunky Garden Tomato, Onion and Garlic Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Homestyle Chicken Noodle Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Au Jus Gravy"
, "CAMPBELL Soup Company, CAMPBELL'S Beef Gravy"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Vegetable Soup, condensed"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Minestrone Soup, condensed"
, "CAMPBELL Soup Company, PREGO Pasta, Chunky Garden Combination Italian Sauce, ready-to-serve"
, "CAMPBELL Soup Company, HEALTHY REQUEST, Tomato Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S Chicken Gravy"
, "CAMPBELL Soup Company, CAMPBELL'S Brown Gravy with Onions"
, "Soup, wonton, Chinese restaurant"
, "Soup, hot and sour, Chinese restaurant"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef Stew - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Beef Barley Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef Stroganof - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Microwavable Bowls, Grilled Chicken & Sausage Gumbo Soup"
, "Soup, egg drop, Chinese restaurant"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Turkey Pot Pie - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Microwavable Bowls, Chicken Noodle Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Rigatoni & Meatballs - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Italian Style Wedding Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST New England Clam Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken Barley with Mushrooms Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Microwaveable Bowls, HEALTHY REQUEST Italian Wedding Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Microwaveable Bowls, HEALTHY REQUEST Mexican Style Tortilla"
, "CAMPBELL Soup Company, PACE, Salsa Verde"
, "CAMPBELL Soup Company, PACE, Triple Pepper Salsa"
, "CAMPBELL Soup Company, PACE, Pico De Gallo"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Zesty Azteca Meatballs & Rice"
, "CAMPBELL Soup Company, PREGO Pasta, Heart Smart- Traditional Sauce, ready-to-serve"
, "Soup, ramen noodle, dry, any flavor, reduced fat, reduced sodium"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 98% Fat Free Cream of Mushroom Soup, condensed"
, "CAMPBELL Soup Company, PACE, Tequila Lime Salsa"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Harvest Tomato with Basil Soup"
, "Soup, egg drop, Chinese restaurant"
, "Soup, hot and sour, Chinese restaurant"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef Stroganof - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST New England Clam Chowder"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Beef Stew - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Microwavable Bowls, Chicken Noodle Soup"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Microwavable Bowls, Grilled Chicken & Sausage Gumbo Soup"
, "Soup, wonton, Chinese restaurant"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, HEALTHY REQUEST Beef Barley Soup"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Italian Style Wedding Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Turkey Pot Pie - Fully Loaded"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Microwaveable Bowls, HEALTHY REQUEST Italian Wedding Soup"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Microwaveable Bowls, HEALTHY REQUEST Mexican Style Tortilla"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Zesty Azteca Meatballs & Rice"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, Chicken Barley with Mushrooms Soup, condensed"
, "CAMPBELL Soup Company, CAMPBELL'S CHUNKY Soups, Rigatoni & Meatballs - Fully Loaded"
, "CAMPBELL Soup Company, PACE, Triple Pepper Salsa"
, "CAMPBELL Soup Company, PACE, Pico De Gallo"
, "CAMPBELL Soup Company, PREGO Pasta, Heart Smart- Traditional Sauce, ready-to-serve"
, "CAMPBELL Soup Company, PACE, Tequila Lime Salsa"
, "CAMPBELL Soup Company, CAMPBELL'S SELECT Soup, Harvest Tomato with Basil Soup"
, "CAMPBELL Soup Company, PACE, Salsa Verde"
, "CAMPBELL Soup Company, CAMPBELL'S Red and White, 98% Fat Free Cream of Mushroom Soup, condensed"
, "Soup, ramen noodle, dry, any flavor, reduced fat, reduced sodium"],
Swecal:[359
  , 371
  , 2384
  , 396
  , 375
  , 394
  , 501
  , 249
  , 366
  , 391
  , 540
  , 539
  , 462
  , 126
  , 384
  , 387
  , 531
  , 382
  , 145
  , 338
  , 529
  , 207
  , 479
  , 480
  , 482
  , 375
  , 512
  , 507
  , 411
  , 222
  , 144
  , 522
  , 180
  , 472
  , 387
  , 1464
  , 347
  , 519
  , 539
  , 187
  , 475
  , 165
  , 526
  , 459
  , 296
  , 462
  , 510
  , 426
  , 318
  , 535
  , 467
  , 456
  , 390
  , 512
  , 2414
  , 535
  , 254
  , 541
  , 234
  , 515
  , 500
  , 538
  , 492
  , 517
  , 502
  , 486
  , 422
  , 491
  , 502
  , 468
  , 474
  , 515
  , 497
  , 432
  , 522
  , 494
  , 436
  , 408
  , 502
  , 516
  , 536
  , 556
  , 410
  , 1674
  , 228
  , 360
  , 220
  , 104
  , 485
  , 62
  , 142
  , 378
  , 383
  , 118
  , 198
  , 113
  , 104
  , 381
  , 377
  , 130

  , 111
  , 363
  , 362
  , 120
  , 94
  , 20
  , 335
  , 418
  , 394
  , 89
  , 376
  , 379
  , 130
  , 415
  , 107
  , 84
  , 225
  , 24
  , 114
  , 369
  , 521
  , 463
  , 520
  , 161
  , 389
  , 433
  , 550
  , 397
  , 546
  , 371
  , 521
  , 348
  , 474
  , 530
  , 244
  , 458
  , 563
  , 410
  , 520
  , 173
  , 87
  , 79
  , 540
  , 517
  , 475
  , 169
  , 53
  , 192
  , 173
  , 128
  , 216
  , 536
  , 304
  , 278
  , 159
  , 266
  , 472
  , 246
  , 290
  , 463
  , 115
  , 325
  , 366
  , 409
  , 100
  , 480
  , 400
  , 443
  , 354
  , 260
  , 517
  , 365
  , 402
  , 252
  , 378
  , 389
  , 117
  , 389
  , 387
  , 281
  , 539
  , 114
  , 525
  , 283
  , 434
  , 350
  , 265
  , 322
  , 290
  , 401
  , 278
  , 363
  , 488
  , 268
  , 167
  , 522
  , 127
  , 529
  , 127
  , 443

  , 107
  , 394
  , 398
  , 268
  , 132
  , 470
  , 162
  , 40
  , 53
  , 360
  , 368
  , 95
  , 115
  , 10
  , 24
  , 255
  , 181
  , 350
  , 365
  , 356
  , 179
  , 396
  , 459
  , 380
  , 511
  , 518
  , 345
  , 477],
Swem:[28.35
  , 21
  , 41
  , 40
  , 40
  , 28.35
  , 29
  , 107
  , 43
  , 28.35
  , 28.35
  , 170
  , 35
  , 88
  , 43
  , 40
  , 42
  , 71
  , 153
  , 40
  , 168
  , 66
  , 49
  , 168
  , 56
  , 11
  , 39
  , 28.35
  , 17
  , 86
  , 74
  , 170
  , 76
  , 28.35
  , 16
  , 71
  , 40
  , 149
  , 170
  , 68
  , 40
  , 240
  , 41
  , 60
  , 315
  , 57
  , 12
  , 20
  , 50
  , 39
  , 50
  , 58
  , 180
  , 41
  , 78
  , 168
  , 340
  , 37
  , 314
  , 54
  , 44
  , 49
  , 208
  , 14
  , 14
  , 19
  , 45
  , 57
  , 57
  , 43
  , 48
  , 17
  , 47
  , 42
  , 28.35
  , 48
  , 60
  , 40
  , 30
  , 28.35
  , 54
  , 41
  , 85
  , 5
  , 86
  , 3
  , 86
  , 141
  , 39
  , 540
  , 28.35
  , 99
  , 10.8
  , 28.35
  , 6.4
  , 140
  , 140
  , 85
  , 99
  , 28.35

  , 147
  , 9
  , 99
  , 142
  , 112
  , 117
  , 7
  , 462
  , 39
  , 99
  , 106
  , 88
  , 28.35
  , 33
  , 147
  , 9.9
  , 202
  , 51
  , 142
  , 92
  , 39
  , 44
  , 37
  , 141
  , 388
  , 462
  , 39
  , 41
  , 37
  , 207
  , 42
  , 85
  , 56
  , 39
  , 315
  , 44
  , 40
  , 411
  , 55
  , 72
  , 77
  , 52
  , 40
  , 54
  , 47
  , 68
  , 29
  , 58
  , 282
  , 99
  , 58
  , 40
  , 339
  , 20
  , 72
  , 21
  , 50
  , 320
  , 337
  , 39
  , 595
  , 50
  , 88
  , 40
  , 595
  , 39
  , 59
  , 41
  , 3
  , 315
  , 20
  , 3.5
  , 62
  , 41
  , 99
  , 99
  , 147
  , 120
  , 2.8
  , 310
  , 22
  , 140
  , 22
  , 341
  , 88
  , 304
  , 315
  , 28.35
  , 330
  , 51
  , 315
  , 85
  , 47
  , 20
  , 137
  , 37
  , 174
  , 46
  , 174
  , 50

  , 186
  , 3
  , 14
  , 2
  , 224
  , 14
  , 182
  , 240
  , 264
  , 1
  , 196
  , 29.8
  , 71
  , 54
  , 55
  , 148
  , 262
  , 8
  , 9.9
  , 9.9
  , 300
  , 182
  , 60
  , 220
  , 40
  , 42
  , 9
  , 170],
Swe:["糖果、焦糖、巧克力味卷", "小吃，水果沙拉，小吃", "糖果，好时光的金杏仁", "橙子糖果，硬的", "小吃，水果皮，面包卷", "糖果，雀巢，蜂蜜糖果嚼", "糖果，甜巧克力软糖", "烘焙巧克力，不加糖，方形", "糖果，奶油威士忌", "冰淇淋，香草，丰富", "冰淇淋、香草、清淡、软质", "糖果，牛奶巧克力棒", "糖果，香菇卷，巧克力味卷", "糖果，约克薄荷馅饼", "糖果，卡拉梅洛糖果棒", "糖果，角豆，不加糖", "糖果、糖果涂层、奶油糖果", "甜点、法兰、焦糖奶油冻、按配方制作", "糖果、焦糖", "糖果，樱桃味", "糖果、果冻", "糖果，第五大道糖果店", "糖果，雀巢，巧克力花生", "糖果，杏仁喜乐糖果棒", "糖果、糖果涂层、花生酱", "糖果、半甜巧克力", "冰淇淋，香草", "糖果，甜巧克力", "糖果、软糖、巧克力、按配方制作", "冰淇淋、法国香草、软冰淇淋", "糖果、糖果涂层、酸奶", "雪碧", "烘焙巧克力，不加糖，液体", "冰淇淋、香草、清淡", "糖果、软糖、花生酱、按配方制作", "糖果，花枝草莓糖", "糖果，小白鼠啃樱桃", "糖果，白巧克力", "糖果、牛奶巧克力花生", "冰淇淋、巧克力、清淡", "糖果、牛奶巧克力、杏仁", "糖果，雀巢，小露丝吧", "糖果、松露、按配方制作", "糖浆、餐桌混合物、薄饼、低热量", "糖浆、桌子混合物、薄饼、黄油", "糖果，雀巢，粗棒", "糖果，雀巢", "糖果，棉花糖", "糖果，斯科尔太妃糖", "烤巧克力，墨西哥，方形", "糖果，好时的金杏仁棒", "糖果，火星零食，火星杏仁吧", "糖果、牛奶巧克力葡萄干", "糖果，克拉克尔巧克力棒", "糖果、牛奶巧克力", "糖浆，餐桌混合物，煎饼", "配料，草莓", "糖果，火星零食，我们，M&M的花生巧克力糖果", "糖果，酒心巧克力 ", "巧克力味榛子酱", "糖果，火星零食美国，M&M的牛奶巧克力糖果", "烘焙巧克力，火星零食美国，M&M的牛奶巧克力迷你烘焙块", "糖果、雀巢、脆片和甜点配料", "烘焙巧克力，火星零食美国，M&M的半甜巧克力迷你烘焙块", "糖果，古德巴先生，巧克力棒", "糖果，土墩糖棒", "糖果，焦糖饼干条", "糖果、雀巢、葡萄干巧克力葡萄干", "糖果，火星蛇食，我们，鹬吧", "糖果，雀巢", "糖果，牛奶巧克力罗罗焦糖", "糖果，里斯的花生酱杯", "糖果，雀巢 ", "糖果，原味水果", "糖果，火星零食美国，M&M的迷你牛奶巧克力糖果", "糖果，里斯糖果", "糖果，花生棒", "糖果芝麻酥", "糖果，奶糖 ", "糖果，WHATCHAMACALLIT糖果棒", "糖果，特制黑巧克力棒", "可可，干粉", "白糖粉、干粉、未加糖", "糖果，普拉琳，按配方制作", "糖果、小枝花生酱曲奇条", "鸡蛋冻，干混", "口香糖", "可可粉，干粉，未加糖，碱处理", "甜点、蛋冻、烘焙、按配方制作", "明胶甜点，干混，用水配制", "布丁、米饭、即食", "明胶甜点，干混，低热量，含阿斯巴甜", "布丁、巧克力、干拌、速溶", "布丁、椰子奶油、干拌、普通、用2%牛奶配制", "干拌明胶甜点", "布丁、香草、干拌、普通、全脂牛奶制作", "甜点，凝乳酶，香草，干混", "布丁、巧克力、即食", "布丁、香草、干拌、速溶", "布丁，木薯，即食","布丁、巧克力、干拌、即食、全脂牛奶制作", "布丁、巧克力、干拌、普通", "明胶甜点，干混，低热量，含阿斯巴甜，用水配制", "布丁、木薯、即食、无脂肪", "甜点，凝乳酶，巧克力，干混", "糖霜、香草、奶油、即食", "布丁、巧克力、干拌、普通、全脂牛奶制作", "糖果，约克咬", "凝胶、干粉、未加糖", "布丁、香草、即食、无脂肪", "布丁、香草、干拌、普通", "糖霜，奶油奶酪味，即食", "布丁、椰子奶油、干拌、即食、用2%牛奶配制", "布丁、香草、即食", "冷冻新鲜食品，冰镇，水果，不加糖", "布丁、木薯、干拌", "甜点，凝乳酶，片剂，不加糖", "布丁、米饭、干拌", "布丁、香草、干拌、即食、全脂牛奶制作", "甜点、慕斯、巧克力、按配方制作", "糖果，里斯咬的", "糖果，火星蛇食我们，鸽子黑巧克力", "糖霜、椰子仁、即食", "糖果，火星蛇食品，鸽子牛奶巧克力", "糖霜、巧克力、奶油、干混", "糖果、火星蛇食美国、银河焦糖、牛奶巧克力", "甜点，苹果酥，按配方制作", "糖果，好时牛奶巧克力杏仁片", "糖霜、巧克力、奶油、即食", "霜，白色，蓬松，干混", "糖果，里斯，速溶，牛奶巧克力花生酱和软牛轧糖", "法兰绒、焦糖奶油冻、干混", "糖果，夹心奶糖", "糖果、牛奶巧克力", "霜，白色，蓬松，干混，用水配制", "糖霜、香草、奶油、干混", "糖果，火星蛇食，银河焦糖。黑巧克力覆盖", "糖果，杏仁甜点", "冰淇淋、巧克力、清淡、不加糖", "糖果，好时，凯蒂大卡酒吧", "糖果， M&M的脆巧克力糖果", "冷冻新奇，冰型，流行", "糖果，里斯的营养糖果", "冷冻新奇食品，冰镇，意大利，餐厅准备", "糖果，黑巧克力咖啡豆", "冰淇淋、香草、清淡、不加糖", "冷冻新鲜水果和果汁棒", "冰糖", "冰淇淋，草莓", "水果黄油，苹果", "果冻", "果酱和蜜饯", "冷冻酸奶，香草", "糖果、草莓圣代", "糖果，斯奈克斯杏仁棒", "橘子酱", "冰淇淋，巧克力", "糖蜜", "霍尼", "糖果，波普尔银河品牌巧克力豆", "果胶，未加糖，干混", "馅饼馅料、苹果、罐装", "馅饼馅料、罐装、樱桃", "布丁、香蕉、干拌、普通", "糖果热带水果", "糖果，波普糖果", "糖浆", "糖果，火星蛇食美国，流行3火枪手品牌咬大小糖果", "糖，枫糖", "糖果，星爆酸水果嚼", "布丁，椰子奶油，干拌，即食", "布丁、柠檬、干拌、速溶", "糖粉", "糖果，火星零食，可口可乐，脆巧克力棒", "糖果，火星蛇食我们，小吃野生浆果咬大小的糖果", "甜味剂，桌面，阿斯巴甜，等量，包", "配料、奶油苏格兰威士忌或焦糖", "布丁，椰子奶油，干拌，即食，全脂牛奶制", "糖浆、玉米、高果糖", "砂糖", "布丁、椰子奶油、干拌、普通、全脂牛奶", "糖浆、玉米、清淡", "布丁、椰子奶油、干拌、普通", "糖果，火星零食，我们，椰子蓝莓和杏仁巧克力棒", "糖果，火星蛇食美国，可可豆巧克力棒", "糖浆、巧克力、软糖型", "糖果，火星蛇食我们，小吃汤原汁原味", "配料，棉花糖奶油", "糖浆、高粱", "糖浆，餐桌混合，薄饼，含2%枫叶", "糖果，火星零食美国，M&M杏仁巧克力糖果", "布丁、柠檬、干拌、普通", "牛奶甜点、冷冻、不含牛奶脂肪、巧克力", "糖浆，手榴弹", "糖浆、桌子混合物、甘蔗和15%枫树", "糖果，火星蛇食，我们，鹬鲨", "糖果，火星零食美国，M&M的花生酱巧克力糖果", "冷冻酸奶、巧克力", "冷冻酸奶，巧克力以外的口味", "糖果，火星蛇食我们，银河午夜酒吧","硬糖、营养糖或低热量糖果（山梨醇）", "糖果、巧克力、焦糖和坚果", "果酱和蜜饯，营养（含糖精钠），任何风味", "糖果、牛轧糖、杏仁", "冷冻酸奶、巧克力、脱脂牛奶、无糖甜味", "无糖口香糖", "甜味剂、桌面、糖精", "馅饼馅料、樱桃、低热量", "糖果、口香糖", "糖浆，营养的", "冷冻新奇食品，冰淇淋类，巧克力或焦糖，带坚果", "甜味剂、桌面、果糖、干的、粉末", "冷冻新鲜食品，冰镇，汽水，含低热量甜味剂", "冰淇淋，巧克力，丰富的", "冷冻新奇，果汁型，橙汁", "冷冻中篇小说，果汁类，奶油果汁", "馅饼馅料、蓝莓、罐装", "布丁，巧克力味，低热量，常规，干拌", "布丁，所有口味，巧克力除外，低热量，即食，干拌", "布丁，巧克力味，低热量，即食，干拌","糖果、牛奶巧克力、米粉", "糖果，雀巢，黄油条", "糖果、口香糖、淀粉果冻片", "果冻、还原糖、自制", "糖，棕色", "糖果，半甜巧克力，黄油制成", "明胶甜点，干混，低热量，含阿斯巴甜，添加磷、钾、钠、维生素C", "糖果，KIT KAT威化棒"],
Swe2:["Snacks, fruit leather, pieces"
, "Snacks, fruit leather, rolls"
, "Candies, HERSHEY'S GOLDEN ALMOND SOLITAIRES"
, "Candies, caramels, chocolate-flavor roll"
, "Candies, NESTLE, BIT-O'-HONEY Candy Chews"
, "Candies, hard"
, "Baking chocolate, unsweetened, squares"
, "Ice creams, vanilla, rich"
, "Candies, sweet chocolate coated fondant"
, "Candies, butterscotch"
, "Candies, carob, unsweetened"
, "Candies, confectioner's coating, butterscotch"
, "Candies, CARAMELLO Candy Bar"
, "Ice creams, vanilla, light, soft-serve"
, "Candies, YORK Peppermint Pattie"
, "Candies, TOOTSIE ROLL, chocolate-flavor roll"
, "Candies, SYMPHONY Milk Chocolate Bar"
, "Candies, caramels"
, "Desserts, flan, caramel custard, prepared-from-recipe"
, "Candies, TWIZZLERS CHERRY BITES"
, "Candies, confectioner's coating, peanut butter"
, "Ice creams, vanilla"
, "Candies, ALMOND JOY Candy Bar"
, "Candies, semisweet chocolate"
, "Candies, 5TH AVENUE Candy Bar"
, "Candies, jellybeans"
, "Candies, NESTLE, GOOBERS Chocolate Covered Peanuts"
, "Candies, sweet chocolate"
, "Candies, fudge, chocolate, prepared-from-recipe"
, "Ice creams, french vanilla, soft-serve"
, "Sherbet, orange"
, "Candies, confectioner's coating, yogurt"
, "Ice creams, vanilla, light"
, "Baking chocolate, unsweetened, liquid"
, "Candies, fudge, peanut butter, prepared-from-recipe"
, "Candies, TWIZZLERS Strawberry Twists Candy"
, "Candies, TWIZZLERS NIBS CHERRY BITS"
, "Candies, milk chocolate coated peanuts"
, "Candies, white chocolate"
, "Ice creams, chocolate, light"
, "Candies, NESTLE, CHUNKY Bar"
, "Syrups, table blends, pancake, reduced-calorie"
, "Candies, milk chocolate, with almonds"
, "Candies, NESTLE, BABY RUTH Bar"
, "Syrups, table blends, pancake, with butter"
, "Candies, NESTLE, OH HENRY! Bar"
, "Candies, truffles, prepared-from-recipe"
, "Baking chocolate, mexican, squares"
, "Candies, marshmallows"
, "Candies, SKOR Toffee Bar"
, "Candies, MARS SNACKFOOD US, MARS Almond Bar"
, "Candies, MARS SNACKFOOD US, MILKY WAY Bar"
, "Candies, milk chocolate coated raisins"
, "Candies, KRACKEL Chocolate Bar"
, "Candies, HERSHEY'S POT OF GOLD Almond Bar"
, "Candies, milk chocolate"
, "Toppings, strawberry"
, "Chocolate-flavored hazelnut spread"
, "Syrups, table blends, pancake"
, "Candies, MARS SNACKFOOD US, M&M's Peanut Chocolate Candies"
, "Candies, NESTLE, CRUNCH Bar and Dessert Topping"
, "Candies, MR. GOODBAR Chocolate Bar"
, "Candies, MARS SNACKFOOD US, M&M's Milk Chocolate Candies"
, "Baking chocolate, MARS SNACKFOOD US, M&M's Semisweet Chocolate Mini Baking Bits"
, "Baking chocolate, MARS SNACKFOOD US, M&M's Milk Chocolate Mini Baking Bits"
, "Candies, MOUNDS Candy Bar"
, "Candies, NESTLE, RAISINETS Chocolate Covered Raisins"
, "Candies, MARS SNACKFOOD US, SNICKERS Bar"
, "Candies, MARS SNACKFOOD US, TWIX Caramel Cookie Bars"
, "Candies, NESTLE, 100 GRAND Bar"
, "Candies, ROLO Caramels in Milk Chocolate"
, "Candies, REESE'S Peanut Butter Cups"
, "Candies, REESE'S PIECES Candy"
, "Candies, NESTLE, AFTER EIGHT Mints"
, "Candies, peanut bar"
, "Candies, WHATCHAMACALLIT Candy Bar"
, "Candies, MARS SNACKFOOD US, 3 MUSKETEERS Bar"
, "Candies, MARS SNACKFOOD US, STARBURST Fruit Chews, Original fruits"
, "Candies, MARS SNACKFOOD US, M&M's MINIs Milk Chocolate Candies"
, "Candies, sesame crunch"
, "Candies, MARS SNACKFOOD US, TWIX Peanut Butter Cookie Bars"
, "Candies, SPECIAL DARK Chocolate Bar"
, "Egg custards, dry mix"
, "Cocoa, dry powder, unsweetened, HERSHEY'S European Style Cocoa"
, "Cocoa, dry powder, unsweetened"
, "Chewing gum"
, "Cocoa, dry powder, unsweetened, processed with alkali"
, "Desserts, egg custard, baked, prepared-from-recipe"
, "Candies, praline, prepared-from-recipe"
, "Gelatin desserts, dry mix, prepared with water"
, "Puddings, chocolate, ready-to-eat"
, "Puddings, chocolate, dry mix, instant"
, "Desserts, rennin, vanilla, dry mix"
, "Puddings, rice, ready-to-eat"
, "Gelatin desserts, dry mix, reduced calorie, with aspartame"
, "Puddings, vanilla, dry mix, regular, prepared with whole milk"
, "Puddings, coconut cream, dry mix, regular, prepared with 2% milk"
, "Gelatin desserts, dry mix"
, "Puddings, vanilla, dry mix, instant"
, "Puddings, tapioca, ready-to-eat"

, "Puddings, chocolate, dry mix, instant, prepared with whole milk"
, "Desserts, rennin, chocolate, dry mix"
, "Puddings, chocolate, dry mix, regular"
, "Puddings, chocolate, dry mix, regular, prepared with whole milk"
, "Puddings, tapioca, ready-to-eat, fat free"
, "Gelatin desserts, dry mix, reduced calorie, with aspartame, prepared with water"
, "Gelatins, dry powder, unsweetened"
, "Frostings, vanilla, creamy, ready-to-eat"
, "Candies, YORK BITES"
, "Puddings, vanilla, ready-to-eat, fat free"
, "Puddings, rice, dry mix"
, "Puddings, vanilla, dry mix, regular"
, "Puddings, vanilla, ready-to-eat"
, "Frostings, cream cheese-flavor, ready-to-eat"
, "Puddings, coconut cream, dry mix, instant, prepared with 2% milk"
, "Desserts, rennin, tablets, unsweetened"
, "Desserts, mousse, chocolate, prepared-from-recipe"
, "Frozen novelties, ice type, fruit, no sugar added"
, "Puddings, vanilla, dry mix, instant, prepared with whole milk"
, "Puddings, tapioca, dry mix"
, "Candies, REESE'S BITES"
, "Candies, MARS SNACKFOOD US, MILKY WAY Caramels, milk chocolate covered"
, "Candies, MARS SNACKFOOD US, DOVE Dark Chocolate"
, "Desserts, apple crisp, prepared-from-recipe"
, "Frostings, chocolate, creamy, dry mix"
, "Frostings, coconut-nut, ready-to-eat"
, "Candies, HERSHEY'S MILK CHOCOLATE WITH ALMOND BITES"
, "Frostings, chocolate, creamy, ready-to-eat"
, "Candies, MARS SNACKFOOD US, DOVE Milk Chocolate"
, "Frostings, white, fluffy, dry mix"
, "Candies, HERSHEY, REESESTICKS crispy wafers, peanut butter, milk chocolate"
, "Flan, caramel custard, dry mix"
, "Candies, REESE'S, FAST BREAK, milk chocolate peanut butter and soft nougats"
, "Candies, HEATH BITES"
, "Frostings, white, fluffy, dry mix, prepared with water"
, "Candies, MARS SNACKFOOD US, MILKY WAY Caramels. dark chocolate covered"
, "Candies, ALMOND JOY BITES"
, "Frostings, vanilla, creamy, dry mix"
, "Candies, HERSHEY, KIT KAT BIG KAT Bar"
, "Ice creams, chocolate, light, no sugar added"
, "Frozen novelties, fruit and juice bars"
, "Frozen novelties, ice type, pop"
, "Candies, dark chocolate coated coffee beans"
, "Candies, REESE'S NUTRAGEOUS Candy Bar"
, "Candies, MARS SNACKFOOD US, M&M's Crispy Chocolate Candies"
, "Ice creams, vanilla, light, no sugar added"
, "Frozen novelties, ice type, italian, restaurant-prepared"
, "Ice creams, strawberry"
, "Fruit butters, apple"
, "Frozen novelties, ice type, lime"
, "Ice creams, chocolate"
, "Candies, MARS SNACKFOOD US, SNICKERS MUNCH bar"
, "Honey"
, "Jams and preserves"
, "Frozen yogurts, vanilla, soft-serve"
, "Jellies"
, "Candies, MARS SNACKFOOD US, SNICKERS Almond bar"
, "Marmalade, orange"
, "Molasses"
, "Candies, MARS SNACKFOOD US, POP'ABLES MILKY WAY Brand Bite Size Candies"
, "Pie fillings, canned, cherry"
, "Pectin, unsweetened, dry mix"
, "Puddings, banana, dry mix, regular"
, "Candies, MARS SNACKFOOD US, STARBURST Fruit Chews, Tropical fruits"
, "Pie fillings, apple, canned"
, "Candies, MARS SNACKFOOD US, POP'ABLES SNICKERS Brand Bite Size Candies"
, "Candies, MARS SNACKFOOD US, STARBURST Sour Fruit Chews"
, "Candies, MARS SNACKFOOD US, POP'ABLES 3 MUSKETEERS Brand Bite Size Candies"
, "Sugars, maple"
, "Syrups, maple"
, "Candies, MARS SNACKFOOD US, COCOAVIA Crispy Chocolate Bar"
, "Sweeteners, tabletop, aspartame, EQUAL, packets"
, "Candies, MARS SNACKFOOD US, SKITTLES Wild Berry Bite Size Candies"
, "Toppings, butterscotch or caramel"
, "Puddings, lemon, dry mix, instant"
, "Puddings, coconut cream, dry mix, instant"
, "Puddings, coconut cream, dry mix, instant, prepared with whole milk"
, "Sugars, powdered"
, "Sugars, granulated"
, "Syrups, corn, high-fructose"
, "Candies, MARS SNACKFOOD US, COCOAVIA Chocolate Bar"
, "Puddings, coconut cream, dry mix, regular, prepared with whole milk"
, "Candies, MARS SNACKFOOD US, COCOAVIA Blueberry and Almond Chocolate Bar"
, "Syrups, corn, light"
, "Puddings, coconut cream, dry mix, regular"
, "Syrups, chocolate, fudge-type"
, "Syrups, table blends, pancake, with 2% maple"
, "Toppings, marshmallow cream"
, "Syrups, sorghum"
, "Candies, MARS SNACKFOOD US, SKITTLES Sours Original"
, "Syrups, table blends, cane and 15% maple"
, "Puddings, lemon, dry mix, regular"
, "Candies, MARS SNACKFOOD US, SNICKERS CRUNCHER"
, "Syrups, grenadine"
, "Milk dessert, frozen, milk-fat free, chocolate"
, "Candies, MARS SNACKFOOD US, M&M's Almond Chocolate Candies"
, "Frozen yogurts, flavors other than chocolate"
, "Candies, MARS SNACKFOOD US, M&M's Peanut Butter Chocolate Candies"
, "Frozen yogurts, chocolate"
, "Candies, MARS SNACKFOOD US, MILKY WAY Midnight Bar"

, "Frozen yogurts, chocolate, nonfat milk, sweetened without sugar"
, "Candies, hard, dietetic or low calorie (sorbitol)"
, "Candies, nougat, with almonds"
, "Chewing gum, sugarless"
, "Jams and preserves, dietetic (with sodium saccharin), any flavor"
, "Candies, chocolate covered, caramel with nuts"
, "Candies, gum drops, dietetic or low calorie (sorbitol)"
, "Syrups, dietetic"
, "Pie fillings, cherry, low calorie"
, "Sweeteners, tabletop, saccharin"
, "Sweeteners, tabletop, fructose, dry, powder"
, "Frozen novelties, juice type, orange"
, "Frozen novelites, juice type, juice with cream"
, "Frozen novelties, ice cream type, chocolate or caramel covered, with nuts"
, "Frozen novelties, ice type, pop, with low calorie sweetener"
, "Ice creams, chocolate, rich"
, "Pie fillings, blueberry, canned"
, "Puddings, all flavors except chocolate, low calorie, instant, dry mix"
, "Puddings, chocolate flavor, low calorie, regular, dry mix"
, "Puddings, chocolate flavor, low calorie, instant, dry mix"
, "Jellies, reduced sugar, home preserved"
, "Candies, gumdrops, starch jelly pieces"
, "Candies, NESTLE, BUTTERFINGER Bar"
, "Sugars, brown"
, "Candies, milk chocolate, with rice cereal"
, "Candies, KIT KAT Wafer Bar"
, "Gelatin desserts, dry mix, reduced calorie, with aspartame, added phosphorus, potassium, sodium, vitamin C"
, "Candies, semisweet chocolate, made with butter"],
Vegcal:[37
  , 22
  , 150
  , 21
  , 28
  , 36
  , 42
  , 311
  , 108
  , 12
  , 144
  , 348
  , 40
  , 27
  , 79
  , 37
  , 321
  , 34
  , 14
  , 271
  , 81
  , 314
  , 268
  , 290
  , 45
  , 172
  , 24
  , 131
  , 341
  , 83
  , 15
  , 40
  , 78
  , 16
  , 43
  , 65
  , 21
  , 105
  , 72
  , 22
  , 18
  , 123
  , 53
  , 19
  , 31
  , 32
  , 11
  , 26
  , 35
  , 15
  , 26
  , 27
  , 28
  , 35
  , 28
  , 28
  , 28
  , 35
  , 28
  , 36
  , 28
  , 42
  , 15
  , 19
  , 23
  , 88
  , 22
  , 17
  , 26
  , 27
  , 23
  , 20
  , 20
  , 24
  , 18
  , 12
  , 36
  , 72
  , 64
  , 37
  , 79
  , 131
  , 94
  , 94
  , 79
  , 22
  , 34
  , 23
  , 28
  , 60
  , 56
  , 28
  , 33
  , 48
  , 40
  , 34
  , 37
  , 93
  , 19
  , 38

  , 28
  , 33
  , 40
  , 17
  , 15
  , 132
  , 25
  , 56
  , 50
  , 20
  , 40
  , 84
  , 54
  , 20
  , 31
  , 21
  , 198
  , 172
  , 29
  , 30
  , 19
  , 39
  , 69
  , 34
  , 34
  , 18
  , 21
  , 78
  , 16
  , 105
  , 141
  , 19
  , 88
  , 39
  , 15
  , 15
  , 20
  , 32
  , 111
  , 22
  , 45
  , 23
  , 132
  , 36
  , 27
  , 66
  , 30
  , 13
  , 26
  , 20
  , 16
  , 12
  , 14
  , 34
  , 150
  , 39
  , 93
  , 92
  , 44
  , 142
  , 14
  , 68
  , 111
  , 50
  , 82
  , 34
  , 100
  , 34
  , 24
  , 21
  , 38
  , 22
  , 81
  , 21
  , 11
  , 40
  , 108
  , 82
  , 97
  , 113
  , 91
  , 29
  , 18
  , 314
  , 20
  , 113
  , 23
  , 121
  , 103
  , 32
  , 29
  , 99
  , 12
  , 345
  , 88
  , 32
  , 32
  , 23
  , 213
  , 21

  , 32
  , 16
  , 258
  , 21
  , 15
  , 281
  , 32
  , 33
  , 93
  , 69
  , 22
  , 29
  , 32
  , 284
  , 31
  , 22
  , 109
  , 98
  , 20
  , 21
  , 21
  , 21
  , 21
  , 21
  , 21
  , 21
  , 27
  , 25
  , 20
  , 21
  , 21
  , 21
  , 21
  , 21
  , 21
  , 21
  , 25
  , 27
  , 62
  , 28
  , 30
  , 28
  , 42
  , 22
  , 19
  , 22
  , 49
  , 37
  , 158
  , 31
  , 29
  , 27
  , 12
  , 14
  , 24
  , 16
  , 19
  , 23
  , 36
  , 26
  , 23
  , 35
  , 24
  , 24
  , 86
  , 30
  , 33
  , 17
  , 27
  , 20
  , 20
  , 23
  , 19
  , 72
  , 160
  , 23
  , 41
  , 17
  , 96
  , 36
  , 75
  , 94
  , 23
  , 79
  , 72
  , 88
  , 24
  , 19
  , 21
  , 81
  , 18
  , 25
  , 81
  , 64
  , 30
  , 25
  , 98
  , 16
  , 37
  , 25

  , 13
  , 132
  , 97
  , 22
  , 139
  , 90
  , 34
  , 47
  , 47
  , 23
  , 44
  , 29
  , 32
  , 60
  , 29
  , 50
  , 73
  , 14
  , 34
  , 50
  , 22
  , 106
  , 12
  , 20
  , 13
  , 16
  , 39
  , 15
  , 28
  , 32
  , 15
  , 28
  , 56
  , 80
  , 20
  , 22
  , 298
  , 14
  , 17
  , 64
  , 30
  , 26
  , 22
  , 46
  , 122
  , 15
  , 17
  , 28
  , 19
  , 16
  , 296
  , 25
  , 37
  , 56
  , 22
  , 149
  , 110
  , 67
  , 45
  , 34
  , 24
  , 25
  , 31
  , 14
  , 258
  , 40
  , 35
  , 74
  , 82
  , 61
  , 30
  , 31
  , 12
  , 26
  , 66
  , 35
  , 32
  , 29
  , 29
  , 22
  , 28
  , 32
  , 19
  , 27
  , 28
  , 33
  , 15
  , 42
  , 71
  , 42
  , 36
  , 75
  , 258
  , 52
  , 50
  , 407
  , 42
  , 81
  , 77
  , 124

  , 78
  , 53
  , 51
  , 38
  , 48
  , 349
  , 44
  , 45
  , 70
  , 21
  , 53
  , 84
  , 69
  , 18
  , 28
  , 111
  , 20
  , 20
  , 20
  , 23
  , 136
  , 77
  , 100
  , 87
  , 93
  , 108
  , 93
  , 89
  , 97
  , 69
  , 166
  , 93
  , 79
  , 314
  , 70
  , 60
  , 94
  , 58
  , 358
  , 82
  , 354
  , 357
  , 198
  , 44
  , 135
  , 78
  , 190
  , 372
  , 164
  , 132
  , 218
  , 78
  , 86
  , 147
  , 260
  , 17
  , 153
  , 17
  , 39
  , 175
  , 218
  , 15
  , 40
  , 57
  , 333
  , 36
  , 34
  , 17
  , 16
  , 56
  , 13
  , 16
  , 45
  , 40
  , 27
  , 50
  , 19
  , 40
  , 115
  , 31
  , 30
  , 93
  , 86
  , 93
  , 20
  , 34
  , 77
  , 35
  , 63
  , 76
  , 90
  , 96
  , 91
  , 142
  , 101
  , 112
  , 100
  , 24
  , 42
  , 18
 
  , 14
  , 18
  , 44
  , 26
  , 11
  , 23
  , 17
  , 15
  , 44
  , 38
  , 35
  , 82
  , 17
  , 40
  , 42
  , 59
  , 32
  , 41
  , 20
  , 50
  , 162
  , 14
  , 29
  , 16
  , 23
  , 15
  , 13
  , 49
  , 28
  , 23
  , 33
  , 32
  , 89
  , 29
  , 11
  , 19
  , 103
  , 93
  , 105
  , 218
  , 45
  , 87
  , 116
  , 96
  , 14
  , 35
  , 17
  , 28
  , 16
  , 22
  , 14
  , 26
  , 17
  , 20
  , 97
  , 20
  , 35
  , 71
  , 38
  , 21
  , 22
  , 26
  , 24
  , 33
  , 53
  , 78
  , 24
  , 50
  , 42
  , 16
  , 15
  , 86
  , 71
  , 18
  , 25
  , 31
  , 100
  , 93
  , 44
  , 20
  , 26
  , 80
  , 76
  , 94
  , 29
  , 64
  , 37
  , 20
  , 98
  , 88
  , 81
  , 64
  , 72
  , 79
  , 97
  , 86
  , 79
  , 60
  , 18
  , 80
  
  , 72
  , 47
  , 97
  , 94
  , 114
  , 16
  , 20
  , 12
  , 91
  , 23
  , 11
  , 130
  , 16
  , 97
  , 122
  , 37
  , 129
  , 31
  , 28
  , 11
  , 31
  , 324
  , 27
  , 25
  , 27
  , 35],
Vegm:[100
  , 133
  , 100
  , 89
  , 130
  , 118
  , 67
  , 0.2
  , 196
  , 125
  , 105
  , 0.9
  , 236
  , 136
  , 101
  , 205
  , 0.2
  , 116
  , 50
  , 0.4
  , 194
  , 0.4
  , 22
  , 112
  , 10
  , 136
  , 51
  , 250
  , 74
  , 210
  , 139
  , 45
  , 12
  , 158
  , 38
  , 120
  , 132
  , 202
  , 10
  , 90
  , 180
  , 170
  , 120
  , 124
  , 100
  , 58
  , 120
  , 135
  , 125
  , 120
  , 135
  , 144
  , 135
  , 125
  , 184
  , 71
  , 114
  , 125
  , 246
  , 21
  , 250
  , 155
  , 122
  , 124
  , 1262
  , 125
  , 160
  , 180
  , 190
  , 155
  , 62
  , 175
  , 100
  , 145
  , 150
  , 170
  , 170
  , 256
  , 256
  , 146
  , 210
  , 170
  , 165
  , 165
  , 165
  , 53
  , 95
  , 135
  , 130
  , 42
  , 145
  , 130
  , 105
  , 278
  , 160
  , 245
  , 87
  , 61
  , 150
  , 255

  , 156
  , 99
  , 205
  , 147
  , 90
  , 58
  , 192
  , 205
  , 87
  , 245
  , 45
  , 160
  , 178
  , 165
  , 124
  , 73
  , 58
  , 74
  , 165
  , 130
  , 180
  , 120
  , 85
  , 245
  , 255
  , 115
  , 71
  , 34
  , 180
  , 202
  , 180
  , 234
  , 245
  , 205
  , 134
  , 140
  , 180
  , 180
  , 153
  , 80
  , 180
  , 180
  , 245
  , 118
  , 155
  , 60
  , 236
  , 146
  , 210
  , 98
  , 90
  , 180
  , 223
  , 220
  , 65
  , 240
  , 170
  , 114
  , 137
  , 132
  , 140
  , 135
  , 192
  , 205
  , 131
  , 64
  , 176
  , 163
  , 145
  , 156
  , 250
  , 156
  , 94
  , 104
  , 175
  , 31
  , 210
  , 145
  , 240
  , 210
  , 15
  , 121
  , 65
  , 0.4
  , 153
  , 210
  , 40
  , 245
  , 23
  , 34
  , 27
  , 67
  , 109
  , 7
  , 126
  , 62
  , 0.8
  , 44
  , 110
  , 139
  
  , 90
  , 86
  , 54
  , 16
  , 149
  , 17
  , 105
  , 148
  , 14
  , 4
  , 88
  , 90
  , 182
  , 28
  , 70
  , 86
  , 130
  , 135
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 30
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 243
  , 30
  , 180
  , 128
  , 150
  , 150
  , 245
  , 242
  , 144
  , 142
  , 136
  , 182
  , 6
  , 89
  , 22
  , 70
  , 170
  , 119
  , 145
  , 76
  , 36
  , 1262
  , 170
  , 190
  , 4
  , 9.7
  , 25
  , 284
  , 145
  , 3
  , 284
  , 53
  , 155
  , 175
  , 100
  , 123
  , 132
  , 256
  , 206
  , 62
  , 128
  , 178
  , 89
  , 284
  , 227
  , 165
  , 29
  , 210
  , 60
  , 136
  , 160
  , 180
  , 56
  , 165
  , 150
  , 228
  , 164
  , 256
  , 36
  , 107
  , 165
  , 101
  , 146
  , 89
  
  , 70
  , 170
  , 165
  , 53
  , 160
  , 145
  , 95
  , 91
  , 104
  , 135
  , 94
  , 36
  , 50
  , 42
  , 121
  , 87
  , 150
  , 72
  , 19
  , 67
  , 70
  , 77
  , 133
  , 95
  , 55
  , 28
  , 89
  , 36
  , 284
  , 180
  , 140
  , 130
  , 178
  , 2
  , 146
  , 86
  , 24
  , 58
  , 513
  , 21
  , 130
  , 56
  , 87
  , 80
  , 155
  , 146
  , 47
  , 156
  , 150
  , 180
  , 3.6
  , 99
  , 87
  , 145
  , 150
  , 136
  , 118
  , 68
  , 55
  , 28
  , 82
  , 156
  , 124
  , 56
  , 6.3
  , 160
  , 99
  , 81
  , 145
  , 89
  , 284
  , 100
  , 180
  , 108
  , 60
  , 284
  , 100
  , 284
  , 255
  , 80
  , 15
  , 331
  , 63
  , 6
  , 210
  , 105
  , 52
  , 144
  , 78
  , 160
  , 60
  , 133
  , 454
  , 160
  , 227
  , 48
  , 98
  , 145
  , 134
  , 120
 
  , 80
  , 70
  , 120
  , 255
  , 278
  , 5
  , 210
  , 180
  , 69
  , 73
  , 124
  , 160
  , 175
  , 140
  , 135
  , 153
  , 284
  , 149
  , 165
  , 160
  , 154
  , 369
  , 78
  , 78
  , 245
  , 210
  , 61
  , 299
  , 299
  , 369
  , 69
  , 137
  , 369
  , 156
  , 369
  , 180
  , 299
  , 38
  , 156
  , 105
  , 60
  , 200
  , 58
  , 300
  , 170
  , 182
  , 128
  , 200
  , 50
  , 58
  , 29
  , 34
  , 300
  , 89
  , 65
  , 284
  , 65
  , 223
  , 240
  , 128
  , 50
  , 180
  , 205
  , 340
  , 50
  , 140
  , 245
  , 124
  , 116
  , 205
  , 210
  , 240
  , 140
  , 140
  , 155
  , 205
  , 56
  , 116
  , 192
  , 101
  , 236
  , 156
  , 133
  , 170
  , 98
  , 64
  , 266
  , 35
  , 255
  , 328
  , 200
  , 176
  , 255
  , 132
  , 255
  , 104
  , 176
  , 145
  , 28
  , 240
 
  , 140
  , 149
  , 125
  , 255
  , 43
  , 180
  , 240
  , 241
  , 137
  , 250
  , 245
  , 262
  , 243
  , 71
  , 245
  , 122
  , 244
  , 250
  , 180
  , 70
  , 284
  , 175
  , 22
  , 284
  , 123
  , 120
  , 132
  , 44
  , 130
  , 156
  , 121
  , 55
  , 228
  , 164
  , 34
  , 242
  , 170
  , 299
  , 180
  , 50
  , 168
  , 78
  , 136
  , 89
  , 119
  , 9.7
  , 240
  , 135
  , 113
  , 82
  , 117
  , 15
  , 243
  , 144
  , 62
  , 153
  , 280
  , 248
  , 120
  , 284
  , 156
  , 11.6
  , 908
  , 244
  , 124
  , 80
  , 908
  , 160
  , 210
  , 135
  , 120
  , 300
  , 78
  , 240
  , 228
  , 149
  , 78
  , 299
  , 85
  , 144
  , 12
  , 165
  , 328
  , 165
  , 220
  , 256
  , 62
  , 284
  , 165
  , 165
  , 164
  , 256
  , 256
  , 210
  , 89
  , 73
  , 210
  , 275
  , 140
  , 165
  
  , 256
  , 104
  , 89
  , 165
  , 136
  , 135
  , 153
  , 143
  , 160
  , 192
  , 155
  , 245
  , 135
  , 240
  , 160
  , 5
  , 15
  , 87
  , 146
  , 143
  , 64
  , 37
  , 124
  , 2
  , 186
  , 15],
Veg:["南瓜", "茄子、熟的、煮熟、去水、含盐", "土豆熟的", "蘑菇、白蘑菇、熟的、煮熟、去水、含盐", "萝卜、东方萝卜、熟的、煮熟、去水、含盐", "南瓜、夏季、西葫芦、含皮、熟的、煮熟、去水、含盐", "南瓜、夏南瓜、弯颈南瓜和直颈南瓜、冷冻、熟的、煮熟、去水、含盐", "风信子豆、未成熟种子、熟的、煮熟、去水、含盐", "南瓜、熟的、煮熟、去水、含盐", "南瓜、冬季、橡子、熟的、烘焙、含盐", "葫芦、抹布（拖网）、熟的、煮熟、去水、含盐", "小商陆嫩枝，（戳），熟的，煮熟，去水，含盐", "韭菜，（鳞茎和下叶部分），熟的，煮熟，去水，含盐", "豌豆、青豆、熟的、煮熟、去水、含盐", "辣椒、辣椒、红辣椒、生的", "辣椒、辣椒、红辣椒、罐装、不包括种子、固体和液体", "土豆、法式炸土豆、所有类型、加工时不添加盐、冷冻、烤箱加热", "土豆、烤土豆含盐", "大头菜、熟的、煮熟、去水、含盐", "羽衣甘蓝、冷冻、熟的、煮熟、去水、含盐", "秋葵、冷冻、熟的、煮熟、去水、含盐", "南瓜、夏南瓜、弯颈南瓜和直颈南瓜、熟的、煮熟、去水、含盐", "南瓜叶、熟的、煮熟、去水、含盐", "豌豆、青豆、罐装、不添加盐、去水固体", "马齿苋、熟的、煮熟、去水、含盐", "芦笋、熟的、煮熟、去水、含盐", "南瓜、冬季、橡子、熟的、煮熟、捣碎、含盐", "芥末菠菜，（嫩绿色），即食，煮熟，去水，含盐", "土豆、微波炉、熟的、带皮、带肉和带皮、含盐", "土豆、煮熟、带皮煮熟、带皮、含盐", "芥菜、熟的、煮熟、去水、含盐", "土豆、扇贝、自制人造黄油", "南瓜、鲜花、熟的、煮熟、去水、含盐", "菠菜、罐装、不添加盐、固体和液体", "南瓜、冬季、所有品种、熟的、烘焙、含盐", "黄豆、青豆、熟的、煮熟、去水、含盐", "南瓜、夏季、所有品种、熟的、煮熟、去水、含盐", "羔羊宿舍、熟的、煮熟、去水、含盐", "木豆、未成熟种子、熟的、煮熟、去水、含盐", "秋葵、熟的、煮熟、去水、含盐", "莲藕、熟的、煮熟、去水、含盐", "菠菜、熟的、煮熟、去水、含盐", "南瓜、冬南瓜、哈伯德南瓜、熟的、煮熟、捣碎、含盐", "南瓜、冬南瓜、意大利面、熟的、煮熟、去水或烘焙、含盐", "豌豆和洋葱、冷冻、熟的、煮熟、去水、含盐", "辣根树、豆荚、熟的、煮熟、去水、含盐", "葫芦、白花（葫芦）、熟的、煮熟、去水、含盐", "土豆、金烤土豆条、用人造黄油自制", "洋葱、冷冻、全洋葱、熟的、煮熟、去水、含盐", "沼泽卷心菜、熟的、煮熟、去水、含盐", "南瓜、夏季、西葫芦、包括皮、冷冻、熟的、煮熟、去水、含盐", "土豆、法式炸土豆、所有类型、加工时未添加盐、冷冻、购买时", "红薯、熟的、皮烤、含盐", "南瓜、夏季、扇贝、熟的、煮熟、去水、含盐", "新西兰菠菜、熟的、煮熟、去水、含盐", "南瓜、冬南瓜、白果、冷冻、熟的、煮熟、含盐", "菠菜、冷冻、剁碎或叶、熟的、煮熟、去水、含盐", "豆蔻，（玉米和柠檬），冷冻，即食，煮熟，去水，含盐", "芋头、塔希提岛、熟的、含盐", "芋头、熟的、含盐", "南瓜、冬南瓜、哈伯德南瓜、熟的、烘焙、含盐", "甘薯叶、熟的、蒸熟、含盐", "番茄制品、罐装、酱、添加盐", "鲑鱼、熟的、煮熟、去水、含盐", "芋头、嫩枝、熟的、含盐", "豆蔻，（玉米和柠檬），熟的，煮熟，去水，含盐", "甘薯、冷冻、熟的、烘焙、含盐", "芋头、叶、熟的、清蒸、含盐", "萝卜、冷冻、熟的、煮熟、去水、含盐", "萝卜青菜和萝卜、冷冻、熟的、煮熟、去水、含盐", "大豆、成熟种子、豆芽、熟的、蒸熟、含盐", "番茄制品、罐装、酱、添加盐", "冬瓜（冬瓜）、熟的、煮熟、去水、含盐", "树蕨、熟的、含盐", "田菁花、熟的、蒸熟、含盐", "萝卜、熟的、煮熟、去水、含盐", "土豆泥、颗粒制备、不含牛奶、全脂牛奶和人造黄油", "山药，夏威夷，即食，清蒸，含盐", "猫食", "土豆泥、土豆泥、薄片制备、不含牛奶、全脂牛奶和人造黄油", "蘑菇、portabella、紫外线照射、烧烤", "土豆泥、自制、添加全脂牛奶和黄油", "辣椒、甜椒、红辣椒、冻干", "Radicchio，生的", "泡菜、热狗", "泡菜、炒菜、菜花、洋葱、芥末、甜的", "泡菜、黄瓜、莳萝、低钠", "豆子、豆角、黄色、罐装、普通包装、去水固体", "上海青", "菠菜，生的", "胡椒、匈牙利胡椒、生的", "花椰菜、绿色、熟的、含盐", "柠檬草（香茅），生", "卷心菜、纳帕菜、熟的", "辣椒、帕西拉、干辣椒", "豆子、蚕豆、豆荚、生的", "肩胛骨，生的", "辣椒、辣椒、青椒、罐装", "马拉巴菠菜、熟的", "西红柿、晒干、油包装、去水","无糖，生的", "南瓜、西葫芦、婴儿、生的", "西红柿，晒干", "花椰菜、绿色、熟的、不添加盐", "无糖、熟的、无盐", "胡椒、凤尾鱼、干的", "蘑菇、牡蛎、生的", "葡萄叶，生的", "胡椒、塞拉诺、生的", "葡萄叶，罐装", "胡椒、墨西哥胡椒、生的", "蘑菇、稻草、罐装、去水固体", "西兰花、中国菜、熟的", "洋葱，生的", "蘑菇、冬菇、生的", "蘑菇，门贝拉，紫外线照射，生", "真菌，云耳，干燥", "芥末、根、生的", "坎贝尔汤公司，V8蔬菜汁，有机V8", "坎贝尔汤公司，番茄汁", "金宝汤公司，有机番茄汁", "坎贝尔汤公司，V8蔬菜汁，低钠V8", "金宝汤公司，番茄汁，低钠", "金宝汤公司，佩斯，青椒丁", "金宝汤公司，健康要求番茄汁", "坎贝尔V8 100%蔬菜汁", "坎贝尔汤公司，V8蔬菜汁，高纤维V8", "坎贝尔汤公司，V8蔬菜汁，富钙V8", "坎贝尔汤公司，V8蔬菜汁，有机V8", "坎贝尔汤公司，番茄汁", "坎贝尔汤公司，V8蔬菜汁，富钙V8", "坎贝尔V8 100%蔬菜汁", "金宝汤公司，番茄汁，低钠", "坎贝尔汤公司，V8蔬菜汁，低钠V8", "金宝汤公司，健康要求番茄汁", "金宝汤公司，佩斯，青椒丁", "金宝汤公司，有机番茄汁", "坎贝尔汤公司，V8蔬菜汁，高纤维V8", "土豆、罐装、去水固体、不添加盐", "卷心菜、芥末、咸的", "萝卜，夏威夷风味，腌制", "低钠番茄蔬菜汁", "泡菜、罐装、低钠", "萝卜青菜、罐装、不添加盐", "卷心菜，日式，新鲜，腌制", "番茄酱，不加盐", "酵母浸膏", "茄子，腌制", "卷心菜、红的、生的", "蔬菜，混合（玉米、利马豆、豌豆、绿豆、胡萝卜）罐装，不添加盐", "卷心菜、红色、熟的、煮熟、去水、无盐", "卷心菜、大白菜、生的", "卷心菜、萨沃伊、生的", "卷心菜、大白菜、熟的、煮熟、去水、无盐", "白菜、中国菜（白菜）、熟的、煮熟、去水、无盐", "卷心菜、萨沃伊菜、熟的、煮熟、去水、无盐", "瑞士、生的", "甘蓝菜、熟的、煮熟、去水、无盐", "羽衣甘蓝、冷冻、剁碎、熟的、煮熟、去水、无盐", "羽衣甘蓝、熟的、煮熟、去水、无盐", "花椰菜、冷冻、未经料理", "玉米、甜玉米、黄玉米、生的", "韭菜、生的", "菊花、花环、生的", "芫荽叶，生", "胡萝卜、熟的、煮熟、去水、无盐", "芹菜、熟的、煮熟、去水、无盐", "羽衣，冷冻，切碎，未经准备", "烧焦、瑞士菜、熟的、煮熟、去水、无盐", "菊苣、威特洛夫、生的", "胡萝卜、罐装、普通包装、固体和液体", "菊花、花环、熟的、煮熟、去水、无盐", "佛手瓜、水果、生的", "木薯、生的", "玉米、甜味、黄色、罐装、奶油型、普通包装", "花椰菜、熟的、煮熟、去水、无盐", "万向节，生的", "胡萝卜、生的", "玉米、甜玉米、黄玉米、熟的、煮熟、去水、无盐", "胡萝卜、冷冻、未经料理", "红椒和青椒玉米，罐装", "玉米、甜玉米、黄玉米、冷冻、玉米粒切碎、未经料理", "玉米、甜味、黄色、罐装、真空包装、普通包装", "菊苣绿，生的", "菊苣根，生的", "玉米、甜玉米、黄玉米、冷冻、玉米棒子仁、熟的、煮熟、去水、无盐", "佛手瓜、水果、熟的、煮熟、去水、无盐", "玉米沙拉，生的", "花椰菜、冷冻、熟的、煮熟、去水、无盐", "玉米、甜玉米、黄玉米、冷冻、切下的玉米粒、煮熟、去水、无盐", "生菜花", "玉米、甜味、黄色、罐装、盐水包、普通包、固体和液体", "胡萝卜、罐装、普通包装、去水固体", "衣领，生的", "玉米、甜玉米、黄玉米、冷冻、玉米棒子仁、未经料理", "芹菜、熟的、煮熟、去水、无盐", "玉米、甜玉米、黄玉米、罐装、整粒、去水固体", "芹菜、生的", "卷心菜、生的", "胡萝卜、冷冻、熟的、煮熟、去水、无盐","豇豆、叶尖、熟的、煮熟、去水、无盐", "白菜、中国菜（白菜）、生的", "豇豆（黑眼），未成熟种子，冷冻，未经准备", "豇豆（黑眼），未成熟种子，生", "豇豆（黑眼豆）、未成熟种子、熟的、煮熟、去水、无盐", "豇豆（黑眼豆）、未成熟种子、冷冻、熟的、煮熟、去水、无盐", "亚德龙豆、生的", "亚德龙豆、熟的、煮熟、去水、无盐", "豇豆、带籽豆荚、熟的、煮熟、去水、无盐", "水芹、菜园、熟的、煮熟、去水、无盐", "辣根树，叶尖，即食，煮熟，去水，无盐", "豇豆、带种子的豆荚、生的", "蘑菇、烧烤", "风信子豆、未成熟种子、熟的、煮熟、去水、无盐", "生菜、冰山（包括薯片类）、生的", "豇豆、叶尖、生的", "水芹、菜园、生的", "生菊芋", "蘑菇、香菇、生的", "羽衣甘蓝、生的", "小扁豆、发芽、生的", "黄瓜、去皮、生的", "蘑菇、香菇、炒", "葫芦、抹布（毛巾）、生的", "生菜、毛茛（包括波士顿和比伯类型）、生的", "生菜、红叶、生的", "生菜、绿叶、生的", "蘑菇、白蘑菇、生的", "羽衣甘蓝、冷冻、未经准备", "羊羔肉粉碎机、熟的、煮熟、去水、无盐", "葫芦、抹布（拖网）、熟的、煮熟、去水、无盐", "芥菜、熟的、煮熟、去水、无盐", "生姜根", "羽衣甘蓝、熟的、煮熟、去水、无盐", "蘑菇、portabella、生的", "芥菜、冷冻、未经料理的", "葫芦、白花（葫芦）、生的", "Endive，生的", "Pepeao，干的", "辣根树叶尖，生", "甘蓝、冷冻、熟的、煮熟、去水、无盐", "蘑菇、棕色、意大利或深红色、生的", "芥菜、生的", "风信子豆、未成熟种子、生的", "毛豆、冷冻、制备", "葫芦、白花（葫芦）、熟的、煮熟、去水、无盐", "芥末菠菜，（嫩绿色），即食，煮熟，去水，无盐", "芥菜、冷冻、熟的、煮熟、去水、无盐", "生菜、生菜或生菜", "蘑菇、白蘑菇、熟的、煮熟、去水、无盐", "大蒜、生的", "黄麻、野菜、熟的、煮熟、去水、无盐", "山药，夏威夷，生的", "蘑菇、香菇、熟的、无盐", "蘑菇、香菇、干蘑菇", "犹太人的耳朵，（pepeao），生的", "芥末菠菜，（嫩绿色），生的", "蒲公英绿，生的", "毛豆，冷冻，未经准备", "黄麻、野菜、生的", "蘑菇、罐装、去水固体", "韭菜，（鳞茎和下叶部分），熟的，煮熟，去水，无盐", "洋葱、生的", "干杓（干葫芦条）", "茄子、生的", "新西兰菠菜、生的", "莲藕、生的", "茄子、熟的、煮熟、去水、无盐", "山药，夏威夷，即食，清蒸，无盐", "韭菜，（鳞茎和下叶部分），生的", "秋葵，冷冻，未经准备", "蘑菇、白蘑菇、炒蘑菇", "洋葱、冷冻、全洋葱、未经料理", "秋葵，生的", "新西兰菠菜、熟的、煮熟、去水、无盐", "莲藕、熟的、煮熟、去水、无盐", "洋葱、大葱或大葱（包括顶部和鳞茎）、生的", "秋葵、冷冻、熟的、煮熟、去水、无盐", "秋葵、熟的、煮熟、去水、无盐", "洋葱、冷冻、切碎、未经料理", "洋葱、罐装、固体和液体", "洋葱，嫩绿色，仅顶部", "洋葱、冷冻、剁碎、熟的、煮熟、去水、无盐", "蒲公英绿，即食，煮熟，去水，无盐", "洋葱、冷冻、全洋葱、熟的、煮熟、去水、无盐", "豌豆，可食豆荚，冷冻，未经料理", "洋葱、甜的、生的", "黄瓜、带皮、生的", "欧芹、熟的、煮熟、去水、无盐", "豌豆、可食豆荚、煮熟、去水、无盐", "欧芹、生的", "防风，生的", "洋葱圈、面包、油炸、冷冻、熟的、在烤箱中加热", "豌豆、青豆、罐装、调味、固体和液体", "豌豆、可食豆荚、冷冻、熟的、煮熟、去水、无盐", "洋葱圈、面包、油炸、冷冻、未经料理", "豌豆、青豆、冷冻、未经料理", "豌豆、可食用豆荚、生的", "豌豆、成熟种子、发芽、生的", "豌豆、青豆、生的","豌豆和胡萝卜，冷冻，未经料理", "洋葱、脱水薄片", "豌豆和胡萝卜、罐装、普通包装、固体和液体", "豌豆和洋葱、罐装、固体和液体", "豌豆和胡萝卜、冷冻、熟的、煮熟、去水、无盐", "洋葱、熟的、煮熟、去水、无盐", "豌豆和洋葱、冷冻、未经料理", "豌豆、青豆、冷冻、熟的、煮熟、去水、无盐", "豌豆和洋葱、冷冻、熟的、煮熟、去水、无盐", "辣椒、辣椒、青椒、罐装、豆荚、种子、固体和液体除外", "豌豆、青豆、罐装、普通包装、固体和液体", "胡椒、甜椒、青椒、罐装、固体和液体", "豌豆、青豆、熟的、煮熟、去水、无盐", "木豆、未成熟种子、熟的、煮熟、去水、无盐", "胡椒、甜椒、青椒、熟的、煮熟、去水、无盐", "胡椒、甜椒、青椒、冷冻、剁碎、未经料理", "小商陆嫩枝，（戳），熟的，煮熟，去水，无盐", "山茱萸嫩枝，（戳），生的", "豌豆、青豆（包括婴儿型和莱瑟型）、罐装、去水固体、未经料理", "胡椒、甜椒、青椒、生的", "土豆、微波炉、皮煮、肉、无盐", "木豆、未成熟种子、生的", "土豆、煮熟、皮煮、肉、无盐", "土豆、肉和皮、生的", "土豆泥、脱水、无牛奶颗粒制备、添加全脂牛奶和黄油", "土豆、烤土豆、肉、无盐", "土豆、白土豆、肉和皮、生的", "土豆、黄褐色、肉和皮、烘焙", "土豆、红色、肉和皮、烘焙", "土豆、扇贝、干拌、加水、全脂牛奶和黄油", "土豆、烤熟、干拌、用水配制、全脂牛奶和黄油", "土豆、烤熟、干拌、未经料理", "土豆、黄褐色、肉和皮、生的", "土豆、罐装、去水固体", "土豆、法式炸土豆、起皱或普通切土豆、加工时添加盐、冷冻、烤箱加热", "土豆、红土豆、肉和皮、生的", "土豆、白土豆、肉和皮、烘焙", "土豆、扇贝、干拌、未经料理", "土豆、生的、皮的", "土豆、土豆沙、冷冻、原味、未经料理", "土豆、冷冻、全土豆、未经料理", "土豆、土豆泥、脱水、无奶薄片、干型", "土豆、罐装、固体和液体", "土豆、烘焙、去皮、无盐", "土豆、土豆沙、冷冻、加黄油酱、未经料理", "土豆泥、脱水、带奶颗粒、干型", "土豆酥、冷冻、烤箱加热", "土豆泥、脱水、无奶颗粒、干型", "土豆、法式炸土豆、所有类型、加工时添加盐、冷冻、自制、烤箱加热", "土豆、微波炉、去皮、去皮、无盐", "土豆、土豆沙、冷冻、原味、熟的", "土豆、炸土豆条、所有类型、加工时添加盐、冷冻、未经料理", "土豆、冷冻、炸薯条、油炸土豆条、家常菜、未经料理", "土豆、煮熟、去皮、去皮、无盐", "南瓜、夏季、西葫芦、含皮、冷冻、熟的、煮熟、去水、无盐", "土豆、冷冻、法式炸、未经料理", "南瓜，夏季，西葫芦，含皮，冷冻，未经准备", "土豆酥、冷冻、未经料理", "南瓜、冬南瓜、白果、冷冻、熟的、煮熟、无盐", "土豆、煮熟、无皮烹调、肉、无盐", "南瓜、冬南瓜、奶油坚果、冷冻、未经准备", "土豆、冷冻、法式炸", "南瓜、夏季、西葫芦、含皮、熟的、煮熟、去水、无盐", "芦苇，生的", "南瓜、冬南瓜、奶油坚果、熟的、烘焙、无盐", "土豆、冷冻、法式炸、挤压、熟的、无盐", "南瓜、夏季、西葫芦、含皮、生的", "南瓜、冬季、橡子、熟的、烘焙、无盐", "萝卜、生的", "南瓜、冬季、橡子、熟的、煮熟、捣碎、无盐", "南瓜、夏季、弯颈和直颈、罐装、去水、固体、无盐", "南瓜、冬南瓜、白果、生的", "南瓜、冬南瓜、哈伯德南瓜、熟的、烘焙、无盐", "南瓜、夏季、扇贝、熟的、煮熟、去水、无盐", "南瓜、冬南瓜、橡子、生的", "南瓜、冬南瓜、意大利面、熟的、煮熟、去水或烘焙、无盐", "沼泽卷心菜， ", "南瓜、冬季、意大利面、生的", "南瓜、冬南瓜、哈伯德南瓜、生的", "豆蔻，（玉米和柠檬），熟的，煮熟，去水，无盐", "豆蔻，（玉米和柠檬）、冷冻、熟的、煮熟、去水、无盐", "沼泽卷心菜、熟的、煮熟、去水、无盐", "甘薯叶、熟的、蒸熟、无盐", "甘薯、生的、未经料理的", "南瓜、冬南瓜、哈伯德南瓜、熟的、煮熟、捣碎、无盐", "豆蔻，（玉米和柠檬），冷冻，未经料理", "豆蔻罐装，含奶油型玉米", "甘薯叶，生的", "豆蔻，罐装，含整粒玉米，固体和液体", "甘薯、熟的、煮熟、无皮", "芋头、生的", "甘薯、冷冻、未经料理", "红薯、罐装、捣碎", "芋头、熟的、无盐", "红薯、罐装、真空包装", "甘薯、熟的、皮烤、无盐", "芋头叶、熟的、蒸的、无盐", "甘薯、冷冻、熟的、烘焙、无盐", "芋头叶，生的", "西红柿、红色、熟的、熟的","番茄、红色、熟的、生的、全年平均", "芋头笋、熟的、无盐", "芋头、大溪地、生的", "芋头笋，生的", "西红柿、红色、熟的、罐装、炖熟", "西红柿、绿色、生的", "西红柿、红色、熟的、罐装、带绿辣椒", "芋头、塔希提岛、熟的、无盐", "西红柿、红色、熟的、罐装、装在西红柿汁中", "番茄制品、罐装、酱、不加盐", "番茄制品、罐装、沙司、蘑菇", "番茄制品、罐装、沙司、洋葱", "番茄汁、罐装、添加盐", "树蕨，熟的，无盐", "番茄制品、罐装、沙司、带番茄花边", "番茄制品、罐装、沙司、香草和奶酪", "番茄制品、罐装、酱、不加盐", "南瓜、夏季、所有品种、熟的、煮熟、去水、无盐", "水花生、中国菜、罐装、固体和液体", "番茄制品、罐装、沙司、洋葱、青椒和芹菜", "豆子、豆角、黄色、罐装、不添加盐、固体和液体", "胡萝卜、罐装、不添加盐、固体和液体", "冬瓜，生", "芜菁、冷冻、未经料理", "冬瓜（冬瓜）、熟的、煮熟、去水、无盐", "豆类、平托豆、未成熟种子、冷冻、熟的、煮熟、去水、含盐", "卷心菜、红色、熟的、煮熟、去水、含盐", "四季豆、未成熟种子、生的", "芜菁、生的", "芜菁、冷冻、熟的、煮熟、去水、无盐", "蔬菜汁鸡尾酒，罐装", "芜菁绿、生的", "甘薯、罐装、糖浆包、固体和液体", "萝卜青菜、冷冻、熟的、煮熟、去水、无盐", "土豆、烘焙、肉和皮、无盐", "豆瓣菜、生的", "利马豆、未成熟种子、冷冻、婴儿、熟的、煮熟、去水、含盐", "利马豆、未成熟种子、冷冻、fordhook、熟的、煮熟、去水、含盐", "土豆、冷冻、炸土豆条、油炸土豆条、平房菜、熟的、在烤箱中加热、含盐", "豆子、豆角、黄色、冷冻、所有类型、未经准备", "土豆、煮熟、皮煮、肉、含盐", "玉米、甜玉米、黄玉米、熟的、煮熟、去水、含盐", "洋蓟（洋蓟或洋蓟）、冷冻、熟的、煮熟、去水、含盐", "卷心菜、大白菜（pe-tsai）、熟的、煮熟、去水、含盐", "胡萝卜、熟的、煮熟、去水、含盐", "南瓜、夏季、所有品种、生的", "西红柿、红色、熟的、罐装、装在西红柿汁中、不添加盐", "山药、熟的、煮熟、去水或烘焙、无盐", "萝卜青菜、冷冻、未经料理", "胡椒、甜椒、红辣椒、熟的、煮熟、去水、无盐", "番茄汁、罐装、无盐", "豆子、豆角、青豆、罐装、不添加盐、去水固体", "萝卜青菜、罐装、固体和液体", "萝卜青菜、熟的、煮熟、去水、无盐", "水芹，中国，（马太），生", "西兰花、熟的、煮熟、去水、含盐", "山药豆，生", "利马豆、未成熟种子、罐装、不添加盐、固体和液体", "萝卜青菜和萝卜，冷冻，未经料理", "洋葱、冷冻、剁碎、熟的、煮熟、去水、含盐", "番茄制品、罐装、沙司、西班牙风味", "胡椒、甜椒、青椒、熟的、煮熟、去水、含盐", "卷心菜、普通（丹麦菜、家菜和尖头菜）、贮藏、生的", "豌豆、青豆、冷冻、熟的、煮熟、去水、含盐", "豌豆、青豆、罐装、不添加盐、固体和液体", "芜菁、熟的、煮熟、去水、无盐", "卷心菜、普通（丹麦菜、家常菜和尖头菜）、新鲜收获、生的", "洋葱、熟的、煮熟、去水、含盐", "豌豆、可食豆荚、冷冻、熟的、煮熟、去水、含盐", "胡椒、甜椒、青椒、冷冻、剁碎、熟的、煮熟、去水、含盐", "胡椒、甜椒、红辣椒、生的", "豆子、豆角、黄色、罐装、普通包装、固体和液体", "土豆、煮熟、无皮烹调、肉、含盐", "西红柿、红色、熟的、熟的、含盐", "防风、熟的、煮熟、去水、含盐", "胡萝卜、罐装、不添加盐、去水固体", "土豆、烘焙、肉和皮、含盐", "土豆、微波炉、皮煮、肉、含盐", "甜菜、熟的、煮熟的。排水，含盐", "萝卜青菜、熟的、煮熟、去水、含盐", "甘薯、熟的、煮熟、无皮、含盐", "萝卜青菜、冷冻、熟的、煮熟、去水、含盐", "玉米、甜玉米、白玉米、罐装、整粒、普通包装、固体和液体", "胡椒、甜椒、红辣椒、冷冻、剁碎、未经料理", "胡椒、甜椒、红辣椒、熟的、煮熟、去水、含盐", "玉米、甜玉米、白玉米、冷冻、切下的玉米粒、煮熟、去水、无盐", "四季豆、未成熟种子、熟的、煮熟、去水、含盐", "玉米、甜玉米、白玉米、冷冻、玉米棒子仁、未经料理", "玉米、甜玉米、白玉米、冷冻、玉米棒子仁、熟的、煮熟、去水、无盐", "玉米、甜玉米、白玉米、冷冻、玉米粒切碎、未经料理", "玉米、甜玉米、白玉米、熟的、煮熟、去水、无盐", "玉米、甜玉米、白玉米、罐装、整粒、去水固体", "玉米、甜玉米、白玉米、生的", "玉米、甜玉米、白玉米、罐装、奶油型、普通包装", "玉米、甜玉米、白玉米、罐装、整粒、不添加盐、固体和液体", "玉米、甜玉米、白玉米、罐装、真空包装、不添加盐", "胡椒、甜椒、红辣椒、罐装、固体和液体", "玉米、甜玉米、白玉米、冷冻、切碎的玉米粒、煮熟、去水、含盐", "玉米、甜玉米、白玉米、罐装、真空包装、普通包装", "蔬菜、混合、冷冻、熟的、煮熟、去水、含盐","玉米、甜玉米、白玉米、冷冻、玉米棒子仁、熟的、煮熟、去水、含盐", "山药、熟的、煮熟、去水或烘焙、含盐", "亚德龙豆、熟的、煮熟、去水、含盐", "玉米、甜玉米、白玉米、罐装、奶油型、不添加盐", "胡椒、甜椒、红辣椒、冷冻、剁碎、熟的、煮熟、去水、无盐", "玉米、甜玉米、白玉米、熟的、煮熟、去水、含盐", "腌菜、黄瓜、莳萝或犹太莳萝", "腌菜、黄瓜、甜的（包括面包和黄油腌菜）", "皮门托，罐装", "豆类、豆角、黄色、罐装、不添加盐、去水固体", "番茄酱，低钠", "泡菜味，甜的", "胡椒、甜椒、红辣椒、冷冻、剁碎、熟的、煮熟、去水、含盐", "蘑菇、木菇、生的", "酸黄瓜泡菜", "茴香、球茎、生的", "棕榈心，罐装", "泡菜、黄瓜、酸的、低钠", "咸菜味，汉堡包", "腌菜、黄瓜、甜味、低钠（包括面包和黄油腌菜）","芝麻菜、生的", "胡萝卜，宝贝，生的", "花椰菜、绿色、生的", "辣椒、辣椒、晒干", "胡椒、香蕉、生的", "胡椒、甜椒、黄色、生的"

],
Veg2:["Horseradish-tree, pods, raw"
, "Dock, raw"
, "Eppaw, raw"
, "Borage, raw"
, "Kale, scotch, cooked, boiled, drained, without salt"
, "Horseradish-tree, pods, cooked, boiled, drained, without salt"
, "Kale, scotch, raw"
, "Chives, freeze-dried"
, "Sweet potato, canned, syrup pack, drained solids"
, "Beans, mung, mature seeds, sprouted, canned, drained solids"
, "Sweet potato, cooked, candied, home-prepared"
, "Shallots, freeze-dried"
, "Carrot juice, canned"
, "Peppers, jalapeno, canned, solids and liquids"
, "Tomatoes, red, ripe, cooked, stewed"
, "Squash, winter, all varieties, cooked, baked, without salt"
, "Leeks, (bulb and lower-leaf portion), freeze-dried"
, "Squash, winter, all varieties, raw"
, "Radishes, white icicle, raw"
, "Parsley, freeze-dried"
, "Potatoes, o'brien, home-prepared"
, "Peppers, sweet, green, freeze-dried"
, "Potato pancakes"
, "Seaweed, spirulina, dried"
, "Seaweed, wakame, raw"
, "Spinach souffle"
, "Chrysanthemum leaves, raw"
, "Corn pudding, home prepared"
, "Carrot, dehydrated"
, "Potatoes, mashed, home-prepared, whole milk added"
, "Tomatoes, yellow, raw"
, "Peppers, hot chili, green, raw"
, "Arrowhead, cooked, boiled, drained, with salt"
, "Tomatoes, orange, raw"
, "Radish seeds, sprouted, raw"
, "Arrowroot, raw"
, "Amaranth leaves, cooked, boiled, drained, with salt"
, "Potatoes, microwaved, cooked in skin, flesh and skin, without salt"
, "Shallots, raw"
, "Asparagus, cooked, boiled, drained, with salt"
, "Asparagus, frozen, cooked, boiled, drained, with salt"
, "Lima beans, immature seeds, cooked, boiled, drained, with salt"
, "Artichokes, (globe or french), cooked, boiled, drained, with salt"
, "Mung beans, mature seeds, sprouted, cooked, boiled, drained, with salt"
, "Beans, snap, yellow, raw"
, "Balsam-pear (bitter gourd), leafy tips, cooked, boiled, drained, with salt"
, "Bamboo shoots, cooked, boiled, drained, with salt"
, "Beans, snap, green, frozen, cooked, boiled, drained, with salt"
, "Beans, snap, green, cooked, boiled, drained, with salt"
, "Beans, snap, green, canned, no salt added, solids and liquids"
, "Beans, snap, yellow, frozen, cooked, boiled, drained, with salt"
, "Beet greens, cooked, boiled, drained, with salt"
, "Beans, snap, yellow, frozen, cooked, boiled, drained, without salt"
, "Beans, snap, yellow, cooked, boiled, drained, without salt"
, "Broccoli, frozen, chopped, cooked, boiled, drained, with salt"
, "Broccoli, flower clusters, raw"
, "Broccoli, stalks, raw"
, "Beans, snap, yellow, cooked, boiled, drained, with salt"
, "Beets, canned, no salt added, solids and liquids"
, "Brussels sprouts, cooked, boiled, drained, with salt"
, "Broccoli, frozen, spears, cooked, boiled, drained, with salt"
, "Brussels sprouts, frozen, cooked, boiled, drained, with salt"
, "Asparagus, canned, no salt added, solids and liquids"
, "Balsam-pear (bitter gourd), pods, cooked, boiled, drained, with salt"
, "Cabbage, common, cooked, boiled, drained, with salt"
, "Burdock root, cooked, boiled, drained, with salt"
, "Chayote, fruit, cooked, boiled, drained, with salt"
, "Cauliflower, frozen, cooked, boiled, drained, with salt"
, "Collards, cooked, boiled, drained, with salt"
, "Celeriac, cooked, boiled, drained, with salt"
, "Cauliflower, cooked, boiled, drained, with salt"
, "Chard, swiss, cooked, boiled, drained, with salt"
, "Chrysanthemum, garland, cooked, boiled, drained, with salt"
, "Cabbage, savoy, cooked, boiled, drained, with salt"
, "Celery, cooked, boiled, drained, with salt"
, "Cabbage, chinese (pak-choi), cooked, boiled, drained, with salt"
, "Collards, frozen, chopped, cooked, boiled, drained, with salt"
, "Corn, sweet, yellow, canned, cream style, no salt added"
, "Corn, sweet, yellow, canned, no salt added, solids and liquids"
, "Carrots, frozen, cooked, boiled, drained, with salt"
, "Corn, sweet, yellow, canned, vacuum pack, no salt added"
, "Cowpeas (Blackeyes), immature seeds, frozen, cooked, boiled, drained, with salt"
, "Cowpeas (Blackeyes), immature seeds, cooked, boiled, drained, with salt"
, "Corn, sweet, yellow, frozen, kernels on cob, cooked, boiled, drained, with salt"
, "Corn, sweet, yellow, frozen, kernels, cut off cob, boiled, drained, with salt"
, "Cowpeas, leafy tips, cooked, boiled, drained, with salt"
, "Cowpeas, young pods with seeds, cooked, boiled, drained, with salt"
, "Cress, garden, cooked, boiled, drained, with salt"
, "Kale, cooked, boiled, drained, with salt"
, "Horseradish-tree, leafy tips, cooked, boiled, drained, with salt"
, "Mushrooms, shiitake, cooked, with salt"
, "Kale, scotch, cooked, boiled, drained, with salt"
, "Dandelion greens, cooked, boiled, drained, with salt"
, "Peas and carrots, frozen, cooked, boiled, drained, with salt"
, "Peas, edible-podded, cooked, boiled, drained, with salt"
, "Pumpkin, canned, with salt"
, "Jute, potherb, cooked, boiled, drained, with salt"
, "Potatoes, baked, flesh, with salt"
, "Mustard greens, frozen, cooked, boiled, drained, with salt"
, "Peas and carrots, canned, no salt added, solids and liquids"

, "Mushrooms, white, cooked, boiled, drained, with salt"
, "Eggplant, cooked, boiled, drained, with salt"
, "Squash, winter, butternut, cooked, baked, with salt"
, "Radishes, oriental, cooked, boiled, drained, with salt"
, "Squash, summer, zucchini, includes skin, cooked, boiled, drained, with salt"
, "Potatoes, microwaved, cooked, in skin, skin with salt"
, "Squash, summer, crookneck and straightneck, frozen, cooked, boiled, drained, with salt"
, "Squash, winter, acorn, cooked, baked, with salt"
, "Hyacinth-beans, immature seeds, cooked, boiled, drained, with salt"
, "Pumpkin, cooked, boiled, drained, with salt"
, "Peppers, hot chili, red, raw"
, "Peas, green, cooked, boiled, drained, with salt"
, "Gourd, dishcloth (towelgourd), cooked, boiled, drained, with salt"
, "Pokeberry shoots, (poke), cooked, boiled, drained, with salt"
, "Leeks, (bulb and lower leaf-portion), cooked, boiled, drained, with salt"
, "Peppers, hot chili, red, canned, excluding seeds, solids and liquids"
, "Potatoes, baked, skin, with salt"
, "Potatoes, french fried, all types, salt not added in processing, frozen, oven-heated"
, "Kohlrabi, cooked, boiled, drained, with salt"
, "Kale, frozen, cooked, boiled, drained, with salt"
, "Squash, summer, crookneck and straightneck, cooked, boiled, drained, with salt"
, "Rutabagas, cooked, boiled, drained, with salt"
, "Peas, green, canned, no salt added, drained solids"
, "Squash, winter, acorn, cooked, boiled, mashed, with salt"
, "Okra, frozen, cooked, boiled, drained, with salt"
, "Purslane, cooked, boiled, drained, with salt"
, "Pumpkin leaves, cooked, boiled, drained, with salt"
, "Potatoes, boiled, cooked in skin, skin, with salt"
, "Mustard spinach, (tendergreen), cooked, boiled, drained, with salt"
, "Potatoes, microwaved, cooked, in skin, flesh and skin, with salt"
, "Soybeans, green, cooked, boiled, drained, with salt"
, "Spinach, canned, no salt added, solids and liquids"
, "Potatoes, scalloped, home-prepared with margarine"
, "Squash, winter, all varieties, cooked, baked, with salt"
, "Pumpkin, flowers, cooked, boiled, drained, with salt"
, "Mustard greens, cooked, boiled, drained, with salt"
, "Squash, summer, all varieties, cooked, boiled, drained, with salt"
, "Lambs quarters, cooked, boiled, drained, with salt"
, "Pigeonpeas, immature seeds, cooked, boiled, drained, with salt"
, "Okra, cooked, boiled, drained, with salt"
, "Peas and onions, frozen, cooked, boiled, drained, with salt"
, "Spinach, cooked, boiled, drained, with salt"
, "Potatoes, au gratin, home-prepared from recipe using margarine"
, "Horseradish-tree, pods, cooked, boiled, drained, with salt"
, "Squash, winter, spaghetti, cooked, boiled, drained, or baked, with salt"
, "Lotus root, cooked, boiled, drained, with salt"
, "Squash, winter, hubbard, cooked, boiled, mashed, with salt"
, "Gourd, white-flowered (calabash), cooked, boiled, drained, with salt"
, "Onions, frozen, whole, cooked, boiled, drained, with salt"
, "Swamp cabbage, cooked, boiled, drained, with salt"
, "Squash, summer, scallop, cooked, boiled, drained, with salt"
, "New zealand spinach, cooked, boiled, drained, with salt"
, "Squash, summer, zucchini, includes skin, frozen, cooked, boiled, drained, with salt"
, "Spinach, frozen, chopped or leaf, cooked, boiled, drained, with salt"
, "Potatoes, french fried, all types, salt not added in processing, frozen, as purchased"
, "Squash, winter, butternut, frozen, cooked, boiled, with salt"
, "Succotash, (corn and limas), frozen, cooked, boiled, drained, with salt"
, "Sweet potato, cooked, baked in skin, with salt"
, "Taro, tahitian, cooked, with salt"
, "Taro, cooked, with salt"
, "Taro, shoots, cooked, with salt"
, "Salsify, cooked, boiled, drained, with salt"
, "Succotash, (corn and limas), cooked, boiled, drained, with salt"
, "Squash, winter, hubbard, cooked, baked, with salt"
, "Tomato products, canned, paste, with salt added"
, "Sweet potato leaves, cooked, steamed, with salt"
, "Sweet potato, frozen, cooked, baked, with salt"
, "Turnip greens and turnips, frozen, cooked, boiled, drained, with salt"
, "Taro, leaves, cooked, steamed, with salt"
, "Turnips, frozen, cooked, boiled, drained, with salt"
, "Tomato products, canned, puree, with salt added"
, "Turnips, cooked, boiled, drained, with salt"
, "Soybeans, mature seeds, sprouted, cooked, steamed, with salt"
, "Sesbania flower, cooked, steamed, with salt"
, "Waxgourd, (chinese preserving melon), cooked, boiled, drained, with salt"
, "Tree fern, cooked, with salt"
, "Potatoes, mashed, prepared from granules, without milk, whole milk and margarine"
, "Mountain yam, hawaii, cooked, steamed, with salt"
, "Catsup"
, "Potatoes, mashed, prepared from flakes, without milk, whole milk and margarine"
, "Pickle relish, hot dog"
, "Mushrooms, portabella, exposed to ultraviolet light, grilled"
, "Pickles, cucumber, dill, low sodium"
, "Peppers, sweet, red, freeze-dried"
, "Beans, snap, yellow, canned, regular pack, drained solids"
, "Potatoes, mashed, home-prepared, whole milk and butter added"
, "Radicchio, raw"
, "Pickles, chowchow, with cauliflower onion mustard, sweet"
, "Fireweed, leaves, raw"
, "Tomatillos, raw"
, "Peppers, hungarian, raw"
, "Lemon grass (citronella), raw"
, "Cabbage, napa, cooked"
, "Peppers, pasilla, dried"
, "Beans, fava, in pod, raw"
, "Cauliflower, green, cooked, with salt"
, "Epazote, raw"
, "Malabar spinach, cooked"
, "Tomatoes, sun-dried, packed in oil, drained"
, "Peppers, chili, green, canned"

, "Cauliflower, green, cooked, no salt added"
, "Nopales, raw"
, "Tomatoes, sun-dried"
, "Squash, zucchini, baby, raw"
, "Nopales, cooked, without salt"
, "Pepper, ancho, dried"
, "Pepper, serrano, raw"
, "Mushrooms, oyster, raw"
, "Grape leaves, raw"
, "Grape leaves, canned"
, "Broccoli, chinese, cooked"
, "Peppers, jalapeno, raw"
, "Mushrooms, straw, canned, drained solids"
, "Fungi, Cloud ears, dried"
, "Mushrooms, maitake, raw"
, "Mushrooms, portabella, exposed to ultraviolet light, raw"
, "Wasabi, root, raw"
, "Yautia (tannier), raw"
, "CAMPBELL Soup Company, V8 Vegetable Juice, Organic V8"
, "CAMPBELL Soup Company, Tomato juice"
, "CAMPBELL Soup Company, HEALTHY REQUEST Tomato juice"
, "Campbell's V8 100% Vegetable Juice"
, "CAMPBELL Soup Company, Tomato juice, low sodium"
, "CAMPBELL Soup Company, Organic Tomato juice"
, "CAMPBELL Soup Company, V8 Vegetable Juice, Calcium Enriched V8"
, "CAMPBELL Soup Company, V8 Vegetable Juice, Low Sodium V8"
, "CAMPBELL Soup Company, PACE, Diced Green Chilies"
, "CAMPBELL Soup Company, V8 Vegetable Juice, High Fiber V8"
, "CAMPBELL Soup Company, V8 Vegetable Juice, Organic V8"
, "CAMPBELL Soup Company, Tomato juice"
, "CAMPBELL Soup Company, V8 Vegetable Juice, Calcium Enriched V8"
, "CAMPBELL Soup Company, Tomato juice, low sodium"
, "CAMPBELL Soup Company, Organic Tomato juice"
, "CAMPBELL Soup Company, HEALTHY REQUEST Tomato juice"
, "CAMPBELL Soup Company, V8 Vegetable Juice, Low Sodium V8"
, "Campbell's V8 100% Vegetable Juice"
, "CAMPBELL Soup Company, V8 Vegetable Juice, High Fiber V8"
, "CAMPBELL Soup Company, PACE, Diced Green Chilies"
, "Potatoes, canned, drained solids, no salt added"
, "Cabbage, mustard, salted"
, "Cabbage, japanese style, fresh, pickled"
, "Radishes, hawaiian style, pickled"
, "Tomato sauce, no salt added"
, "Tomato and vegetable juice, low sodium"
, "Turnip greens, canned, no salt added"
, "Sauerkraut, canned, low sodium"
, "Eggplant, pickled"
, "Vegetables, mixed (corn, lima beans, peas, green beans, carrots) canned, no salt added"
, "Yeast extract spread"
, "Cabbage, red, raw"
, "Cabbage, red, cooked, boiled, drained, without salt"
, "Cabbage, savoy, raw"
, "Cabbage, chinese (pak-choi), cooked, boiled, drained, without salt"
, "Cabbage, chinese (pe-tsai), cooked, boiled, drained, without salt"
, "Cabbage, savoy, cooked, boiled, drained, without salt"
, "Cabbage, chinese (pe-tsai), raw"
, "Chard, swiss, raw"
, "Cabbage, cooked, boiled, drained, without salt"
, "Collards, frozen, chopped, cooked, boiled, drained, without salt"
, "Collards, cooked, boiled, drained, without salt"
, "Coriander (cilantro) leaves, raw"
, "Carrots, cooked, boiled, drained, without salt"
, "Chrysanthemum, garland, raw"
, "Cauliflower, frozen, unprepared"
, "Corn, sweet, yellow, raw"
, "Chives, raw"
, "Collards, frozen, chopped, unprepared"
, "Chicory, witloof, raw"
, "Celeriac, cooked, boiled, drained, without salt"
, "Chard, swiss, cooked, boiled, drained, without salt"
, "Chrysanthemum, garland, cooked, boiled, drained, without salt"
, "Carrots, canned, regular pack, solids and liquids"
, "Chayote, fruit, raw"
, "Corn, sweet, yellow, canned, cream style, regular pack"
, "Cassava, raw"
, "Cauliflower, cooked, boiled, drained, without salt"
, "Carrots, raw"
, "Cardoon, raw"
, "Corn, sweet, yellow, cooked, boiled, drained, without salt"
, "Carrots, frozen, unprepared"
, "Corn with red and green peppers, canned, solids and liquids"
, "Corn, sweet, yellow, frozen, kernels on cob, cooked, boiled, drained, without salt"
, "Chicory greens, raw"
, "Corn, sweet, yellow, canned, vacuum pack, regular pack"
, "Chicory roots, raw"
, "Corn, sweet, yellow, frozen, kernels cut off cob, unprepared"
, "Chayote, fruit, cooked, boiled, drained, without salt"
, "Cauliflower, frozen, cooked, boiled, drained, without salt"
, "Cornsalad, raw"
, "Corn, sweet, yellow, frozen, kernels cut off cob, boiled, drained, without salt"
, "Celery, cooked, boiled, drained, without salt"
, "Carrots, canned, regular pack, drained solids"
, "Corn, sweet, yellow, canned, whole kernel, drained solids"
, "Corn, sweet, yellow, canned, brine pack, regular pack, solids and liquids"
, "Collards, raw"
, "Cauliflower, raw"
, "Corn, sweet, yellow, frozen, kernels on cob, unprepared"
, "Celery, raw"
, "Carrots, frozen, cooked, boiled, drained, without salt"
, "Cabbage, raw"

, "Cabbage, chinese (pak-choi), raw"
, "Cowpeas (blackeyes), immature seeds, frozen, cooked, boiled, drained, without salt"
, "Cowpeas (Blackeyes), immature seeds, cooked, boiled, drained, without salt"
, "Cowpeas, leafy tips, cooked, boiled, drained, without salt"
, "Cowpeas (Blackeyes), immature seeds, frozen, unprepared"
, "Cowpeas (blackeyes), immature seeds, raw"
, "Cowpeas, young pods with seeds, cooked, boiled, drained, without salt"
, "Yardlong bean, raw"
, "Yardlong bean, cooked, boiled, drained, without salt"
, "Cress, garden, cooked, boiled, drained, without salt"
, "Cowpeas, young pods with seeds, raw"
, "Cowpeas, leafy tips, raw"
, "Cress, garden, raw"
, "Horseradish-tree, leafy tips, cooked, boiled, drained, without salt"
, "Mushrooms, portabella, grilled"
, "Hyacinth-beans, immature seeds, cooked, boiled, drained, without salt"
, "Jerusalem-artichokes, raw"
, "Lettuce, iceberg (includes crisphead types), raw"
, "Mushrooms, shiitake, raw"
, "Kale, raw"
, "Mushrooms, white, raw"
, "Lentils, sprouted, raw"
, "Cucumber, peeled, raw"
, "Gourd, dishcloth (towelgourd), raw"
, "Lettuce, butterhead (includes boston and bibb types), raw"
, "Lettuce, red leaf, raw"
, "Mushrooms, shiitake, stir-fried"
, "Lettuce, green leaf, raw"
, "Kale, frozen, unprepared"
, "Lambsquarters, cooked, boiled, drained, without salt"
, "Mustard greens, cooked, boiled, drained, without salt"
, "Kale, cooked, boiled, drained, without salt"
, "Gourd, dishcloth (towelgourd), cooked, boiled, drained, without salt"
, "Ginger root, raw"
, "Mustard greens, frozen, unprepared"
, "Mushrooms, portabella, raw"
, "Pepeao, dried"
, "Gourd, white-flowered (calabash), raw"
, "Endive, raw"
, "Horseradish-tree leafy tips, raw"
, "Kale, frozen, cooked, boiled, drained, without salt"
, "Mustard greens, raw"
, "Mushrooms, brown, Italian, or Crimini, raw"
, "Hyacinth-beans, immature seeds, raw"
, "Edamame, frozen, prepared"
, "Gourd, white-flowered (calabash), cooked, boiled, drained, without salt"
, "Lettuce, cos or romaine, raw"
, "Mushrooms, white, cooked, boiled, drained, without salt"
, "Mustard greens, frozen, cooked, boiled, drained, without salt"
, "Mustard spinach, (tendergreen), cooked, boiled, drained, without salt"
, "Mushrooms, shiitake, dried"
, "Jew's ear, (pepeao), raw"
, "Jute, potherb, cooked, boiled, drained, without salt"
, "Mushrooms, shiitake, cooked, without salt"
, "Mustard spinach, (tendergreen), raw"
, "Garlic, raw"
, "Edamame, frozen, unprepared"
, "Mountain yam, hawaii, raw"
, "Dandelion greens, raw"
, "Jute, potherb, raw"
, "Eggplant, raw"
, "Mushrooms, canned, drained solids"
, "Leeks, (bulb and lower leaf-portion), cooked, boiled, drained, without salt"
, "New Zealand spinach, raw"
, "Kanpyo, (dried gourd strips)"
, "Onions, raw"
, "Eggplant, cooked, boiled, drained, without salt"
, "Lotus root, raw"
, "Mountain yam, hawaii, cooked, steamed, without salt"
, "Leeks, (bulb and lower leaf-portion), raw"
, "Okra, frozen, unprepared"
, "Okra, raw"
, "New Zealand spinach, cooked, boiled, drained, without salt"
, "Mushrooms, white, stir-fried"
, "Lotus root, cooked, boiled, drained, without salt"
, "Onions, frozen, whole, unprepared"
, "Onions, spring or scallions (includes tops and bulb), raw"
, "Onions, frozen, chopped, unprepared"
, "Okra, frozen, cooked, boiled, drained, without salt"
, "Okra, cooked, boiled, drained, without salt"
, "Onions, frozen, chopped, cooked, boiled, drained, without salt"
, "Onions, sweet, raw"
, "Onions, canned, solids and liquids"
, "Onions, young green, tops only"
, "Onions, frozen, whole, cooked, boiled, drained, without salt"
, "Dandelion greens, cooked, boiled, drained, without salt"
, "Cucumber, with peel, raw"
, "Peas, edible-podded, frozen, unprepared"
, "Parsnips, cooked, boiled, drained, without salt"
, "Peas, edible-podded, boiled, drained, without salt"
, "Parsley, raw"
, "Parsnips, raw"
, "Onion rings, breaded, par fried, frozen, unprepared"
, "Peas, edible-podded, frozen, cooked, boiled, drained, without salt"
, "Peas, green, canned, seasoned, solids and liquids"
, "Onion rings, breaded, par fried, frozen, prepared, heated in oven"
, "Peas, edible-podded, raw"
, "Peas, green, raw"
, "Peas, green, frozen, unprepared"
, "Peas, mature seeds, sprouted, raw"

, "Peas, green, frozen, cooked, boiled, drained, without salt"
, "Peas and carrots, frozen, unprepared"
, "Peas and onions, canned, solids and liquids"
, "Peas and carrots, canned, regular pack, solids and liquids"
, "Peas and carrots, frozen, cooked, boiled, drained, without salt"
, "Onions, dehydrated flakes"
, "Onions, cooked, boiled, drained, without salt"
, "Peas and onions, frozen, cooked, boiled, drained, without salt"
, "Peas and onions, frozen, unprepared"
, "Peppers, hot chili, green, canned, pods, excluding seeds, solids and liquids"
, "Peas, green, canned, regular pack, solids and liquids"
, "Peas, green, cooked, boiled, drained, without salt"
, "Peas, green (includes baby and lesuer types), canned, drained solids, unprepared"
, "Peppers, sweet, green, canned, solids and liquids"
, "Peppers, sweet, green, cooked, boiled, drained, without salt"
, "Pigeonpeas, immature seeds, cooked, boiled, drained, without salt"
, "Peppers, sweet, green, frozen, chopped, unprepared"
, "Peppers, sweet, green, raw"
, "Pokeberry shoots, (poke), cooked, boiled, drained, without salt"
, "Pokeberry shoots, (poke), raw"
, "Pigeonpeas, immature seeds, raw"
, "Potato, flesh and skin, raw"
, "Potatoes, microwaved, cooked in skin, flesh, without salt"
, "Potatoes, boiled, cooked in skin, flesh, without salt"
, "Potatoes, scalloped, dry mix, prepared with water, whole milk and butter"
, "Potatoes, mashed, dehydrated, prepared from granules without milk, whole milk and butter added"
, "Potatoes, baked, flesh, without salt"
, "Potatoes, red, flesh and skin, baked"
, "Potatoes, Russet, flesh and skin, baked"
, "Potatoes, white, flesh and skin, raw"
, "Potatoes, french fried, crinkle or regular cut, salt added in processing, frozen, oven-heated"
, "Potatoes, au gratin, dry mix, prepared with water, whole milk and butter"
, "Potatoes, russet, flesh and skin, raw"
, "Potatoes, au gratin, dry mix, unprepared"
, "Potatoes, red, flesh and skin, raw"
, "Potatoes, canned, drained solids"
, "Potatoes, white, flesh and skin, baked"
, "Potatoes, raw, skin"
, "Potatoes, scalloped, dry mix, unprepared"
, "Potatoes, hashed brown, frozen, plain, unprepared"
, "Potatoes, mashed, dehydrated, flakes without milk, dry form"
, "Potatoes, mashed, dehydrated, granules with milk, dry form"
, "Potatoes, baked, skin, without salt"
, "Potatoes, canned, solids and liquids"
, "Potatoes, hashed brown, frozen, with butter sauce, unprepared"
, "Potatoes, frozen, whole, unprepared"
, "Potato puffs, frozen, oven-heated"
, "Potatoes, mashed, dehydrated, granules without milk, dry form"
, "Potatoes, french fried, all types, salt added in processing, frozen, home-prepared, oven heated"
, "Potatoes, microwaved, cooked in skin, skin, without salt"
, "Potatoes, hashed brown, frozen, plain, prepared"
, "Potatoes, boiled, cooked in skin, skin, without salt"
, "Potatoes, boiled, cooked without skin, flesh, without salt"
, "Potatoes, french fried, all types, salt added in processing, frozen, unprepared"
, "Potatoes, frozen, french fried, par fried, extruded, unprepared"
, "Squash, summer, zucchini, includes skin, frozen, unprepared"
, "Potatoes, frozen, french fried, par fried, cottage-cut, unprepared"
, "Squash, summer, zucchini, includes skin, frozen, cooked, boiled, drained, without salt"
, "Squash, winter, butternut, frozen, cooked, boiled, without salt"
, "Potato puffs, frozen, unprepared"
, "Potatoes, frozen, french fried, par fried, cottage-cut, prepared, heated in oven, without salt"
, "Squash, summer, zucchini, includes skin, cooked, boiled, drained, without salt"
, "Squash, winter, butternut, cooked, baked, without salt"
, "Squash, winter, butternut, frozen, unprepared"
, "Potatoes, frozen, french fried, par fried, extruded, prepared, heated in oven, without salt"
, "Rutabagas, raw"
, "Squash, winter, acorn, cooked, boiled, mashed, without salt"
, "Squash, summer, zucchini, includes skin, raw"
, "Radishes, raw"
, "Squash, winter, acorn, cooked, baked, without salt"
, "Squash, summer, crookneck and straightneck, canned, drained, solid, without salt"
, "Squash, summer, scallop, cooked, boiled, drained, without salt"
, "Squash, winter, butternut, raw"
, "Squash, winter, acorn, raw"
, "Squash, winter, spaghetti, cooked, boiled, drained, or baked, without salt"
, "Squash, winter, hubbard, cooked, baked, without salt"
, "Swamp cabbage, (skunk cabbage), raw"
, "Squash, winter, hubbard, raw"
, "Succotash, (corn and limas), cooked, boiled, drained, without salt"
, "Squash, winter, spaghetti, raw"
, "Squash, winter, hubbard, cooked, boiled, mashed, without salt"
, "Succotash, (corn and limas), frozen, unprepared"
, "Sweet potato, raw, unprepared"
, "Succotash, (corn and limas), frozen, cooked, boiled, drained, without salt"
, "Swamp cabbage, cooked, boiled, drained, without salt"
, "Sweet potato leaves, cooked, steamed, without salt"
, "Succotash, (corn and limas), canned, with cream style corn"
, "Sweet potato leaves, raw"
, "Succotash, (corn and limas), canned, with whole kernel corn, solids and liquids"
, "Sweet potato, cooked, boiled, without skin"
, "Sweet potato, cooked, baked in skin, without salt"
, "Sweet potato, frozen, unprepared"
, "Sweet potato, canned, vacuum pack"
, "Taro, cooked, without salt"
, "Sweet potato, canned, mashed"
, "Taro, raw"
, "Sweet potato, frozen, cooked, baked, without salt"
, "Taro leaves, cooked, steamed, without salt"
, "Taro leaves, raw"
, "Tomatoes, red, ripe, cooked"

, "Taro shoots, cooked, without salt"
, "Tomatoes, red, ripe, raw, year round average"
, "Taro, tahitian, raw"
, "Tomatoes, red, ripe, canned, stewed"
, "Taro shoots, raw"
, "Tomatoes, green, raw"
, "Tomatoes, red, ripe, canned, packed in tomato juice"
, "Tomatoes, red, ripe, canned, with green chilies"
, "Taro, tahitian, cooked, without salt"
, "Tomato products, canned, puree, without salt added"
, "Tomato products, canned, sauce, with mushrooms"
, "Tomato products, canned, paste, without salt added"
, "Tomato juice, canned, with salt added"
, "Tree fern, cooked, without salt"
, "Tomato products, canned, sauce, with onions"
, "Tomato products, canned, sauce, with herbs and cheese"
, "Tomato products, canned, sauce, with tomato tidbits"
, "Tomato products, canned, sauce, with onions, green peppers, and celery"
, "Squash, summer, all varieties, cooked, boiled, drained, without salt"
, "Waterchestnuts, chinese, canned, solids and liquids"
, "Beans, pinto, immature seeds, frozen, cooked, boiled, drained, with salt"
, "Waxgourd, (chinese preserving melon), cooked, boiled, drained, without salt"
, "Cabbage, red, cooked, boiled, drained, with salt"
, "Turnips, frozen, unprepared"
, "Carrots, canned, no salt added, solids and liquids"
, "Beans, snap, yellow, canned, no salt added, solids and liquids"
, "Waxgourd, (chinese preserving melon), raw"
, "Winged beans, immature seeds, raw"
, "Turnips, raw"
, "Turnips, frozen, cooked, boiled, drained, without salt"
, "Beans, snap, yellow, frozen, all styles, unprepared"
, "Turnip greens, raw"
, "Sweet potato, canned, syrup pack, solids and liquids"
, "Turnip greens, frozen, cooked, boiled, drained, without salt"
, "Watercress, raw"
, "Vegetable juice cocktail, canned"
, "Lima beans, immature seeds, frozen, fordhook, cooked, boiled, drained, with salt"
, "Potato, baked, flesh and skin, without salt"
, "Lima beans, immature seeds, frozen, baby, cooked, boiled, drained, with salt"
, "Potatoes, frozen, french fried, par fried, cottage-cut, prepared, heated in oven, with salt"
, "Artichokes, (globe or french), frozen, cooked, boiled, drained, with salt"
, "Potatoes, boiled, cooked in skin, flesh, with salt"
, "Yam, cooked, boiled, drained, or baked, without salt"
, "Corn, sweet, yellow, cooked, boiled, drained, with salt"
, "Cabbage, chinese (pe-tsai), cooked, boiled, drained, with salt"
, "Carrots, cooked, boiled, drained, with salt"
, "Tomatoes, red, ripe, canned, packed in tomato juice, no salt added"
, "Peppers, sweet, red, cooked, boiled, drained, without salt"
, "Squash, summer, all varieties, raw"
, "Turnip greens, frozen, unprepared"
, "Turnip greens, canned, solids and liquids"
, "Onions, frozen, chopped, cooked, boiled, drained, with salt"
, "Tomato juice, canned, without salt added"
, "Turnip greens, cooked, boiled, drained, without salt"
, "Waterchestnuts, chinese, (matai), raw"
, "Beans, snap, green, canned, no salt added, drained solids"
, "Broccoli, cooked, boiled, drained, with salt"
, "Lima beans, immature seeds, canned, no salt added, solids and liquids"
, "Yambean (jicama), raw"
, "Turnip greens and turnips, frozen, unprepared"
, "Turnips, cooked, boiled, drained, without salt"
, "Peppers, sweet, green, cooked, boiled, drained, with salt"
, "Cabbage, common (danish, domestic, and pointed types), stored, raw"
, "Tomato products, canned, sauce, spanish style"
, "Peas, green, canned, no salt added, solids and liquids"
, "Peas, green, frozen, cooked, boiled, drained, with salt"
, "Cabbage, common (danish, domestic, and pointed types), freshly harvest, raw"
, "Peas, edible-podded, frozen, cooked, boiled, drained, with salt"
, "Onions, cooked, boiled, drained, with salt"
, "Peppers, sweet, green, frozen, chopped, cooked, boiled, drained, with salt"
, "Beans, snap, yellow, canned, regular pack, solids and liquids"
, "Potatoes, boiled, cooked without skin, flesh, with salt"
, "Parsnips, cooked, boiled, drained, with salt"
, "Tomatoes, red, ripe, cooked, with salt"
, "Carrots, canned, no salt added, drained solids"
, "Peppers, sweet, red, raw"
, "Potatoes, microwaved, cooked in skin, flesh, with salt"
, "Potatoes, baked, flesh and skin, with salt"
, "Beets, cooked, boiled. drained, with salt"
, "Turnip greens, cooked, boiled, drained, with salt"
, "Peppers, sweet, red, cooked, boiled, drained, with salt"
, "Corn, sweet, white, frozen, kernels cut off cob, boiled, drained, without salt"
, "Sweet potato, cooked, boiled, without skin, with salt"
, "Corn, sweet, white, frozen, kernels on cob, cooked, boiled, drained, without salt"
, "Turnip greens, frozen, cooked, boiled, drained, with salt"
, "Corn, sweet, white, canned, whole kernel, regular pack, solids and liquids"
, "Winged bean, immature seeds, cooked, boiled, drained, with salt"
, "Peppers, sweet, red, frozen, chopped, unprepared"
, "Corn, sweet, white, frozen, kernels on cob, unprepared"
, "Corn, sweet, white, frozen, kernels cut off cob, unprepared"
, "Corn, sweet, white, canned, whole kernel, drained solids"
, "Corn, sweet, white, canned, whole kernel, no salt added, solids and liquids"
, "Corn, sweet, white, canned, cream style, regular pack"
, "Corn, sweet, white, canned, vacuum pack, no salt added"
, "Corn, sweet, white, cooked, boiled, drained, without salt"
, "Corn, sweet, white, raw"
, "Corn, sweet, white, canned, vacuum pack, regular pack"
, "Vegetables, mixed, frozen, cooked, boiled, drained, with salt"
, "Peppers, sweet, red, canned, solids and liquids"
, "Corn, sweet, white, frozen, kernels cut off cob, boiled, drained, with salt"

, "Corn, sweet, white, canned, cream style, no salt added"
, "Yardlong bean, cooked, boiled, drained, with salt"
, "Corn, sweet, white, cooked, boiled, drained, with salt"
, "Corn, sweet, white, frozen, kernels on cob, cooked, boiled, drained, with salt"
, "Yam, cooked, boiled, drained, or baked, with salt"
, "Peppers, sweet, red, frozen, chopped, cooked, boiled, drained, without salt"
, "Beans, snap, yellow, canned, no salt added, drained solids"
, "Pickles, cucumber, dill or kosher dill"
, "Pickles, cucumber, sweet (includes bread and butter pickles)"
, "Pimento, canned"
, "Pickles, cucumber, sour"
, "Pickle relish, sweet"
, "Peppers, sweet, red, frozen, chopped, cooked, boiled, drained, with salt"
, "Catsup, low sodium"
, "Pickles, cucumber, sweet, low sodium (includes bread and butter pickles)"
, "Mushrooms, enoki, raw"
, "Pickle relish, hamburger"
, "Fennel, bulb, raw"
, "Hearts of palm, canned"
, "Pickles, cucumber, sour, low sodium"
, "Cauliflower, green, raw"
, "Peppers, hot chile, sun-dried"
, "Pepper, banana, raw"
, "Arugula, raw"
, "Peppers, sweet, yellow, raw"
, "Carrots, baby, raw"]
 },

  // async getBab(){
  //   const count=await db.collection("Veg").count()
  //   var ary=[]
  //   var eary=[]
  
  //   const k=Math.ceil(count.total/20)
    
  //   for(var i=0;i<k;i++){
  //     const promise=await db.collection("Veg").skip(i*20).get()

  //    for(var j=0;j<promise.data.length;j++){
  //      ary.push(promise.data[j].calorie)
  //     eary.push(promise.data[j].m)
       
  //    }
  //   }
  //   console.log(ary)
  //   console.log(eary)
  //   console.log(count.total)
  //  return 1
    
  //  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onshow:function(){
   
       this.setData({selectedfoodname:'当前选择的食物'})
  },
  inputone:function(e){
    console.log(e)
    this.setData({
      showvalue1:e.detail,
    
    })
    
  },
  btn:function(e){ 
    var that=this
    wx.request({
      url: 'https://api.tianapi.com/txapi/nutrient/index?key=e451a680a0a3f018f61d9ecde40fd854&mode=0',
      data:{
        word:this.data.showvalue1
      },
      success(res){
        console.log(res)
        wx.showLoading({
          title: '加载中',
          complete: (res) => {},
          fail: (res) => {},
          mask: true,
          success: (res) => {},
        })
      if(that.data.showvalue1!=''){
         if(res.data.msg=="success"){
         
         app.globalData.foodcal= res.data.newslist[0].rl,
         app.globalData.foodgram= 100
        app.globalData.selectedfood= res.data.newslist[0].name
        that.setData({showvalue1:''})
      
          wx.navigateTo({
          url: '../xianshi/xianshi'
         })
         wx.hideLoading()
      }
      else{
        console.log("失败")
        wx.showToast({
          title: '该美食暂未收录',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        that.setData({showvalue1:''})
        wx.hideLoading()
      }
      }
      else{
        wx.showToast({
          title: '请输入食物名称',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        wx.hideLoading()
      }
     
   
      }
    })
  
  },
 
  onLoad: function (options) {
  
    //console.log(this.data.Bee[10])
  },
 
  
 
  selectedFas:function(e){
    this.setData({selectedfoodname:this.data.Fas[e.detail.value],
    }) 
    // var that=this
    // db.collection("Fas").where({
    //   foodenname:this.data.Fas2[e.detail.value]
    // }).get({success(res){ 
    //   wx.setStorageSync('foodcal', res.data[0].calorie)
    //   wx.setStorageSync('foodgram',res.data[0].m)
    //   app.globalData.foodcal= res.data[0].calorie,
    //   app.globalData.foodgram= res.data[0].m
    //   app.globalData.selectedfood= that.data.Fas[e.detail.value]   
     
    // }})
          app.globalData.foodcal= this.data.Fascal[e.detail.value],
      app.globalData.foodgram= this.data.Fasm[e.detail.value]
      app.globalData.selectedfood= this.data.Fas[e.detail.value]   
  },
  selectedCer:function(e){
    this.setData({selectedfoodname:this.data.Cer[e.detail.value] }) 
    app.globalData.foodcal= this.data.Cercal[e.detail.value],
    app.globalData.foodgram= this.data.Cerm[e.detail.value]
    app.globalData.selectedfood= this.data.Cer[e.detail.value] 
  },
  selectedSwe:function(e){
    this.setData({selectedfoodname:this.data.Swe[e.detail.value] }) 
  app.globalData.foodcal= this.data.Swecal[e.detail.value],
      app.globalData.foodgram= this.data.Swem[e.detail.value]
      app.globalData.selectedfood= that.data.Swe[e.detail.value] 
  },
  selectedSna:function(e){
    this.setData({selectedfoodname:this.data.Sna[e.detail.value] }) 
    app.globalData.foodcal= this.data.Snacal[e.detail.value],
      app.globalData.foodgram= this.data.Snam[e.detail.value]
      app.globalData.selectedfood= this.data.Sna[e.detail.value] 
  },
  selectedBak:function(e){
    this.setData({selectedfoodname:this.data.Bak[e.detail.value] }) 
    app.globalData.foodcal= this.data.Bakcal[e.detail.value],
      app.globalData.foodgram= this.data.Bakm[e.detail.value]
      app.globalData.selectedfood= this.data.Bak[e.detail.value] 
 
  },
  selectedLam:function(e){
    this.setData({selectedfoodname:this.data.Lam[e.detail.value] }) 
    app.globalData.foodcal= this.data.Bakcal[e.detail.value],
      app.globalData.foodgram= this.data.Bakm[e.detail.value]
      app.globalData.selectedfood= this.data.Bak[e.detail.value] 
  
  },
  selectedLeg:function(e){
    this.setData({selectedfoodname:this.data.Leg[e.detail.value] }) 
    app.globalData.foodcal= this.data.Legcal[e.detail.value],
      app.globalData.foodgram= this.data.Legm[e.detail.value]
      app.globalData.selectedfood= this.data.Leg[e.detail.value] 
  
  },
  selectedFin:function(e){
    this.setData({selectedfoodname:this.data.Fin[e.detail.value] }) 
    app.globalData.foodcal= this.data.Fincal[e.detail.value],
    app.globalData.foodgram= this.data.Finm[e.detail.value]
    app.globalData.selectedfood= this.data.Fin[e.detail.value] 
  
  },
  selectedBev:function(e){
    this.setData({selectedfoodname:this.data.Bev[e.detail.value] }) 
    app.globalData.foodcal= this.data.Fincal[e.detail.value],
    app.globalData.foodgram= this.data.Finm[e.detail.value]
    app.globalData.selectedfood= this.data.Fin[e.detail.value] 
  
  },
  selectedBee:function(e){
    this.setData({selectedfoodname:this.data.Bee[e.detail.value] }) 
    app.globalData.foodcal= this.data.Beecal[e.detail.value],
    app.globalData.foodgram= this.data.Beem[e.detail.value]
    app.globalData.selectedfood= this.data.Bee[e.detail.value] 

  },
  selectedNut:function(e){
    this.setData({selectedfoodname:this.data.Nut[e.detail.value] }) 
    app.globalData.foodcal= this.data.Nutcal[e.detail.value],
      app.globalData.foodgram= this.data.Nutm[e.detail.value]
      app.globalData.selectedfood= this.data.Nut[e.detail.value] 

  },
  selectedBre:function(e){
    this.setData({selectedfoodname:this.data.Bre[e.detail.value] }) 
    app.globalData.foodcal= this.data.Brecal[e.detail.value],
    app.globalData.foodgram= this.data.Brem[e.detail.value]
    app.globalData.selectedfood= this.data.Bre[e.detail.value] 
  
  },
  selectedPor:function(e){
    this.setData({selectedfoodname:this.data.Por[e.detail.value] }) 
    app.globalData.foodcal= this.data.Porcal[e.detail.value],
    app.globalData.foodgram= this.data.Porm[e.detail.value]
    app.globalData.selectedfood= this.data.Por[e.detail.value] 
  },
  selectedFru:function(e){
    this.setData({selectedfoodname:this.data.Fru[e.detail.value] }) 
    app.globalData.foodcal= this.data.Frucal[e.detail.value],
      app.globalData.foodgram= this.data.Frum[e.detail.value]
      app.globalData.selectedfood= this.data.Fru[e.detail.value] 
 
  },
  selectedSau:function(e){
    this.setData({selectedfoodname:this.data.Sau[e.detail.value] }) 
    app.globalData.foodcal= this.data.Saucal[e.detail.value],
    app.globalData.foodgram= this.data.Saum[e.detail.value]
    app.globalData.selectedfood= this.data.Sau[e.detail.value] 

  },
  selectedSou:function(e){
    this.setData({selectedfoodname:this.data.Sou[e.detail.value] }) 
    app.globalData.foodcal= this.data.Soucal[e.detail.value],
      app.globalData.foodgram= this.data.Soum[e.detail.value]
      app.globalData.selectedfood= this.data.Sou[e.detail.value] 
 
  },
  selectedPou:function(e){
    this.setData({selectedfoodname:this.data.Pou[e.detail.value] }) 
    app.globalData.foodcal= this.data.Poucal[e.detail.value],
      app.globalData.foodgram= this.data.Poum[e.detail.value]
      app.globalData.selectedfood= this.data.Pou[e.detail.value] 
   
  },
  
  
//  async dai(name){
//    var arry=0
//    console.log("这是",name)
//    this.setData({selectedfoodname:name })  
// const promise=await db.collection("Dai").where({
// foodenname:name
// }).get()
// console.log(1)
// app.globalData.foodcal=promise.data[0].calorie
// app.globalData.foodgram=promise.data[0].m
// return promise.data[0]

//  },
  selectedDai:function(e){
  this.setData({selectedfoodname:this.data.Dai[e.detail.value] }) 
  app.globalData.foodcal= this.data.Daical[e.detail.value],
    app.globalData.foodgram= this.data.Daim[e.detail.value]
    app.globalData.selectedfood= this.data.Dai[e.detail.value] 
  },

 selectedVeg:function(e){
    this.setData({selectedfoodname:this.data.Veg[e.detail.value] }) 
   
    app.globalData.foodcal= this.data.Vegcal[e.detail.value],
      app.globalData.foodgram= this.data.Vegm[e.detail.value]
      app.globalData.selectedfood= this.data.Veg[e.detail.value] 
  },

  btn2:function(e){
   

    if(this.data.selectedfoodname!='当前选择的食物'){
      this.setData({selectedfoodname:'当前选择的食物'})
      wx.navigateTo({
      url: '../xianshi/xianshi'
      })
          
    }
      else{
        wx.showToast({
          title: '请在列表里选择食物',
          icon: '',
          image: '../image/baocuo.png',
          duration: 1000,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }
  },
 inputtwo:function(e){
   
   this.setData({subcal:parseFloat(e.detail.value),
               showvalue:parseFloat(e.detail.value)
  
  })
 },
 submit:function(e){
  if(this.data.showvalue==''){
    wx.showToast({
      title: '请输入摄入热量',
      icon: '',
      image: '../image/baocuo.png',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
     
  }
  else{
    this.setData({showvalue:''})
     var that=this
  
 var timestamp=Date.parse(new Date());
 var date=new Date(timestamp);
 var Y=date.getFullYear();
 var M=(date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1)
 var  D=date.getDate()<10?'0'+date.getDate():date.getDate();
 var da=Y+'-'+M+'-'+D;
   
 wx.request({
  url: 'https://kcal.applinzi.com/UpsetItake.php?IN=' + that.data.subcal+'&date='+da+'&openid='+app.aData.openid  ,
  
  data: {
  
  },
  header: {
    'content-type': 'application/json'
  },
  success: function (res) {
    wx.showToast({
      title: '添加成功',
      icon: '',
      image: '',
      duration: 1000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
    console.log(res)
  app.aData.intakecal=res.data;  
  },

  
})
  }
 
  
 

 }

})