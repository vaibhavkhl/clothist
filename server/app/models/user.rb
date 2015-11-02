class User < ActiveRecord::Base
  devise :database_authenticatable, :recoverable,
         :registerable

  include DeviseTokenAuth::Concerns::User

  before_save -> { skip_confirmation! }

  has_many :workpreference
  accepts_nested_attributes_for :workpreference

  has_many :leisurepreference
  accepts_nested_attributes_for :leisurepreference

  has_many :dislikepreference
  accepts_nested_attributes_for :dislikepreference

  has_many :patternsdislikepreference
  accepts_nested_attributes_for :patternsdislikepreference

  has_one :costpreference
  accepts_nested_attributes_for :costpreference

  has_many :box

  has_one :size_profile
end
