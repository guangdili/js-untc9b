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
