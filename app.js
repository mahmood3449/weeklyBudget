// class
//class for get bodget 
class Get{
    GetBodget(){
        if(valuePrompt == "" || valuePrompt == null){
            window.location.reload();
        }
        else{
        let ObjectAdd = new Add0();
        ObjectAdd.AddBodget(valuePrompt,total,left);
        }
    }
}
//class for add bodget and show it
class Add0{
    AddBodget(valuePrompt,total,left){
        total.innerText = valuePrompt;
        left.innerText = valuePrompt;
    }
}
//class for add Expenses and show it
class Add1{
    AddExpenses(expense,amount,total){
        let ul = document.querySelector(".list-group");
        let li = document.createElement("li");
        li.classList.add("budgete");
        li.style.textAlign = "center";
        li.style.listStyleType = "none";
        li.innerText = `${expense.value} : ${amount.value} تومان`
        ul.appendChild(li);
        let remains = (Number(total.textContent - Number(amount.value)));
        left.innerText = remains;
        form.reset();
    }
}

// variabls
let valuePrompt = prompt("لطفا بودجه خود را وارد کنید");
let total = document.querySelector("#total");
let left = document.querySelector("#left");
let expense = document.querySelector("#expense");
let amount = document.querySelector("#amount");
let form = document.querySelector("#add-expense");
let body = document.querySelector("body");

// addEventListeners
// addEventListeners for load page
document.addEventListener("DOMContentLoaded" , function(){
    let ObjectGet = new Get();
    ObjectGet.GetBodget();
    let p = document.createElement("p");
        p.classList.add("present");
        p.innerText = "طراحی و اجرا توسط محمود کریمی";
        body.appendChild(p);
        setTimeout(() => {
            document.querySelector(".present").remove();
        }, 5000);
})
// addEventListeners for submit form 
form.addEventListener("submit" , function(e){
    e.preventDefault();
    let ObjectAdd1 = new Add1();
    ObjectAdd1.AddExpenses(expense,amount,left);
})