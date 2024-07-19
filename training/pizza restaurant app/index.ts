const menu=[
    {name: "margharita",price:8},
    {name: "peperoni",price: 10},
    {name: "hawaian",price: 10},
    {name: "veggie",price: 8},
    ]
    const CashInRegister = 100
    const orderQueue =[]
    const nextorderid= 1
    /** 
     * Challenge:  Add a utility function "addnewpizza" that takes a pizza object and adds it to the menu
     */
    
    function addNewPizza(pizzaObj) {
        menu.push(pizzaObj)
    }
    
    /**
     * write another utility place order that takes a pizza name parameter and
     * 1. finds that pizza object in the menu
     * 2.adds the income to the CashInRegister
     * 3.Pushees a new "order object" to the order queue
     * 4. returns a new order object (just in case we need it later)
     * id:nextorderid++ =>  2 steps : id:nextorderid; nextorderid=nextorderid+1
     */
    
    function placeOrder(pizzaname) {
        const selectedPizza=menu.find(pizzaObj => pizzaObj.name ===pizzaname)
        CashInRegister+=selectedPizza.price
        const newOrder= {id:nextorderid++ , pizza:selectedPizza, status:ordered}
        orderQueue.push(newOrder)
        return newOrder
        
    }
    
    function CompleteOrder(orderID) {
        const order=orderQueue.find(order =>order.id===orderID)
        order.status="completed"
        return order
    }
    
    addNewPizza({name: "chicken bacon ranch", cost: 12})
    addNewPizza({name: "BBQ chicken", cost: 12})
    addNewPizza({name: "spicy sausage", cost: 11})
    
    placeOrder("chicken bacon ranch")
    CompleteOrder(1)
    console.log("menu",menu)
    console.log("Cash in register",CashInRegister)
    console.log("order queue",orderQueue)