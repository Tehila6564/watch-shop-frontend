
import p1 from '../../img/clock1.png' 
import p2 from '../../img/clock12.png'
import p3 from '../../img/clock3.png'
import p4 from '../../img/clock4.png'
import p5 from '../../img/clock5.png'
import p6 from '../../img/clock6.png'
import p7 from '../../img/clock7.png'
import p8 from '../../img/clock8.png'
import p9 from '../../img/clock9.png'
import p10 from '../../img/clock10.png'
import p11 from '../../img/clock11.png'
import p12 from '../../img/clock12.png'
import p13 from '../../img/clock13.png'
import p14 from '../../img/clock14.png'
import p15 from '../../img/clock15.png'
import p16 from '../../img/clock16.png'
import p17 from '../../img/clock17.png'
import p18 from '../../img/clock18.png'
import p19 from '../../img/clock19.png'
import p20 from '../../img/clock20.png'






const products =
    [{
        id: 0,
        name: "clock1",
        Qty: 10,
        cartQty:0,
        image: p1 ,
        price: 400,
        description: "Women's watch roz-gold,vegas",
    },

    {
        id: 1,
        name: "clock2",
        Qty: 10,
        cartQty:0,
        image: p2,
        price: 350,
        description: "Women's watch silver..",
    },

    {
        id: 2,
        name: "clock3",
        Qty: 10,
        cartQty:0,
        image: p3,
        price: 500,
        description: "Women's watch roz-gold,MK",
    }
        ,

    {
        id: 3,
        name: "clock4",
        Qty: 10,
        cartQty:0,
        image: p4,
        price: 600,
        description: "Women's watch gold,MK",
    }
        ,

    {
        id: 4,
        name: "clock5",
        Qty: 10,
        cartQty:0,
        image: p5,
        price: 900,
        description: "Women's watch Dark silver",
    }
        ,

    {
        id: 5,
        name: "clock6",
        Qty: 10,
        cartQty:0,
        image: p6 ,
        price: 700,
        description: "Women's watch gold,clust",
    }
        ,

    {
        id: 6,
        name: "clock7",
        Qty: 10,
        cartQty:0,
        image: p7,
        price: 450,
        description: "Women's watch Swarovski",
    }
        ,

    {
        id: 7,
        name: "clock8",
        Qty: 10,
        cartQty:0,
        image: p8,
        price: 900,
        description: "Women watch gold,Plein",
    }
        ,

    {
        id: 8,
        name: "clock9",
        Qty: 10,
        cartQty:0,
        image: p9,
        price: 450,
        description: "Women's watch Anne Klein",

    }
        ,

    {
        id: 90,
        name: "clock10",
        Qty: 10,
        cartQty:0,
        image: p10,
        price: 1100,
        description: "Men's watch silver Dark",
    },


    {
        id: 90,
        name: "clock11",
        Qty: 10,
        cartQty:0,
        image: p10,
        price: 900,
        description: "Men's watch silver",

    },

    {
        id: 90,
        name: "clock12",
        Qty: 10,
        cartQty:0,
        image: p11,
        price: 300,
        description: "Touch Watch,MK",
    },

    {
        id: 90,
        name: "clock13",
        Qty: 10,
        cartQty:0,
        image: p12,
        price: 900,
        description: "Women's watch silver",

    },

    {
        id: 90,
        name: "clock14",
        Qty: 10,
        cartQty:0,
        image: p20,
        price: 700,
        description: "Men's watch Black",
    }
        ,

    {
        id: 90,
        name: "clock15",
        Qty: 10,
        cartQty:0,
        image: p14,
        price: 300,
        description: "Women's watch colorful",
    }
        ,

    {
        id: 90,
        name: "clock16",
        Qty: 10,
        cartQty:0,
        image: p15,
        price: 200,
        description: "Women's Icewatch ",
    }
        ,

    {
        id: 90,
        name: "clock17",
        Qty: 10,
        cartQty:0,
        image: p16,
        price: 550,
        description: "Women's watch roz,Swarovski",
    }
        ,

    {
        id: 90,
        name: "clock18",
        Qty: 10,
        cartQty:0,
        image: p17,
        price: 600,
        description: "Women's watch",
    }
    ,

    {
        id: 90,
        name: "clock19",
        Qty: 10,
        cartQty:0,
        image: p18,
        price: 900,
        description: "Women's watch silver",
    }
    ,

    {
        id: 90,
        name: "clock20",
        Qty: 10,
        cartQty:0,
        image: p19,
        price: 500,
        description: "Women's watch gold",
    }

    ]
    
export const productReducer = (state = products, action) => {
       switch (action.type) {
        case ("ADDQTY"):
           if(state.length>0){
            const addState =[...state]
            const afterAdd = addState.filter((product) =>(product.id ===action.product.id))
            if(afterAdd.length>0){
                afterAdd[0].Qty +=1;
                afterAdd[0].cartQty -=1;
              
                return addState
            }
           }

        case("DECREASEQTY"):
           const dec_state = [...state]
           const afterDecras= dec_state.filter((product) => (product === action.item))
         
           if (afterDecras[0].Qty === 0 ) {
            alert("Umm, disappointment, this product is not in stock")
                   return dec_state
                   
               }
               afterDecras[0].Qty -=1;
               afterDecras[0].cartQty +=1;
            
           return dec_state
            }

    return state
}

