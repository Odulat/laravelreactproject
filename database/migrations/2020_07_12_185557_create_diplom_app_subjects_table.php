<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiplomAppSubjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diplom_app_subjects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer('spd_course_id')->default(0);
            $table->integer('dl_course_id')->default(0);
            $table->integer('student_id');
            $table->integer('discipline_code')->default('');
            $table->string('discipline_name_kk')->default('');
            $table->string('discipline_name_ru')->default('');
            $table->string('discipline_name_en')->default('');
            $table->integer('discipline_credits')->default(0);
            $table->integer('discipline_ects_credits')->default(0);
            $table->float('final_grade')->default(0);
            $table->string('alpha_mark')->default('');
            $table->float('numeric_mark')->default(0);
            $table->string('traditional_mark')->default('');
            $table->integer('discipline_type_id')->default(3);
            $table->boolean('is_disabled')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diplom_app_subjects');
    }
}
