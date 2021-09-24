class Education < ApplicationRecord
  # self.table_name = "educations"
  validates :institution_name, presence: true
  validates :start_month, presence: true
  validates :start_year, presence: true
  validates :end_month, presence: true
  validates :end_year, presence: true
  validates :degree, presence: true
  validates :field, presence: true
end
