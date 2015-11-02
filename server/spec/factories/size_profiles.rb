# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :size_profile do
    tshirt_size "MyString"
    tshirt_brand "MyString"
    shirt_size "MyString"
    shirt_brand "MyString"
    shirt_fit "MyString"
    trouser_size "MyString"
    trouser_brand "MyString"
    trouser_fit "MyString"
    height "MyString"
    weight "MyString"
    skin_color "MyString"
    user nil
  end
end
