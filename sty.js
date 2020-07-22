// toggle like button
var x = document.getElementById('txt');
var y = document.getElementById('ico');
  function myFunction() {
    if (x.innerHTML === ' Like') {
      x.innerHTML = 'Unlike';
      y.classList.remove('fa-heart');
      y.classList.remove('fas');
    } else {
      x.innerHTML = ' Like';
      y.classList.add('fa-heart');
      y.classList.add('fas');
    }
  }

// adding new email field
var sel = document.getElementById('insrt');
var num = 1;    
var remove_btn = document.getElementById('remove-btn');
function addmail() {
  if(num === 0) {
    remove_btn.disabled = false;
  }
  sel.insertAdjacentHTML('afterend', `<div class="row" id="row_id${num}">
                                          <div class="col-lg-12 col-md-10 col-sm-12" id="col_id${num}">
                                            <input class="form-control" type="email" id="mail${num}"></input>
                                          </div>
                                        </div><br id="br_id${num}">`);
  num +=1;
}

// removing an email field
function remove_field() {
  num -= 1;
  document.getElementById(`row_id${num}`).remove();
  document.getElementById(`br_id${num}`).remove();
  if(num === 0) {
    remove_btn.disabled = true;
  }
}


// final share button
var share_btn = document.getElementById('modal-share-btn');
var close_btn = document.getElementById('modal-close-btn');
function share() {
  alert('Sent Successfully!');

  close_btn.click();

  for(var i = 0; i < num; i++) {
    document.getElementById(`row_id${i}`).remove();
    document.getElementById(`br_id${i}`).remove();
  }

  num = 0;
  sel.insertAdjacentHTML('afterend', `<div class="row" id="row_id${num}">
                                          <div class="col-lg-12 col-md-10 col-sm-12" id="col_id${num}">
                                            <input class="form-control" type="email" id="mail${num}"></input>
                                          </div>
                                        </div><br id="br_id${num}">`);
  num +=1;
}