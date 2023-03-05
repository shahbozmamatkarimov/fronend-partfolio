function imgSelect(val) {
    console.log(val.style.height);
    if (val.style.height == "210px") {
        console.log("hello");
        val.style = `
        background: none;
        height: 190px !important;
        margin: 5px;
        `
    } else {
        val.style = `
        height: 210px !important;
        margin-top: -6px;
        transition: 1s;
        background: red;
        z-index: 1;
    `;
    }
    console.log(val.src);
}


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $(".image-upload-wrap").hide();

            $(".file-upload-image").attr("src", e.target.result);
            $(".file-upload-content").show();

            $(".image-title").html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        removeUpload();
    }
}

function removeUpload() {
    $(".file-upload-input").replaceWith($(".file-upload-input").clone());
    $(".file-upload-content").hide();
    $(".image-upload-wrap").show();
}
$(".image-upload-wrap").bind("dragover", function () {
    $(".image-upload-wrap").addClass("image-dropping");
});
$(".image-upload-wrap").bind("dragleave", function () {
    $(".image-upload-wrap").removeClass("image-dropping");
});

const mramor = [
    "https://www.drevoobchod-eshop.cz/editor/image/eshop_products_other_pictures/58727/file_en_58727_l.jpg",
    "https://www.kammel.sk/resize/e/1200/1200/files/mramor-teplakovina-pes2.jpg",
    "https://www.interierstone.cz/cardfiles/card-19834/card-19959/img/c67e674b89393e33f008b41ece58d239.jpg",
    "https://www.perfecto.cz/picture/i%2Fs%2Fis%20mramor%20stribrno-sedy_def_I3wjfDUwMHwjfCN8I3wjfCN8MXwjfCN8MQ%3D%3D.jpg&v=726",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujCp_RjgDNA8TFkCHNbqHdIlKb_E-VVMg3A&usqp=CAU",
    "https://images.prom.ua/3102213396_w640_h640_gibkij-kamen-grand.jpg",
    "https://mramor-comerce.hr/wp-content/uploads/2020/11/ROSA-PORINNO.jpg",
    "https://milujemekameny.cz/wp-content/uploads/2019/05/mramor_milujemekameny_cz.png",
    "https://cdn.pixabay.com/photo/2016/12/02/17/34/texture-1878242__480.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRitX8pmckLk6VfVvR-YUdMrK4MbQpLo5YZ1mVXEWyj6tJaG-YvdRSlTZg2J0Q3VR-oLns&usqp=CAU"
]

const marmar = [
    "https://i1.wp.com/kamen.expert/wp-content/uploads/2017/12/belyj_kamen.jpg",
    "https://i0.wp.com/kamen.expert/wp-content/uploads/2017/12/chernyj_kamen.jpg",
    "https://i2.wp.com/kamen.expert/wp-content/uploads/2017/12/zelenyj_kamen.jpg",
    "https://i0.wp.com/kamen.expert/wp-content/uploads/2017/12/krasnyj_kamen-1.jpg",
    "https://i1.wp.com/kamen.expert/wp-content/uploads/2017/12/seryj_kamen.jpg",
    "https://i1.wp.com/kamen.expert/wp-content/uploads/2017/12/bezhevyj_kamen.jpg",
    "https://i0.wp.com/kamen.expert/wp-content/uploads/2017/12/rozovyj_kamen.jpg",
    "https://i0.wp.com/kamen.expert/wp-content/uploads/2017/12/goluboj_kamen.jpg",
    "https://i2.wp.com/kamen.expert/wp-content/uploads/2017/12/zheltyj_kamen.jpg",
    "http://cdn.shopify.com/s/files/1/0069/1313/0561/products/Mramor-obrazova-tapeta-2020-foto_1024x1024.jpg?v=1665575874"
]

