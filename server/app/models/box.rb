class Box < ActiveRecord::Base
  before_create :create_unique_identifier
  #belongs_to :user
  has_many :box_products
  accepts_nested_attributes_for :box_products

  has_one :feedback
  accepts_nested_attributes_for :feedback

  def create_unique_identifier
    begin
      self.unique_identifier = SecureRandom.hex(6)
    end while Box.where(unique_identifier: self.unique_identifier).exists?
  end

end
