<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(RolesTableSeeder::class);
        $this->call(ModulesTableSeeder::class);
        $this->call(TutorTableSeeder::class);
        $this->call(StudentTableSeeder::class);
        $this->call(TeachingLanguagesTableSeeder::class);
        $this->call(AcademicDegreesTableSeeder::class);
        $this->call(AcademicRanksTableSeeder::class);
        $this->call(EnglishLevelsTableSeeder::class);
        $this->call(EmpCntTypesTableSeeder::class);
        $this->call(EmpCntTermReasonsTableSeeder::class);
        $this->call(VacationStatusesTableSeeder::class);
        $this->call(DepartmentTypesTableSeeder::class);
        $this->call(DepartmentsTableSeeder::class);
        $this->call(PositionTimeTypesTableSeeder::class);
        $this->call(PositionTypesTableSeeder::class);
		$this->call(EducationAreasTableSeeder::class);
		$this->call(TrainingDirectionsTableSeeder::class);
        
    }
}
