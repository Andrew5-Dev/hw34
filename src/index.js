import '@css/style.css'

import * as $ from 'jquery'
import Post from '@model/post'
import json from '@/assets/data'
import logo from '@assets/emblem-logo.png'


const post = new Post('Webpack Post Title!!!' , logo)

$('pre').html(post.toString())

console.log('JSON:', json)