function render(films) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>NETFLIX</title>
        <style>

        body {
            background-color: #091e3c;
        }
        table {
            width: 100%;
            border-spacing: 0
        }
        th {
            background-color: rgba(229,9,20,255);
            font-weight: bold;
            color: rgba(255,255,255,255);
            text-align: left;
            padding: 5px;
            font-size: 25px;
        }
        td {
            
            padding: 5px;
            color: rgba(255,255,255,255);
            font-size: 20px;
        }
        h1 {
            font-size: 70px;
            color: rgba(229,9,20,255);
        }
        h2 {
            font-size: 50px;
            color: rgba(255,255,255,255);
        }
        div {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        tbody>tr:hover{
            background-color: rgba(229,9,20,255);
        }
        </style>
    </head>
    <body>
        <div><h1>NETFLIX</h1></div>
        <div><h2>Global Top 10</h2></div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Films</th>
                    <th>WEEKS IN TOP 10</th>
                    <th>HOURS VIEWED</th>
                    <th>RUNTIME</th>
                    <th>VIEWS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Players</td>
                    <td>1</td>
                    <td>28,500,000</td>
                    <td>1:45</td>
                    <td>16,300,000</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Lover,Stalker,Killer</td>
                    <td>2</td>
                    <td>21,900,000</td>
                    <td>1:31</td>
                    <td>14,400,000</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Despicable Me 3</td>
                    <td>2</td>
                    <td>15,900,000</td>
                    <td>1:30</td>
                    <td>10,600,000</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Einstein and the Bomb</td>
                    <td>1</td>
                    <td>10,900,000</td>
                    <td>1:17</td>
                    <td>8,500,000</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Minions</td>
                    <td>5</td>
                    <td>10,700,000</td>
                    <td>1:31</td>
                    <td>7,100,000</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Orion and the Dark</td>
                    <td>3</td>
                    <td>10,800,000</td>
                    <td>1:33</td>
                    <td>7,000,000</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Despicable Me 2</td>
                    <td>13</td>
                    <td>10,000,000</td>
                    <td>1:38</td>
                    <td>6,100,000</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>Despicable Me</td>
                    <td>6</td>
                    <td>7,300,000</td>
                    <td>1:35</td>
                    <td>4,600,000</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>American Assassin</td>
                    <td>3</td>
                    <td>6,500,000</td>
                    <td>1:52</td>
                    <td>3,500,000</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>The Devil Wears Prada</td>
                    <td>2</td>
                    <td>6,200,000</td>
                    <td>1:49</td>
                    <td>3,400,000</td>
                </tr>
                
            </tbody>
        </table>
    </body>
    </html>
    `};
    
    module.exports = render;
    