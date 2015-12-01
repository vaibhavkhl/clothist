class Box < ActiveRecord::Base
  #belongs_to :user
  has_many :box_products
  accepts_nested_attributes_for :box_products
end