const granit = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Wv2x14scDLurVq1STueR0aDnI4T4wiDrozfY5vsmgU_RFOhdi7D5u57XzSczXvwh3j4&usqp=CAU",
    "https://imageio.forbes.com/blogs-images/trevornace/files/2016/06/blue-granite-1200x957.jpg?format=jpg&width=960",
    "https://imageio.forbes.com/blogs-images/trevornace/files/2016/06/black-white-granite-countertops-1200x833.jpg?height=493&width=711&fit=bounds",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYQm4XhBnoJGRsCeFGiR-GCj77Qa1k_HM-XQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW_jDeTIHzhfORyMbckn6n-8q5HhQJZY29nw&usqp=CAU",
    "https://cdn-ablmn.nitrocdn.com/oMKSNsZXrYMXmtrNmIEOjiWcSeXWPnAX/assets/images/optimized/rev-1f76c59/wp-content/uploads/Black-Angola-Granite--600x600.jpeg",
    "https://uploads-ssl.webflow.com/6259fa3a193e9d1afdf459b2/62f052e52b7f3e0102b35f59_msi-surfaces-surprise-granite-arctic-sand-granite-close%20up.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9np5LpX_bAyT3XYZYwGnbJq4SFw_l5KmrHAstdePsz0OpShZh_Zu2kmlrpzlQUVc-6Y&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ5ylJwpls3ct9WSGb1KHCdRPf17VnWGYG-MMjFc9ZVjJgpSe2LfQXuNXIwemMwbxjsTA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cnn5xzz2yC_0bIsCAfzKpv-c46KyVDI5KA&usqp=CAU",
]

const travertin = [
    "https://www.dedalostone.com/wp-content/uploads/2021/07/travertine-800x400.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIC5p3z2ARrfsssl2wvzh0gLAw1-BYqQHJkJ6UlMbvBHIRhaQKGq7P9U2DIsQNPue4ihA&usqp=CAU",
    "https://cdn.shopify.com/s/files/1/0261/1567/0094/files/silverTravertinePolishedLarge.jpg?v=1566302032",
    "https://www.dedalostone.com/wp-content/uploads/2021/07/gray-travertine-800x800.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7BIEtfnOtVqHCbOrCpz0OyS1olH809vOxSwBcyeWutwggAT_zCGDTREvPVmSkfoqO478&usqp=CAU",
    "https://previews.123rf.com/images/pilgrimego/pilgrimego1905/pilgrimego190500050/123838586-natural-pattern-of-marble-brown-color-polished-slice-mineral-super-high-resolution-travertin.jpg",
    "https://us.123rf.com/450wm/morele/morele2004/morele200400062/144802653-natural-stone-in-the-colors-of-lush-stripes-with-stripes-called-travertin-rosso.jpg?ver=6",
    "https://www.mgtstoneco.com/wp/wp-content/uploads/2021/11/Grey-Travertine-Surface.jpg",
    "https://t3.ftcdn.net/jpg/02/70/74/28/360_F_270742823_J04UOEItyjBQyJOeZWcBiykgxcqyp3Bz.jpg",
    "https://www.sydneytilegallery.com.au/wp-content/uploads/2019/02/outdoor-travertine-tile.jpg"
]

const stones = [mramor, marmar, granit, travertin]
let type = 0;
function typeStone(val) {
    type = val.value;
    let tbody = document.querySelector("tbody");
    tbody.innerHTML = ''
    for (let img of stones[type]) {
        tbody.innerHTML += `
        <tr>
            <td>
                <div>
                    <img src=${img} onclick="imgSelect(this)" class="img-thumbnail">
                </div>
            </td>
        </tr>
        `
    }
}

for (let img of stones[type]) {
    tbody.innerHTML += `
        <tr>
            <td>
                <div>
                    <img src=${img} onclick="imgSelect(this)" class="img-thumbnail">
                </div>
            </td>
        </tr>
        `
}

function types(val){
    localStorage.setItem("type", val.innerHTML)
}