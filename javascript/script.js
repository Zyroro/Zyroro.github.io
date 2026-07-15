/* ============================================
 Logic For Switching Between Pages Using Buttons
============================================= */

// Select All Buttons In page_buttons Div
const buttons = document.querySelectorAll("#page_buttons button")

// Array Containing All Of The Page Elements
const pages = [
    document.querySelector("#anim_page"),
    document.querySelector("#transition_page"),
    document.querySelector("#sprite_page")
]

// Logic For Hiding All The Pages
function hidePages()
{
    for (const page of pages)
    {
        page.style.display = "none";
    }
}

// Logic For Showing The Page Based On Array Index Order
function showPage(index)
{
    pages[index].style.display = "block";
}

// Click Event To Enable The Buttons To Switch Between Pages
for (const [index, button] of buttons.entries())
{
    button.addEventListener("click", function(){
        hidePages();
        showPage(index);
    })
}

// Only Show First Page By Default
hidePages();
showPage(0);

    
