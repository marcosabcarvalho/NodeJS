var rect = {
  perimeter: (x,y) => (2*(x+y)),
  area: (x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + "and b" + b);

    if ( l <= 0 || b <= 0){ void
        console.log("Rectangle dimensions should be greater than zero: l = " + l + ", and b =" + b );
    }
    else {
        console.log("the area of the rectangle is " + rect.area)
    }

}