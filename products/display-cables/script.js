(function () {

  let qty = 1;

  function get(id) {
    return document.getElementById(id);
  }

  // OPEN MODAL
  window.handleView = function (id) {
    const card = document.getElementById(id);
    if (!card) return;

    get('modal-image').src = card.querySelector('img')?.src || '';
    get('modal-title').innerText = card.querySelector('h3')?.innerText || '';
    get('modal-desc').innerText = card.querySelector('p')?.innerText || '';

    let priceText = card.querySelector('b')?.innerText || '0';
    let price = Number(priceText.replace(/\D/g, ''));

    get('modal-price').innerText = 'Rs ' + price.toLocaleString('en-PK');
    get('modal-qty').value = 1;
    qty = 1;

    get('product-modal').classList.add('active');
    document.body.classList.add('modal-open');
  };

  // CLOSE MODAL
  get('modal-close').onclick = function () {
    get('product-modal').classList.remove('active');
    document.body.classList.remove('modal-open');
    get('modal-form').classList.add('hidden');
    get('modal-buy').style.display = '';
  };

  // PLUS
  get('modal-plus').onclick = function () {
    qty++;
    get('modal-qty').value = qty;
  };

  // MINUS
  get('modal-minus').onclick = function () {
    if (qty > 1) qty--;
    get('modal-qty').value = qty;
  };

  // BUY BUTTON
  get('modal-buy').onclick = function () {
    get('modal-form').classList.remove('hidden');
    this.style.display = 'none';
  };

  // CANCEL FORM
  get('form-cancel').onclick = function () {
    get('modal-form').classList.add('hidden');
    get('modal-buy').style.display = '';
  };

  // SUBMIT FORM
  get('modal-form').onsubmit = function (e) {
    e.preventDefault();

    const name = get('form-name').value.trim();
    const phone = get('form-phone').value.trim();
    const address = get('form-address').value.trim();

    if (!name || !phone || !address) {
      alert('Name, Phone aur Address zaroori hai');
      return;
    }

    const price = Number(get('modal-price').innerText.replace(/\D/g, ''));

    const order = {
      product: get('modal-title').innerText,
      qty: qty,
      total: price * qty,
      name: name,
      phone: phone,
      address: address,
      date: new Date().toLocaleString()
    };

  localStorage.setItem('order', JSON.stringify(order));
  location.href = 'success.html';
};

})();

function initSuccess() {
  var order = JSON.parse(localStorage.getItem('order'));
  if (!order) {
    location.href = 'products-page.html';
    return;
  }
  var t = document.getElementById('success-title');
  var q = document.getElementById('success-qty');
  var total = document.getElementById('success-total');
  if (t) t.innerText = order.title || order.product || '';
  if (q) q.innerText = order.qty || '';
  if (total) total.innerText = 'Rs ' + Number(order.total || 0).toLocaleString('en-PK');
  var btn = document.getElementById('btn-home');
  if (btn) {
    btn.onclick = function () {
      localStorage.clear();
      location.href = 'products-page.html';
    };
  }
}
