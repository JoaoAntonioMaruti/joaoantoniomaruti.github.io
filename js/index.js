var tab1 = document.getElementById('tab1')
var tab2 = document.getElementById('tab2')

var activeClassName = 'tab-active'
var tabs = {
  button: [
    document.getElementById('tab1'),
    document.getElementById('tab2'),
  ],
  content: [
    document.getElementById('tab1-content'),
    document.getElementById('tab2-content'),
  ],
}

var getTabButton = function (tab) {
  return tabs.button[tab - 1]
}

var getTabContent = function (tab) {
  return tabs.content[tab - 1]
}

var showTab = function (tab) {
  tabs.content.map(function (content, index) {
    content.style.display = index + 1 === tab ? 'block' : 'none'
    return
  })
}

var removeTabsStyles = function () {
  return tabs.button.map(function (tab) {
    tab.classList.remove(activeClassName)
  })
}

var tabsHandler = function (tab) {
  showTab(tab)
  removeTabsStyles()
  var currentTab = getTabButton(tab)
  var names = currentTab.className.split(' ')
  var tabContent = getTabContent(tab)

  if (names.some((className) => className === activeClassName)) {
    currentTab.classList.remove(activeClassName)
    return
  }
  currentTab.classList.add(activeClassName)
  tabContent.classList.remove('animated', 'fadeIn', 'fast')
  tabContent.classList.add('animated', 'fadeIn', 'fast')
  return
}

tab1.addEventListener('click', function() {
  tabsHandler(1)
})
tab2.addEventListener('click', function() {
  tabsHandler(2)
})

document.addEventListener('scroll', function() {
	var top = window.pageYOffset
	var one = document.querySelector('.one')
	var two = document.querySelector('.two')
	var three = document.querySelector('.three')
	var four = document.querySelector('.four')
	var five = document.querySelector('.five')

	one.style.bottom = (-(top * (0.15 * 2)) + 'px')
	two.style.bottom = (-(top * (0.2 * 2)) + 'px')
	three.style.bottom = (-(top * (0.3 * 2)) + 'px')
	four.style.bottom = (-(top * (0.4 * 2)) + 'px')
	five.style.bottom = (-(top * (0.5 * 2)) + 'px')
})


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

getFormErrors = function (form) {
  var errors = []
  if (!form.name) errors.push('Enter a name')
  if (!form.email) errors.push('Enter a email')
  if (!validateEmail(form.email)) errors.push('Enter a valid email')
  if (!form.subject) errors.push('Enter a subject')
  if (!form.message) errors.push('Enter a message')
  return errors
}

var clearForm = function () {
  document.getElementById('error').innerHTML = ''
  document.getElementById('success').innerHTML = ''
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('subject').value = ''
  document.getElementById('message').value = ''
}

var showSuccessMessage = function () {
  document.getElementById('success').innerHTML = 'Sent'
}

var sendMail = function (data) {
  var newXHR = new XMLHttpRequest();
  newXHR.open('POST', 'https://formcarry.com/s/oIRFO0SXVM9');
  var jsonData = data;
  var formattedJsonData = JSON.stringify(jsonData);
  newXHR.setRequestHeader('Content-Type', 'application/json');
  newXHR.send(formattedJsonData);
  clearForm()
  showSuccessMessage()
}

var initForm = function () {
  var button = document.getElementById('send')
  var error = document.getElementById('error')

  button.addEventListener('click', function (e) {
    e.preventDefault()
    document.getElementById('success').innerHTML = ''
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var subject = document.getElementById('subject').value
    var message = document.getElementById('message').value

    var form = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };

    var errors = getFormErrors(form)

    if(errors.length > 0) {
      error.innerHTML = errors.join('<br />')
      return false
    }
    sendMail(form)
  })
}

var renderInstagramBlock = function (content) {

  console.log(content.images)

  var media = content.videos ? `
    <video
      autoplay
      loop
      src="${content.videos.standard_resolution.url}"
      width="350"
      height="${content.videos.standard_resolution.height}">
      align="middle"
    </video>
  ` : `
    <img align="middle" src="${content.images.low_resolution.url}">
  `

  return `
    <div class="item">
      ${media}
      <div class="instagram-overlay">
        <div class="instagram-action">
          <div class="instagram-likes">
            <i class="fa fa-heart"></i> ${content.likes.count}
          </div>
          <div class="instagram-comments">
            <i class="fa fa-comment"></i> ${content.comments.count}
          </div>
        </div>
      </div>
    </div>
  `
}

var initCarousel = function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    autoplay: true,
    items: 2,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
  });
}

var fethInstagram = function() {
  var token = '1714785323.f530f8f.e3306fe49085443786585358de659cf0',
  num_photos = 99999999999;

  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent',
    dataType: 'jsonp',
    type: 'GET',
    data: {access_token: token, count: num_photos},
    success: function(response){
      for( x in response.data ) {
        $('#instagram-content').append(renderInstagramBlock(response.data[x]));
      }
      initCarousel();
    },
    error: function(data){
      console.log(data);
    }
  });
}

var bootstrapApp = function() {
  fethInstagram()
  initForm()
}

document.onload = bootstrapApp()
