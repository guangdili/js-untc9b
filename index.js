// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<table>
        <thead>
            <tr>
                <th>Account</th>
                <th>
                    <div class="rightColHeader1"><label style="font:icon; color:darkcyan;">^</label>Available Cash</div>
                    <div class="rightColHeader2">Today's Change</div>
                </th>
            </tr>
        <thead>
        <tbody>
            <tr>
                <td class="leftCol">IRA - 5200</td>
                <td>
                    <div class="rightCol"><span>5,763.36</span></div>                    
                    <div class="rightColBottom1">-0.08%/<span>8,916.69</span></div>
                </td>
            </tr>
            <tr>
                <td class="leftCol">AAA - 1812</td>
                <td>
                    <div class="rightCol"><span>2,010,926.10</span></div>
                    <div class="rightColBottom2">+0.21%/$38,881.63</div>
                </td>
            </tr>
            <tr>
                <td class="leftCol">AAA - 3810</td>
                <td>
                    <div class="rightCol"><span>10,050,054.07</span></div>
                    <div class="rightColBottom2">+0.07%/$8,916.69</div>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <div class="bottomRow">Load more</div> 
                </td>
            </tr>
        </tbody>
    </table>`;

var acctData = [
    {
        "acctNum": "AAA - 1234",
        "user": "Alice"
    },
    {
        "acctNum": "AAA - 5231",
        "user": "Bob"
    },
    {
        "acctNum": "AAA - 9921",
        "user": "Alice"
    },
    {
        "acctNum": "AAA - 8191",
        "user": "Alice"
    }
];

var balance = {
    "AAA - 1234": 4593.22,
    "AAA - 9921": 0,
    "AAA - 5231": 232142.5,
    "AAA - 8191": 4344
};

function sortFilterData(user, sortBy, sortDirection = "asc") {
    var array;

    if (sortBy === "undefined" || sortBy === "")
        return;
    else if (sortBy === "acctNum") {
        array = acctData;
        //sort asc at the first
        array.sort((a, b) => (a.acctNum > b.acctNum) ? 1 : (a.acctNum === b.acctNum) ? ((a.user > b.user) ? 1 : -1) : -1);
        if (sortDirection === "desc") {
            // Then reverse it as desc:
            array.reverse();
        }
        acctData = array;
    }
    else if (sortBy === "balance") {
        array = balance;
        //sort asc at the first
        array = Object.entries(array).sort((a, b) => (a[1] - b[1]));       
        if (sortDirection === "desc") {
            // Then reverse it as desc:
            array.reverse();
        }
        balance = array;
    }
    console.log(array);
    //filter user
    if (user === "undefined" || user === "")
        return;
    else
    {
        var array = acctData;
        console.log(filterObj(array, user));
    }
}

function filterObj(array, user) {
    return array.filter(x => x.user === user);
}

var user = null;
/*Copy all into you brower's console. Remove test a case common to test.*/
//sortFilterData("Bob");
//sortFilterData("Charlie");
//sortFilterData(user, "acctNum");
//sortFilterData(user, "acctNum", "desc");
//sortFilterData(user, "balance");
//sortFilterData(user, "balance","desc");
//sortFilterData("Alice", "balance");