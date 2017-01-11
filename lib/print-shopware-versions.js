// 1. go to http://community.shopware.com/Downloads_cat_448.html
// 2. open console
// 3. paste this
// 4. update lib/shopware.sh

var versions = [];

$('.accordion-list').each((i,el) => {
    var $el =$(el);
    var $version = $el.find('> a');
    var $link = $el.find('.btn.btn-primary').eq(0);

    var href = $link.attr('href');
    var version = $version.attr('name');

    if($link.text().toLowerCase().indexOf('install') === -1 || !href || !version){
        return;
    }

    versions.push(`"${version.trim()}:${href.trim()}"`);
});

console.log(versions.join('\n'));
