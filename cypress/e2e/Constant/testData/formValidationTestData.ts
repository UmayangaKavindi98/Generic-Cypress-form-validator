export const testData = [
    { testcase:`All inputs are in correct format`, 
        name: {value:`validName`, expectError: false},
        username:{value:`validUsername`, expectError: false}, 
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:`01234567891`, expectError: false},
    },
    
    { testcase:`All fields empty check`, 
        name: {value:null, expectError: true, validationmsg:`Name must be 2 or more characters long`},
        username:{value:null, expectError: true, validationmsg:`Username must be 4 or more characters long`}, 
        email: {value:null, expectError: true, validationmsg:`Invalid email`},
        phone: {value:null, expectError: true, validationmsg:`Phone numbers are a minimum of 10 digits`},
    },

    { testcase:`Name field empty check`, 
        name: {value:null, expectError: true, validationmsg:`Name must be 2 or more characters long`},
        username:{value:`validUsername`, expectError: false}, 
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:`01234567891`, expectError: false},
    },

    { testcase:`Username field empty check`, 
        name: {value:`validName`, expectError: false},
        username:{value:null, expectError: true, validationmsg:`Username must be 4 or more characters long`}, 
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:`01234567891`, expectError: false},
    } ,

    { testcase:`Email field empty check`,
        name: {value:`validName`, expectError: false},
        username:{value:`validUsername`, expectError: false}, 
        email: {value:null, expectError: true, validationmsg:`Invalid email`},
        phone: {value:`01234567891`, expectError: false},
    },

    { testcase:`Phone field empty check`, 
        name: {value:`validName`, expectError: false},
        username:{value:`validUsername`, expectError: false}, 
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:null, expectError: true, validationmsg:`Phone numbers are a minimum of 10 digits`},
    },

    { testcase:`Name field length check`, 
        name: {value:'n', expectError: true, validationmsg:`Name must be 2 or more characters long`}, 
        username:{value:`validUsername`, expectError: false}, 
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:`01234567891`, expectError: false},
    },

    { testcase:`Username field length check`,
        name: {value:'validName', expectError: false}, 
        username: {value:'use', expectError: true, validationmsg:`Username must be 4 or more characters long`},
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:`0123456789`, expectError: false},
    },

    { testcase:`Phone number length check`,
        name: {value:'validName', expectError: false}, 
        username:{value:`validUsername`, expectError: false}, 
        email: {value:`validEmail@gmail.com`, expectError: false},
        phone: {value:'012345678', expectError: true, validationmsg:`Phone numbers are a minimum of 10 digits`}
    },

    { testcase:`Email valid check`,
        name: {value:'validName', expectError: false}, 
        username:{value:`validUsername`, expectError: false}, 
        email: {value:'invaidEmail@gmail', expectError: true, validationmsg:`Invalid email`},
        phone: {value:`0123456789`, expectError: false},
        },

];