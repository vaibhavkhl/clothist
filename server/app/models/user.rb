class User < ActiveRecord::Base
  devise :database_authenticatable, :recoverable,
         :registerable

  include DeviseTokenAuth::Concerns::User

  #before_save -> { skip_confirmation! }

  has_many :work_preferences
  accepts_nested_attributes_for :work_preferences

  has_many :leisure_preferences
  accepts_nested_attributes_for :leisure_preferences

  has_many :dislike_preferences
  accepts_nested_attributes_for :dislike_preferences

  has_many :patterns_dislike_preferences
  accepts_nested_attributes_for :patterns_dislike_preferences

  has_one :cost_preferences
  accepts_nested_attributes_for :cost_preferences

  has_many :boxes

  has_one :size_profile
end
