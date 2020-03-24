importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

/*
if (workbox) {
  console.log("workbox is loaded");
}else {
  console.log("Not loaded");
} */

workbox.skipWaiting();
workbox.clientsClaim();

// cache name
workbox.core.setCacheNameDetails({
    prefix: 'JSP-cache',
    precache: 'precache',
    runtime: 'runtime',
  });

// runtime cache

// 1. cache javascript files
workbox.routing.registerRoute(
    new RegExp('\.js$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'javascript',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7 //cache the views content for 30days
        }
    })
);

//2. cache html files
workbox.routing.registerRoute(
    new RegExp('\.ejs$'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'views',
        cacheExpiration: {
            maxAgeSeconds: 60 * 60 * 24 * 7 //cache the views content for 30days
        }
    })
);
// 3. stylesheets
workbox.routing.registerRoute(
    new RegExp('\.(css|map)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'JSP-cache-Stylesheets',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, //cache the views content for 30days
                maxEntries: 100, // only cache 100 request
                purgeOnQuotaError: true
            })
        ]
    })
);

// 4. images and fonts
workbox.routing.registerRoute(
    new RegExp('\.(png|svg|jpg|gif|jpeg|eot|ttf|woff|woff2)$'),
    workbox.strategies.cacheFirst({
        cacheName: 'JSP-cache-Images',
        plugins: [
            new workbox.expiration.Plugin({
                maxAgeSeconds: 60 * 60 * 24 * 7, //cache the views content for 30days
                maxEntries: 500,
                purgeOnQuotaError: true
            })
        ]
    })
);


