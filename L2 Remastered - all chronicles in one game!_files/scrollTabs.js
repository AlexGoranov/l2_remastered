	let tabHeader = document.querySelectorAll('.tabHeaderClick'),
		tabContent = document.querySelectorAll('.content_slider_info_bg'),
		tabContainer = document.querySelector('.about_game_list'),
		contentSlide = document.querySelectorAll('.tabHeaderItem'),
		tabHeaderIcon = document.querySelectorAll('.tabHeaderIcon'),
		sliderImgPoint = document.querySelectorAll('.vh_slide_img'),
		sliderMenuContainer = document.querySelector('.content_slider_menu'),
		sliderMenu = document.querySelectorAll('.vh_slide_img');



	window.addEventListener('DOMContentLoaded', function () {
		hideTabsContent(1);
	});


	function hideTabsContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('visible');
			tabContent[i].classList.add('hidden');
			contentSlide[i].classList.remove('list_active');
			tabHeaderIcon[i].classList.remove('list_active');
			sliderImgPoint[i].classList.remove('on_img_a');
		}
	}

	function showTabsContent(b) {
		if (tabContent[b].classList.contains('hidden')) {
			hideTabsContent(0);
			tabContent[b].classList.remove('hidden');
			tabContent[b].classList.add('visible');
			contentSlide[b].classList.add('list_active');
			tabHeaderIcon[b].classList.add('list_active');
			sliderImgPoint[b].classList.add('on_img_a');
		}
	}

	tabContainer.addEventListener('click', function (e) {
		let target = e.target;
		if (target.className == 'tabHeaderClick') {
			for (let i = 0; i < tabHeader.length; i++) {
				if (target == tabHeader[i]) {
					showTabsContent(i);
					break;
				}
			}
		}
	});

	sliderMenuContainer.addEventListener('click', function (e) {
		let target = e.target;
		if (target.className == 'vh_slide_img') {
			for (let i = 0; i < sliderMenu.length; i++) {
				if (target == sliderMenu[i]) {
					showTabsContent(i);
					break;
				}
			}
		}
	});


	// JQuery Code for change active menu item when user scrolling page and
	// change page position when user click to menu item. 
	var lastId,
		topMenu = $("#menuScrollVH"),
		topMenuHeight = topMenu.outerHeight() + 15,
		menuItems = topMenu.find("a"),
		scrollItems = menuItems.map(function () {
			var item = $($(this).attr("href"));
			if (item.length) {
				return item;
			}
		});

	menuItems.click(function (e) {
		var href = $(this).attr("href"),
			offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
		$('html, body').stop().animate({
			scrollTop: offsetTop
		}, 300);
		e.preventDefault();
	});

	$(window).scroll(function () {
		var fromTop = $(this).scrollTop() + topMenuHeight;
		var cur = scrollItems.map(function () {
			if ($(this).offset().top < fromTop)
				return this;
		});
		cur = cur[cur.length - 1];
		var id = cur && cur.length ? cur[0].id : "";



		if (lastId !== id) {
			lastId = id;
			menuItems
				.removeClass("activeVH");

			menuItems
				.filter(`[href="#${id}"]`).addClass("activeVH");
		}
	});


	//Scroll to point Start

	let mBottomArrow = document.querySelector('.to-bottom-arrow');
	mBottomArrow.addEventListener('click', (e) => {
		scrollToT('#m_remastered_top', e, 600);
	});


	let rem = document.querySelectorAll('.bottom_2zfD');

	let linkArr = ["#m_remastered_info", "#m_g_description", "#m_upgradechar", "#m_pvp", "#m_pve"];

	for (let i = 0; i < 5; i++) {
		rem[i].addEventListener('click', (e) => {
			scrollToT(linkArr[i], e, 600);
		});
	}

	function scrollToT(target, event, delay) {
		let aa = $(target);
		var offsetDownLarge = 88;
		var offsetDownSmall = 13;
		if (aa.length) {
			event.preventDefault();
			var clientWidth = document.body.clientWidth;
			var offset = clientWidth >= 992 ? offsetDownLarge : offsetDownSmall;
			var scroll = aa.offset().top - offset;
			$("html, body").stop().animate({
				scrollTop: scroll
			}, delay); // Время прокрутки, чем больше, тем медленнее.
		}
	}



	//PoP Up Start

	let bagContainer = document.querySelector('.bagsTable'),
		hoverImages = document.querySelectorAll('.m_popUp_description'),
		popUpContainerItem = document.querySelectorAll('.m_popUp_container');

	window.addEventListener('DOMContentLoaded', function () {
		hidePopUps(0);
	});


	function hidePopUps(a) {
		for (let i = a; i < popUpContainerItem.length; i++) {
			popUpContainerItem[i].classList.remove('visible');
			popUpContainerItem[i].classList.add('hidden');

		}
	}

	function showPopUpContent(b) {
		if (popUpContainerItem[b].classList.contains('hidden')) {
			hidePopUps(0);
			popUpContainerItem[b].classList.remove('hidden');
			popUpContainerItem[b].classList.add('visible');
		}
	}

	bagContainer.addEventListener('mouseover', function (e) {
		let target = e.target;
		if (target.className == 'm_popUp_description') {
			for (let i = 0; i < hoverImages.length; i++) {
				if (target == hoverImages[i]) {
					showPopUpContent(i);
					break;
				}
			}
		}
	});

	bagContainer.addEventListener('mouseout', function (e) {
		let target = e.target;
		if (target.className == 'm_popUp_description') {
			for (let i = 0; i < hoverImages.length; i++) {
				if (target == hoverImages[i]) {
					hidePopUps(i);
					break;
				}
			}
		}
	});

	
	function showPopUpDescription (targetId, text) {
		
		let target = document.querySelector(`#${targetId}`);
		let textBlock = document.createElement('div');
		textBlock.classList.add('m_popUp_container2', 'hidden');
		target.parentNode.appendChild(textBlock);
		
		
				
		target.addEventListener('mouseover', (e) => {
			if (textBlock.classList.contains('hidden')) {
				target.parentNode.appendChild(textBlock);
				textBlock.classList.remove('hidden');
				let coords = target.getBoundingClientRect();
				textBlock.style.left = coords.left + "px";
				textBlock.style.top = coords.bottom + "px";
				textBlock.classList.add('visible');
				textBlock.innerHTML = text;
				target.style.cursor = 'help';
			}
			
		});
		target.addEventListener('mouseout', (e) => {
			if (textBlock.classList.contains('visible')) {
				textBlock.classList.remove('visible');
				textBlock.classList.add('hidden');
				textBlock.remove();
			}
		});
		
		
	}