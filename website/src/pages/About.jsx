import React from 'react'
import Layout from '../components/Layout/Layout'
import {Box, Typography } from '@mui/material'

function About() {
  return (
    <Layout>
       <Box
       sx={{
        my:15,
        textAlign:"center",
        p:2,
        "& h4":{
          fontWeight: "bold",
          my:2,
          fontSize: '2rem',
        },
        "& p":{
          textAlign: 'justify',
        },
        "@media (max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.4rem",
          },
        },
       }}
       >
        <Typography variant="h4">Welcome To My Restaurant</Typography>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga voluptatum nobis reprehenderit nostrum? 
            Consectetur officiis hic labore expedita assumenda delectus voluptas voluptatum, magnam blanditiis ut quis 
            pariatur ipsum esse at doloremque laborum recusandae dolorum provident minima incidunt placeat quam architecto 
            dolor cupiditate. Veritatis harum quidem officiis minima ullam dignissimos saepe! Totam enim incidunt aliquam
             odit animi quo porro deserunt, quis tempore pariatur, aspernatur cumque dolore voluptas rerum. Excepturi 
             dignissimos repellat, amet, rerum fugit eaque provident minus sunt earum rem saepe sed eligendi quos ducimus 
             consequatur odio molestias veritatis. Vitae unde tenetur architecto, beatae sapiente aut sequi? Eligendi,
              sunt consequuntur!
          </p>
          <br/>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa dolorum animi ex debitis, labore qui incidunt 
            veritatis voluptatem maxime quaerat quisquam eius ipsam dicta quidem nemo quia magni aspernatur nobis quos vel? 
            Inventore optio iure ex consequuntur animi quasi unde possimus natus laboriosam? Odio sequi est quam tenetur 
            quis sint animi, autem tempore accusamus ipsa reiciendis possimus beatae ipsum facere? Cumque doloribus
             quibusdam temporibus possimus consectetur modi nulla minus quasi sapiente accusantium maxime ut porro
              aut quam error laudantium, ipsum provident, facilis rem! Harum voluptatibus velit obcaecati nobis,
               omnis architecto ut ex? Explicabo dolores veniam velit sit eum non ullam.
          </p>
        </Box>
    </Layout>
  )
}

export default About