workbox.precaching.precacheAndRoute([
  {
    "url": "app.js",
    "revision": "7ee95b99897229aa695cc54a86b122fb"
  },
  {
    "url": "config/cloudConfig.js",
    "revision": "3ecfad841b05fab32a48a0585af6964a"
  },
  {
    "url": "config/config.js",
    "revision": "770fd1ba67de257933ef47cec5f5b34a"
  },
  {
    "url": "config/minify.js",
    "revision": "729aa34fa7ee01567b54a1e4995db442"
  },
  {
    "url": "constants.js",
    "revision": "0c87dea4c81b24525737d8663c73c48d"
  },
  {
    "url": "public/css/bootstrap-3.3.4/css/bootstrap-theme.css",
    "revision": "657abdbdf9f097a761efe7fda1e44884"
  },
  {
    "url": "public/css/bootstrap-3.3.4/css/bootstrap-theme.css.map",
    "revision": "f3d5c533946452124ee6e24d49e59819"
  },
  {
    "url": "public/css/bootstrap-3.3.4/css/bootstrap-theme.min.css",
    "revision": "89b29714ad4aaaa3953ef3b51cf9c43a"
  },
  {
    "url": "public/css/bootstrap-3.3.4/css/bootstrap.css",
    "revision": "27e343c6cdcb67b7364b7088342c55da"
  },
  {
    "url": "public/css/bootstrap-3.3.4/css/bootstrap.css.map",
    "revision": "96c09286570a4186104613523efd2f1f"
  },
  {
    "url": "public/css/bootstrap-3.3.4/css/bootstrap.min.css",
    "revision": "b0844d0340280e295d39ad08c5244a28"
  },
  {
    "url": "public/css/bootstrap-3.3.4/fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "public/css/bootstrap-3.3.4/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "public/css/bootstrap-3.3.4/fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "public/css/bootstrap-3.3.4/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "public/css/bootstrap-3.3.4/fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "public/css/bootstrap-3.3.4/js/bootstrap.js",
    "revision": "02cc060c14e8719fcad82f465b563722"
  },
  {
    "url": "public/css/bootstrap-3.3.4/js/bootstrap.min.js",
    "revision": "3cb5af338463b26110925b78580c7565"
  },
  {
    "url": "public/css/bootstrap-3.3.4/js/npm.js",
    "revision": "ccb7f3909e30b1eb8f65a24393c6e12b"
  },
  {
    "url": "public/css/docs.css",
    "revision": "29c89e1c5a6c1f4dae46130cf05e7e74"
  },
  {
    "url": "public/css/styles.css",
    "revision": "736afaf947b6f9f6a16603a9ce39e0c8"
  },
  {
    "url": "public/images/active.png",
    "revision": "82c07420dd56109a27b424099e3007e3"
  },
  {
    "url": "public/images/add_icon.png",
    "revision": "ca0c35c90c19f0aaa9f86338d31de050"
  },
  {
    "url": "public/images/add_news.png",
    "revision": "57ea20566b96d54b3f1284d59562a07f"
  },
  {
    "url": "public/images/admin_icon_small.png",
    "revision": "c0929d0239b901de34dd82ba98c6996f"
  },
  {
    "url": "public/images/admin_small.png",
    "revision": "574d1e37738a4c067257f185bd1eb9bd"
  },
  {
    "url": "public/images/ajax-loader.gif",
    "revision": "11b7cf024ebd42bbb1cfb2767bcf8ce5"
  },
  {
    "url": "public/images/app fee opt.png",
    "revision": "31075b46881af362e2c9b791cb57074d"
  },
  {
    "url": "public/images/bg.jpg",
    "revision": "77ab3771e74d05ca993c8ee891304b4d"
  },
  {
    "url": "public/images/blocked.png",
    "revision": "93dbc4a1c4db1051298d0cac26c89ad2"
  },
  {
    "url": "public/images/change_password.png",
    "revision": "928793bdf54b73dcbe8d2e47c32ec04e"
  },
  {
    "url": "public/images/close.png",
    "revision": "5626bfd84c617dc938f11cfdb44b46d8"
  },
  {
    "url": "public/images/coe.png",
    "revision": "b69f224eea9bae7291152655eedafb4c"
  },
  {
    "url": "public/images/cry.png",
    "revision": "5cf80952d48be2c7f4aca0f2b18e374d"
  },
  {
    "url": "public/images/dashboard.png",
    "revision": "52fb7aa675d5d8aebbacb4864e8f2d5c"
  },
  {
    "url": "public/images/Deleteuser_icon.png",
    "revision": "84ea8b675fc95b3e43f92832766f9d00"
  },
  {
    "url": "public/images/dots.gif",
    "revision": "73abf0126abe075d13d9bc7873690a36"
  },
  {
    "url": "public/images/Edituser_icon.png",
    "revision": "150866f152423d8f81fff4c3d61c6a31"
  },
  {
    "url": "public/images/faq.png",
    "revision": "83882bdde829b0030c28b23651d6cc7b"
  },
  {
    "url": "public/images/favicon.png",
    "revision": "ab9871383e5c96eb1a369573eb16e9c7"
  },
  {
    "url": "public/images/fd/error.jpg",
    "revision": "3b8b1b8e56f3678c70442a0345ae5a3c"
  },
  {
    "url": "public/images/fd/pic.png",
    "revision": "035ce7483ee8f639767376dfc414c0e6"
  },
  {
    "url": "public/images/hostel_fee_payments.png",
    "revision": "1946878feb78ff57df9b914950a60f61"
  },
  {
    "url": "public/images/how_to_use.png",
    "revision": "4422d292e3214181838c96a4744aa029"
  },
  {
    "url": "public/images/icons/icon-128x128.png",
    "revision": "1d0f0c81872aa0a56acfd2e929987d86"
  },
  {
    "url": "public/images/icons/icon-144x144.png",
    "revision": "1d0f0c81872aa0a56acfd2e929987d86"
  },
  {
    "url": "public/images/icons/icon-152x152.png",
    "revision": "1d0f0c81872aa0a56acfd2e929987d86"
  },
  {
    "url": "public/images/icons/icon-192x192.png",
    "revision": "1d0f0c81872aa0a56acfd2e929987d86"
  },
  {
    "url": "public/images/icons/icon-384x384.png",
    "revision": "1d0f0c81872aa0a56acfd2e929987d86"
  },
  {
    "url": "public/images/icons/icon-512x512.png",
    "revision": "1d0f0c81872aa0a56acfd2e929987d86"
  },
  {
    "url": "public/images/icons/icon-72x72.png",
    "revision": "0d8acc7d47994ba9f5dffa4b8e8460d3"
  },
  {
    "url": "public/images/icons/icon-96x96.png",
    "revision": "d6427d392f96ae2382d7fba4ebff3075"
  },
  {
    "url": "public/images/indeterminate.gif",
    "revision": "554fbaf7455a1af246786417f176e736"
  },
  {
    "url": "public/images/info.png",
    "revision": "dd79072a6f61d83e975968a1b7cc0236"
  },
  {
    "url": "public/images/jdlab.ng.png",
    "revision": "000ceaf9279769d4d6b2103d4e727c96"
  },
  {
    "url": "public/images/loader.gif",
    "revision": "0fc55b292bebb731138cca80c2a64c6d"
  },
  {
    "url": "public/images/login logo nce app opt.png",
    "revision": "622eac5419b17dbb39aa6d29bfcb773c"
  },
  {
    "url": "public/images/maintenance.png",
    "revision": "7c687251460f644f0ce6f90cbda4a288"
  },
  {
    "url": "public/images/mshaku.png",
    "revision": "e091d402854e3bee020894360de9af31"
  },
  {
    "url": "public/images/news_events_small.png",
    "revision": "09cd8aaaa8186da52754a1950c7bab7e"
  },
  {
    "url": "public/images/news_small.png",
    "revision": "e97b157d955bf95000d7203c802aa164"
  },
  {
    "url": "public/images/password_gen_icon.png",
    "revision": "045e10fd1d824a0179e6f231d9cb4099"
  },
  {
    "url": "public/images/password_gen.png",
    "revision": "800fbe55312ec6df95dacec327055f58"
  },
  {
    "url": "public/images/payments_small.png",
    "revision": "976455666d661229400eeb3d907e0d11"
  },
  {
    "url": "public/images/payments.png",
    "revision": "afaf95b92fe2d45f38599a7fca4115ea"
  },
  {
    "url": "public/images/pdf.png",
    "revision": "38ba9fbb92ff880eb03e19b2c045a186"
  },
  {
    "url": "public/images/performance_manager_small.png",
    "revision": "da67686c94e9941d3f7b2ff7a27c688e"
  },
  {
    "url": "public/images/pictures_small.png",
    "revision": "3945a230bdef7fb410a7204cdb40cffe"
  },
  {
    "url": "public/images/pictures_videos_small.png",
    "revision": "8586a6836c6fb78bd3e9975e24c81941"
  },
  {
    "url": "public/images/print_big.png",
    "revision": "c55517bcfb5aeadf20ebd3f83b3e3a32"
  },
  {
    "url": "public/images/printer.png",
    "revision": "a80d8d1c3525239989bbcf49c8ae7f72"
  },
  {
    "url": "public/images/profile_small.png",
    "revision": "039d8205b323ec472b4e8ccae856c093"
  },
  {
    "url": "public/images/profile.png",
    "revision": "4acc963f0eb40f2d6e0c1d4b512cdf3f"
  },
  {
    "url": "public/images/publish-small.png",
    "revision": "42e4e6bd06381ffc4f7214355fa0cc04"
  },
  {
    "url": "public/images/publish.png",
    "revision": "fe011b9b2215ffa5c5cc94bb2b1b7d08"
  },
  {
    "url": "public/images/remita-payment-logo-horizonal-opt.png",
    "revision": "6b3d91ec04118626e4cc75734a24dc75"
  },
  {
    "url": "public/images/report-1.png",
    "revision": "7f5b87f2a26b32665a620c1b97f855ff"
  },
  {
    "url": "public/images/report-small.png",
    "revision": "3670eae5e39be42e38d6d7e91ee52513"
  },
  {
    "url": "public/images/report.png",
    "revision": "64d8416927c8c7ef11a2c98a8c68c5f1"
  },
  {
    "url": "public/images/restore_trash.png",
    "revision": "8c45fa0588407654714bbdaf87c508bc"
  },
  {
    "url": "public/images/Saveuser_icon.png",
    "revision": "5ec0b3198b6d64787f765af4cbfac29a"
  },
  {
    "url": "public/images/school_fee_payments.png",
    "revision": "c20dfc2f5836403134f8c82d14aa0bee"
  },
  {
    "url": "public/images/secured pay opt.png",
    "revision": "658ccaccf793e8379dfb70a90a609f0e"
  },
  {
    "url": "public/images/Settings.png",
    "revision": "542f6624d394216b0aa8e89c3590b9df"
  },
  {
    "url": "public/images/signage2_2018.png",
    "revision": "0dafa7c57454e814e44cf72f564915f9"
  },
  {
    "url": "public/images/signage2.png",
    "revision": "ce4074cb8e17d16fd3a59411cc2c132d"
  },
  {
    "url": "public/images/subjects-small.png",
    "revision": "dc378dd3ad0b6789e826125fa5397939"
  },
  {
    "url": "public/images/success_icon.png",
    "revision": "fad68ab24745d37393bd073af6286b06"
  },
  {
    "url": "public/images/support.png",
    "revision": "be6d6530eaa055dcc6c34043938fac15"
  },
  {
    "url": "public/images/unblock_user_icon_big.png",
    "revision": "1fbd31b60b03ae55d413bcf2c829b15e"
  },
  {
    "url": "public/images/user_manager_small.png",
    "revision": "5093f371bccc8698e5fc499875f6ae7d"
  },
  {
    "url": "public/images/user_notes_small.png",
    "revision": "2545c2595367be2574792e5717dd524f"
  },
  {
    "url": "public/images/user_notes.png",
    "revision": "de4706ac7628c7ff2d01e8a729074e55"
  },
  {
    "url": "public/images/users_icon.png",
    "revision": "aa4be74385190ecee8879b938f9e3131"
  },
  {
    "url": "public/js/dashboard.js",
    "revision": "9be45cfa3f9c3e5c9e49f51a3ff7d15e"
  },
  {
    "url": "public/js/jquery/functions.js",
    "revision": "5bde61b602ef9ffa2c4843b61a307d44"
  },
  {
    "url": "public/js/jquery/jquery-1.9.1.min.js",
    "revision": "0dd28a25bc4c2ce0f8d964fda20e6b5c"
  },
  {
    "url": "public/js/jquery/jquery-ui-1.10.3.custom.min.js",
    "revision": "568ef519490b3c32ec2f5e42b084a872"
  },
  {
    "url": "public/js/jquery/jquery.js",
    "revision": "7da51245d37c3e690105408a5b386942"
  },
  {
    "url": "public/js/jquery/jquery.rte/jquery.ocupload-1.1.4.js",
    "revision": "f15cd622662c95db6f223d973c786bc0"
  },
  {
    "url": "public/js/jquery/jquery.rte/jquery.rte.js",
    "revision": "5a535222277dbfc7b2cbbfa52cd34d1f"
  },
  {
    "url": "public/js/jquery/jquery.rte/jquery.rte.tb.js",
    "revision": "242e35c2811e932f98087925c75aa789"
  },
  {
    "url": "public/js/reg.js",
    "revision": "700ded19a466b2dc83900788d7b39c29"
  },
  {
    "url": "public/js/verify.js",
    "revision": "777b7d6e11b7758d9615e6ee9e0876cb"
  },
  {
    "url": "routers/application/functions.js",
    "revision": "c362468275ee08531cdc81d4e4305f2c"
  },
  {
    "url": "routers/application/login.js",
    "revision": "0fd074da346b3b221a979340320ae407"
  },
  {
    "url": "routers/application/register.js",
    "revision": "ac47f6218a01ca7a605f2364be2e573a"
  },
  {
    "url": "routers/dashboard/dashboard.js",
    "revision": "d87f55bf92e0b5d4d1bb4ab9fcc9bc31"
  },
  {
    "url": "routers/dashboard/functions.js",
    "revision": "2cf1f5e6503e10579124ca4863866390"
  },
  {
    "url": "routers/error.js",
    "revision": "ac7031582357b5d6f7082209566188d0"
  },
  {
    "url": "routers/functions.js",
    "revision": "b56ee16bb55278889a6adcb922579d2e"
  },
  {
    "url": "routers/resetPassword.js",
    "revision": "03934959a270d07a64d76c204a8ea650"
  },
  {
    "url": "views/application/login.ejs",
    "revision": "2b6bde451e5abcbdf13e173c2b9ef00a"
  },
  {
    "url": "views/application/register.ejs",
    "revision": "986d9be86fe94852b804eb4abe5952cf"
  },
  {
    "url": "views/dashboard/dashboard.ejs",
    "revision": "f476115587385f83765e0b3b5c51ea06"
  },
  {
    "url": "views/dashboard/includes/academic_info.ejs",
    "revision": "7df38cb59a44d6379bc1e0d3aa7266a1"
  },
  {
    "url": "views/dashboard/includes/bio_data.ejs",
    "revision": "8b66a6ddee4234ee5ecc48a2728d3c6d"
  },
  {
    "url": "views/dashboard/includes/contact_info.ejs",
    "revision": "59b43c4af0b05eebaf83e45609a322ec"
  },
  {
    "url": "views/dashboard/includes/credentials.ejs",
    "revision": "3a2262ad30bd2593d346ceb3e8177a20"
  },
  {
    "url": "views/dashboard/includes/current.ejs",
    "revision": "3486d58012ac2e1bfad9d8c88dafe1a0"
  },
  {
    "url": "views/dashboard/includes/health_info.ejs",
    "revision": "c9a24f3418891566e5ab113fcf0e8546"
  },
  {
    "url": "views/dashboard/includes/help.ejs",
    "revision": "fc69570bce803f8f7e4007880bd4d655"
  },
  {
    "url": "views/dashboard/includes/jamb_history.ejs",
    "revision": "efcea4449dee074e59406b11a86d9ae1"
  },
  {
    "url": "views/dashboard/includes/my_profile.ejs",
    "revision": "ecc3def41872708e721d8846c511d059"
  },
  {
    "url": "views/dashboard/includes/payments.ejs",
    "revision": "3c5b49a085c3866fb2f50b56eab0ba63"
  },
  {
    "url": "views/dashboard/includes/prence_history.ejs",
    "revision": "883dbbf02ed4581a38feffc018372403"
  },
  {
    "url": "views/dashboard/includes/screening.ejs",
    "revision": "f84181492f0d58f7962445822ab344a9"
  },
  {
    "url": "views/dashboard/includes/submission.ejs",
    "revision": "ee501a24ad9350325e8c97c01cdb15e0"
  },
  {
    "url": "views/error.ejs",
    "revision": "3d0e42a624ce02bd77e4d5f9cb358343"
  },
  {
    "url": "views/footer.ejs",
    "revision": "ef9a4d8566ac72632e04d8b44a2632aa"
  },
  {
    "url": "views/header.ejs",
    "revision": "c91bba6e334ac6663dbbb2d35c04ee36"
  },
  {
    "url": "views/index.ejs",
    "revision": "76b81c4b47847fbb1743e3cc915f1d66"
  },
  {
    "url": "views/resetPassword.ejs",
    "revision": "4d397e18a48ade4217c4887d6954151c"
  }
]);
