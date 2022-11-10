import * as React from 'react';
import Typography from '@mui/material/Typography';
import { req } from '../utils';
import { useState, useEffect } from 'react';
import {  Stack } from '@mui/material'
import Recipe from './Recipe';
import Masonry from '@mui/lab/Masonry';



const List= _=> {


  const [list, setList] = useState("");
  const [clicked, setClicked] = useState(false);
  const [trigger, setTrigger] = useState(false);
  const [value, setValue] = useState("");

useEffect(_ => {
    (async _ => {
      const response = await req.get(`?q=axios`);
      setList(response.data.hits)
      setTrigger(true);

    })()
  },[])


  useEffect(_ => {
    if (clicked === true) {
      (async _ => {
        const response = await req.get(`?q=${value}`);
        console.log(response.data.count);
        if (response.status === 200 && response.data.count > 0 ) {
          setList(response.data.hits)
          setTrigger(true);
        } else {
          setTrigger(false);
        }
      })()
    }
  }, [clicked, value])

  const input = e => {
    const input_value = e.target.value;
    setValue(input_value);
  }
  const submit_input = _ => {
    if (value !== "") {
      setClicked(true);
      setTimeout(_ => {
        setClicked(false);

      }, 5000)
    }
  }
  return (
    <>
      <Stack className="Top" >
        <Typography variant="v6" color="white" >Food Recipe App</Typography>
      </Stack>
      <Stack direction="row" className="searchNav" >
        <input type="text" onKeyUp={input} placeholder="Search any Food " />
  <button onClick={submit_input}>Search</button>
      </Stack>
      <p className={trigger === false && clicked === true && value !== "" ? "notfound" : "notfound none"} sx={{ color: "green" }}>No Item Available For this Search</p>

      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center",border:"2px solid green", marginTop: 30}}>
        <Masonry columns={4} spacing={3} justifyContent="center"
          alignItems="stretch" >

          {trigger === true ?

            list.map((data, idx) => {
              return (
                <>
                  <Recipe key={idx} data={data} />
                </>
              )
            })
            : ("")}
        </Masonry>
      </div>

    </>
  );
}


export default List;













