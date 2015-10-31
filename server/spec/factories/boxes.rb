# Read about factories at https://github.com/thoughtbot/factory_girl

FactoryGirl.define do
  factory :box do
    delivery_date "2015-10-31 19:15:56"
    return_day "MyString"
    special_instructions "MyText"
    user nil
  end
end
