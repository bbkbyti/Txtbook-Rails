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
@textbook3 = Textbook.create!(
    title: 'Chemistry',
    author: 'Steven S. Zumdahl, Susan A. Zumdahl',
    edition: '9',
    ISBN: '1133611109',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/61fld3J856L._SX390_BO1,204,203,200_.jpg',
    price: '231', user: @admin, category: @category7
)
@textbook4 = Textbook.create!(
    title: 'Campbell Bilogy',
    author: 'Lisa Urry, Michael Cain, Steven Wasserman, Peter Minorsky, Jane Reece',
    edition: '9',
    ISBN: '0134093410',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41JaGePfE3L._SX412_BO1,204,203,200_.jpg',
    price: '200', user: @admin, category: @category6
)
@textbook5 = Textbook.create!(
    title: 'Mechanics of Materials',
    author: 'Russell Hibbeler',
    edition: '10',
    ISBN: '0134319656',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/51TuXkhEE2L._SX258_BO1,204,203,200_.jpg',
    price: '241', user: @admin, category: @category1
)
@textbook6 = Textbook.create!(
    title: 'U.S. History by OpenStax',
    author: 'P. Scott Corbett, Volker John M. Lund Janssen, Todd Pfannestiel, Paul Vickery',
    edition: '1',
    ISBN: '1938168364',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41qthoPq73L._SX384_BO1,204,203,200_.jpg',
    price: '49', user: @admin, category: @category2
)
@textbook7 = Textbook.create!(
    title: 'Magruders American Government',
    author: 'Savvas Learning Co',
    edition: '1',
    ISBN: '0133240827',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/419tViH9k7L._SX385_BO1,204,203,200_.jpg',
    price: '75', user: @admin, category: @category3
)
@textbook8 = Textbook.create!(
    title: 'The Norton Introduction to Literature',
    author: 'Kelly J. Mays',
    edition: '13',
    ISBN: '0393664945',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41H4MdPcjCL._SX334_BO1,204,203,200_.jpg',
    price: '75', user: @admin, category: @category4
)
@textbook9 = Textbook.create!(
    title: 'Complete Modern Persian(Farsi) Beginner to Intermediate',
    author: 'Narguess Farzad',
    edition: '1',
    ISBN: '1444102303',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/51hei898UTL._SX357_BO1,204,203,200_.jpg',
    price: '55', user: @admin, category: @category5
)
@textbook10 = Textbook.create!(
    title: 'Teaching English as a Second or Foreign Language',
    author: 'Marianne Celce-Murcia , Donna M. Brinton  , Marguerite Ann Snow , David Bohlke ',
    edition: '4',
    ISBN: '1111351694',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41j9MgIk6sL._SX398_BO1,204,203,200_.jpg',
    price: '45', user: @admin, category: @category9
)
@textbook11 = Textbook.create!(
    title: 'Principles of Economics',
    author: 'N. Gregory Mankiw',
    edition: '8',
    ISBN: '1305585127',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/51P4VGHMQRL._SX258_BO1,204,203,200_.jpg',
    price: '105', user: @admin, category: @category11
)
@textbook12 = Textbook.create!(
    title: 'Computer Science: An Overview',
    author: 'Glenn Brookshear, Dennis Brylow',
    edition: '13',
    ISBN: '013487546X',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/51FkY6Xwb8L._SX398_BO1,204,203,200_.jpg',
    price: '160', user: @admin, category: @category13
)
@textbook13 = Textbook.create!(
    title: 'Electrical Engineering: Principles & Applications',
    author: 'Dennis Coon, John O. Mitterer, Tanya S. Martini',
    edition: '15',
    ISBN: '0134484142',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/41OzpSQiuCL._SX411_BO1,204,203,200_.jpg',
    price: '105', user: @admin, category: @category26
)
@textbook14 = Textbook.create!(
    title: 'Introduction to Psychology: Gateways to Mind and Behavior',
    author: 'Allan Hambley',
    edition: '7',
    ISBN: '0134484142',
    img_url: 'https://images-na.ssl-images-amazon.com/images/I/4150k4ZR3kL._SX378_BO1,204,203,200_.jpg',
    price: '265', user: @admin, category: @category17
)
puts "#{Textbook.count} texbooks created"