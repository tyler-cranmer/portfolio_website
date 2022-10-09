from django.test import TestCase
from .models import Technology
from unittest.mock import MagicMock
from django.core.files import File
# Create your tests here.


class TechnologyModelTest(TestCase):
    @classmethod
    def setUpTestData(cls):
        file_mock = MagicMock(spec=File)
        file_mock.name = 'python.jpeg'
        Technology.objects.create(name='python', icon=file_mock)

    
    def test_name(self):
        Tech = Technology.objects.get(id=1)
        expected_name = f'{Tech.name}'
        self.assertEqual(expected_name, 'python')
    
    def test_icon(self):
        file_mock = MagicMock(spec=File)
        file_mock.name = 'python.jpeg'
        tech_model = Technology(name='python', icon=file_mock)
        self.assertEqual(tech_model.icon.name, file_mock.name)