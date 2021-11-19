$(()=>{
    let inpCustomer = $('#inpCustomer')
    let inpCourse = $('#inpCourse')
    let inpAuthor = $('#inpAuthor')
    let btnSubmit = $('#btnSubmit')
    let allContent = $('#allContent')

    btnSubmit.click(()=>{
        allContent.append($(`
        <div class="card" style="width: 18rem;">
            <img src="${imgName()}" class="card-img-top">
            <ul class="list-group list-group-flush">
                <li class="list-group-item" id="name">Name: ${inpCustomer.val()}</li>
                <li class="list-group-item" id="course">Course:  ${inpCourse.val()}</li>
                <li class="list-group-item" id="author">Author:  ${inpAuthor.val()}</li>
            </ul>
        </div>
        `))
        inpCustomer.val("")
        inpCourse.val("")
        inpAuthor.val("")
    })
})

function imgName(){
    var letters = "124589";
    var extension = ".jpg";
    var nameOfFile = letters[Math.floor(Math.random()*6)]+extension;
    return nameOfFile;
}