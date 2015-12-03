class BoxProduct < ActiveRecord::Base
  #belongs_to :box
  belongs_to :product

  has_one :returned_product_reason
  accepts_nested_attributes_for :returned_product_reason
end
