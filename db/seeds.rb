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

@admin = User.create!(username: 'bbk', email: 'bbk@email.com', password: '123456')


puts "#{User.count} Users created"

@psychology = Category.create!(name: 'Psychology', title:'sup')
@horror = Category.create!(name: 'HORROR', title:'scary')
@science = Category.create!(name:"SCIENCE", title:'Wat')
puts "#{Category.count} Categories created"

@humannature = Textbook.create!(title: 'Human Nature', user: @admin, category: @psychology)
@nice = Textbook.create!(title: 'Nice Book', user: @admin, category: @horror)
@bad = Textbook.create!(title: 'Bad Book', user: @admin, category: @science)

puts "#{Textbook.count} Textbooks created "

