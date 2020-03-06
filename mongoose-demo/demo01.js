const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

//创建一个模型
//类似在设计一个数据库
//MongoDB是动态的，只需在代码中设计你的数据库就可以了
//mongoose这个包就可以让设计编写过程变得非常简单
const Cat = mongoose.model('Cat', { name: String });

//实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });

//持久化保存kitty实例
kitty.save().then(() => console.log('meow'));