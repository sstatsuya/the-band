// Begin mobile navigation
    const nav = document.querySelector('#nav');
    const navItems = document.querySelectorAll('#nav li a[href*="#"]');
    const navBarBtn = document.querySelector('#header .icon-bar');
    const navCloseBtn = document.querySelector('#nav .icon-close');
    const overLay = document.querySelector('.overlay');
    
    
    // When click bar button
    navBarBtn.onclick = () =>{
        navBarBtn.classList.add('close');
        nav.classList.remove('close');
        overLay.hidden = false;
    }

    closeNav = () =>{
        navBarBtn.classList.remove('close');
        nav.classList.add('close');
        overLay.hidden = true;
    }

    // When click close on nav
    navCloseBtn.onclick = () =>{
        closeNav();
    }

    //When click something on nav then close nav
    for(navItem of navItems){
        let isSubNav = navItem.nextElementSibling && navItem.nextElementSibling.classList.contains('sub-nav');
        navItem.onclick = (event) =>{
            if(isSubNav){
                event.preventDefault();
            }
            else{
                closeNav();
            }
        }
    }

    // When click overlay while nav showing
    overLay.onclick = () =>{
        closeNav();
    }



// End mobile navigation    