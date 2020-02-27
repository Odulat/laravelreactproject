<?php

use Illuminate\Database\Seeder;

class AcademicDegreesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
         DB::table('study_statuses')->insert([
            'sort_order' => '1',
            'description_kk' => 'Жоқ',
            'description_ru' => 'Не имеет степени',
            'description_en' => 'None'
        ]);
        
        DB::table('study_statuses')->insert([
            'sort_order' => '2',
            'description_kk' => 'Магистр',
            'description_ru' => 'Магистр',
            'description_en' => 'Master'
        ]);
        
        DB::table('study_statuses')->insert([
            'sort_order' => '3',
            'description_kk' => 'Ғылымдар кандидаты',
            'description_ru' => 'Кандидат наук',
            'description_en' => 'Кандидат наук'
        ]);

        DB::table('study_statuses')->insert([
            'sort_order' => '4',
            'description_kk' => 'Ғылымдар докторы',
            'description_ru' => 'Доктор наук',
            'description_en' => 'Доктор наук'
        ]);
        
        DB::table('study_statuses')->insert([
            'sort_order' => '5',
            'description_kk' => 'Доктор PhD',
            'description_ru' => 'Доктор PhD',
            'description_en' => 'Доктор PhD'
        ]);
        
        DB::table('study_statuses')->insert([
            'sort_order' => '6',
            'description_kk' => 'Доктор по профилю',
            'description_ru' => 'Доктор по профилю',
            'description_en' => 'Доктор по профилю'
        ]);
    }
}
