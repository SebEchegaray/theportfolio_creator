class Work < ApplicationRecord
  self.table_name = "work_experiences"
  validates :title, presence: true
  validates :company_name, presence: true
  validates :start_month, presence: true
  validates :start_year, presence: true
  validates :end_month, presence: true
  validates :end_year, presence: true
  validates :industry, presence: true
  validates :description, presence: true
end
