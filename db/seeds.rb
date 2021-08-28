# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Textbook.destroy_all
Category.destroy_all
User.destroy_all

@admin = User.create!(
    username: 'penguin',
    email: 'penguin@email.com',
    password: '123456'
)

puts "#{User.count} users created"

@category1 = Category.create!(name: 'physics')
@category2 = Category.create!(name: 'history')
@category3 = Category.create!(name: 'government')
@category4 = Category.create!(name: 'literature')
@category5 = Category.create!(name: 'language')
@category6 = Category.create!(name: 'biology')
@category7 = Category.create!(name: 'chemistry')
@category8 = Category.create!(name: 'mathematics')
@category9 = Category.create!(name: 'english')
@category10 = Category.create!(name: 'art')
@category11 = Category.create!(name: 'economics')
@category12 = Category.create!(name: 'business')
@category13 = Category.create!(name: 'computer science')
@category14 = Category.create!(name: 'science')
@category15 = Category.create!(name: 'culinary arts')
@category16 = Category.create!(name: 'science')
@category17 = Category.create!(name: 'engineering')
@category18 = Category.create!(name: 'fashion')
@category19 = Category.create!(name: 'geography')
@category20 = Category.create!(name: 'geology')
@category21 = Category.create!(name: 'tourism')
@category22 = Category.create!(name: 'journalism')
@category23 = Category.create!(name: 'music')
@category24 = Category.create!(name: 'marketing')
@category25 = Category.create!(name: 'philosophy')
@category26 = Category.create!(name: 'psychology')
@category27 = Category.create!(name: 'sociology')
@category28 = Category.create!(name: 'veterinary')
@category29 = Category.create!(name: 'radio-television-film')

puts "#{Category.count} categories created"

@textbook1 = Textbook.create!(
    title: 'Thirteen Theories of Human Nature',
    author: 'Leslie Stevenson, David L. Haberman, Peter Matthews Wright, Charlotte Witt',
    edition: '7',
    ISBN: '978-0190604721',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/51QbT8TA7SL._SX329_BO1,204,203,200_.jpg',
    price: '60', user: @admin, category: @category25
)

@textbook2 = Textbook.create!(
    title: 'Precalculus',
    author: 'Franklin D. Demana',
    edition: '8',
    ISBN: '0131369067',
    img_url: 'https://m.media-amazon.com/images/I/61hRR3Je2UL._SL500_.jpg',
    price: '60', user: @admin, category: @category8
)

puts "#{Textbook.count} texbooks created"