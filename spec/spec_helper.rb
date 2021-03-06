require 'pry'
require 'factory_girl'
require 'kitten'

RSpec.configure do |config|
  config.color     = true
  config.tty       = true
  config.formatter = :documentation

  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.order = :random

  Kernel.srand config.seed

  config.include FactoryGirl::Syntax::Methods
end

$LOAD_PATH.unshift File.expand_path('../../lib', __FILE__)
