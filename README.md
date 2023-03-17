
# FactCat
Api sobre curiosidades de gatos.

# demonstração
![Captura de Tela (91)](https://user-images.githubusercontent.com/78994881/225966016-85796ccc-0c67-4f01-b20b-8f2f69b0ee85.png)
## clone este projeto
```bash

git clone https://github.com/benetesla/whiskerwonderlands.gi
  npm install whiskerwonderlands
  npm start

```
    
## Uso/Exemplos

```javascript
import React, { useState, useEffect } from 'react'

const ApiUrl = 'https://catfact.ninja/fact'
const fetctData = async () => {
            const response = await fetch(ApiUrl)
            const data = await response.json()
            setCat(data)
            setLoading(false)
        }
        fetctData()
        
```


## Referência

 - [API](https://catfact.ninja/fact)
 

## License


[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)



## Stack utilizada

**Front-end:**  ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)



