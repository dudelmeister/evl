module.exports = {
  bind : function (app) {

    app.get('/', function (req, res) {
      res.render('index');
    });

    





    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-3-got', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == 1) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v11', {'back' : back});
    } else if (x == 2) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c', {'back' : back});
    } else if (x == 3) {
    	console.log(x);
    	res.render('examples/elements/evl-3-v5c2', {'back' : back});
    }
 
	});



    /* - - - - - - - - - - - - - - - - - - - -  */
    /* Pass EVL ref number variations into flow */

    app.get('/examples/elements/evl-3-flow', function (req, res) {

    var next = req.query.nextlink;
    var back = req.query.nextbacklink;

    res.render('examples/elements/' + next, {'back' : back});
    
 
    });


	

     /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-7-flow', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == "v11") {
        console.log(x);
        res.render('examples/elements/evl-7-v11', {'back' : back});
    } else if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-7-v5c', {'back' : back});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-7-v5c2', {'back' : back});
    } else {
        console.log(x);
        res.render('examples/elements/evl-7-other', {'back' : back});
    }
 
    });




    /* - - - - - - - - - - - - - - - - - - - - - - - - - -  */
    /* Multiple routes from How to pay, renewal period page */

    app.get('/examples/elements/evl-11-renewals', function (req, res) {


    var paymethod = req.query.paynum;
    var paynum = req.query.paynum;
    var back = req.query.nextbacklink;

    res.render('examples/elements/evl-period-check' + paynum, {'back' : back});
    

    });





    /* - - - - - - - - - - - - - - - - - - - */
    /* Pages for EVL revision to entrypoint */

    app.get('/examples/elements/evl-11-flow', function (req, res) {

    var x = req.query.reftype;
    var back = req.query.nextbacklink;


    if (x == "v5c") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c', {'back' : back});
    } else if (x == "v5c2") {
        console.log(x);
        res.render('examples/elements/evl-11-v5c2', {'back' : back});
    } else {
        console.log(x);
        res.render('examples/elements/evl-vehicle-details', {'back' : back});
    }

    });




	
    /* - - - - - - - - - - - - - - */
    /* Using idealpostcode to get  */
    /* addresses for a postcode    */

    app.get('/examples/elements/evl-find-postcode', function (req, res) {

      var Handlebars = require('Handlebars');

      var postcode = req.query.postcode;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupPostcode(postcode, function (error, results) {
        if (error) {
        // Implement some error handling
        }

        console.log(results); 
        res.render('examples/elements/evl-paydd-address.html', {'postcode' : postcode, 'result' : results})

      });

    });





    /* - - - - - - - - - - - - - - - - */
    /* Using idealpostcode to playback */
    /* full address into a form from   */
    /* the user chosen udprn           */

    app.get('/examples/elements/evl-chosen-address', function (req, res) {

      var Handlebars = require('Handlebars');

      var selectedudp = req.query.udprn;

      var idealPostcodes = require("ideal-postcodes")("ak_i0ze7k03RQwMtjncypybi4nQOE97T")

      idealPostcodes.lookupUdprn(selectedudp, function (error, address) {
        if (error) {
        // Implement some error handling
        }

        console.log(address); 
        res.render('examples/elements/evl-paydd-address-playback.html', {'address' : address})

      });

    });





  }
};
